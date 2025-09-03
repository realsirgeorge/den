'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { profile } from '@/content/content';

const iconMap = {
  Code,
  Shield,
  Users,
  Award
};

export default function DevelopmentGrid() {
  return (
    <section id="development" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Development"
          title="Continuous Learning"
          subtitle="Staying at the forefront of cybersecurity through active community engagement"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.professionalDevelopment.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}