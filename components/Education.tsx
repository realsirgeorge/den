'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { profile } from '@/content/content';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Foundation"
          subtitle="Formal education and specialized training in cybersecurity and networking"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.education.map((edu, index) => (
            <motion.div
              key={edu}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
                  >
                    {index === 0 ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : (
                      <BookOpen className="w-5 h-5" />
                    )}
                  </motion.div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {edu}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}