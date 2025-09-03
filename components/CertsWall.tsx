'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { profile } from '@/content/content';

export default function CertsWall() {
  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Credentials"
          subtitle="Industry-recognized certifications validating expertise in cybersecurity and networking"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group perspective-1000"
            >
              <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    >
                      <Award className="w-6 h-6" />
                    </motion.div>
                    {cert.verified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.status}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}