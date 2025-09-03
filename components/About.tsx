'use client';

import { motion } from 'framer-motion';
import { Shield, Network, Cloud, Users, ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Badge } from '@/components/ui/badge';
import { profile } from '@/content/content';

const features = [
  {
    icon: Shield,
    title: 'Cybersecurity', 
    description: 'Incident response, SIEM monitoring, and vulnerability assessments'
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'CCNA & HCIA certified with expertise in secure network infrastructure'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Azure administration and Microsoft 365 security implementations'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Active in CTFs, hackathons, and cybersecurity communities'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building Secure Digital Infrastructure"
          subtitle="Cybersecurity and Networking specialist with hands-on IT operations experience"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {profile.about.short}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {profile.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="bg-slate-800 text-cyan-400 border-slate-700">
                      {highlight}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll to next section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}