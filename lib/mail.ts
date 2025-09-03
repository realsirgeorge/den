import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return false;
  }

  if (limit.count >= 3) { // Max 3 submissions per minute
    return true;
  }

  limit.count++;
  return false;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactSchema.parse(data);

    // For static deployment, we'll use mailto or a third-party service
    // You can integrate with services like Formspree, Netlify Forms, or EmailJS
    
    // Create mailto link as fallback
    const subject = encodeURIComponent(validatedData.subject);
    const body = encodeURIComponent(
      `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`
    );
    const mailtoLink = `mailto:georgewanyoike57@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.open(mailtoLink, '_blank');

    return {
      success: true,
      message: 'Opening your email client. Please send the message from there.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Please check your form data and try again.',
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}