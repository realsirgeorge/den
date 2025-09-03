'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from './SectionHeading';
import { profile } from '@/content/content';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Career Journey"
          subtitle="Building expertise in cybersecurity and networking through hands-on operations"
        />

        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-green-500 hidden lg:block" />

          <div className="space-y-12">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={`${exp.org}-${exp.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative lg:ml-20"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-24 top-8 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-800 hidden lg:block" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-white">
                            {exp.role}
                          </CardTitle>
                          <p className="text-cyan-400 font-medium">{exp.org}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Impact Points */}
                      <ul className="space-y-3">
                        {exp.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + pointIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + techIndex * 0.05, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              <Badge variant="outline" className="border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}