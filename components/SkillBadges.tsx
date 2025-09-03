'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SectionHeading from './SectionHeading';
import { profile } from '@/content/content';

const skillCategories = [
  { key: 'cybersecurity', label: 'Cybersecurity', color: 'from-red-500 to-red-600' },
  { key: 'networking', label: 'Networking', color: 'from-blue-500 to-blue-600' },
  { key: 'cloud', label: 'Cloud & Systems', color: 'from-green-500 to-green-600' },
];

export default function SkillBadges() {
  const [activeTab, setActiveTab] = useState('cybersecurity');

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Skills"
          title="Technical Expertise"
          subtitle="Specialized in cybersecurity, networking, and cloud infrastructure"
        />

        <div className="mt-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <TabsList className="grid grid-cols-3 w-full max-w-md bg-slate-800 border border-slate-700">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.key}
                    value={category.key}
                    className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {/* Tab Content */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {skillCategories.map((category) => (
                  <TabsContent key={category.key} value={category.key} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      <TooltipProvider>
                        {profile.skills[category.key as keyof typeof profile.skills].map((skill, index) => (
                          <motion.div
                            key={typeof skill === 'string' ? skill : skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group"
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="p-6 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                                  <div className="space-y-3">
                                    <h3 className="font-semibold text-white text-lg">
                                      {typeof skill === 'string' ? skill : skill.name}
                                    </h3>
                                    {typeof skill === 'object' && (
                                      <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                          <span className="text-gray-400">Proficiency</span>
                                          <span className="text-cyan-400">{skill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                          <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.proficiency}%` }}
                                            transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {typeof skill === 'string' ? skill : skill.name} - {category.label}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </motion.div>
                        ))}
                      </TooltipProvider>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}