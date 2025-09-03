import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://georgewanyoike.dev';

export const defaultSEO: Metadata = {
  title: {
    default: 'George Wanyoike Njoroge | Cybersecurity & Networking Specialist',
    template: '%s | George Wanyoike Njoroge'
  },
  description: 'Cybersecurity and Networking specialist in Nairobi, Kenya. CCNA & HCIA certified with expertise in incident response, SIEM monitoring, and Azure administration.',
  keywords: [
    'Cybersecurity Specialist',
    'Network Engineer',
    'CCNA',
    'HCIA',
    'Azure Administrator',
    'Incident Response',
    'SIEM Monitoring',
    'Nairobi Kenya',
    'Security Engineer'
  ],
  authors: [{ name: 'George Wanyoike Njoroge' }],
  creator: 'George Wanyoike Njoroge',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'George Wanyoike Njoroge | Cybersecurity & Networking Specialist',
    description: 'Cybersecurity and Networking specialist in Nairobi, Kenya. CCNA & HCIA certified with expertise in incident response, SIEM monitoring, and Azure administration.',
    siteName: 'George Wanyoike Njoroge',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'George Wanyoike Njoroge - Cybersecurity & Networking Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Wanyoike Njoroge | Cybersecurity & Networking Specialist',
    description: 'Cybersecurity and Networking specialist in Nairobi, Kenya. CCNA & HCIA certified.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'George Wanyoike Njoroge',
  jobTitle: 'Cybersecurity & Networking Specialist',
  description: 'Cybersecurity and Networking specialist with expertise in incident response, SIEM monitoring, and Azure administration.',
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  email: 'georgewanyoike57@gmail.com',
  telephone: '+254707853938',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'Kenya',
  },
  sameAs: [
    'https://www.linkedin.com/in/george-wanyoike',
    'https://github.com/realsirgeorge',
  ],
  knowsAbout: [
    'Cybersecurity',
    'Network Security',
    'Incident Response',
    'SIEM Monitoring',
    'Azure Administration',
    'Firewall Management',
    'Vulnerability Assessment'
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'CCNA',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Cisco Systems'
      }
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'HCIA Data Communication',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Huawei Technologies'
      }
    }
  ]
};