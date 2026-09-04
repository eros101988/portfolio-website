import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Briefcase, Users, Target, Zap } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <SectionHeading 
                title="Leadership & Execution." 
                subtitle="Having an idea is easy. Organizing people, maintaining momentum, and consistently delivering is hard."
                className="mb-8"
              />
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                I am the founder and representative of Heshun Digital Enterprise Co., Ltd. (合順數位企業有限公司), a registered Taiwan company focused primarily on short-form video and digital media production.
              </p>
              <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
                <h4 className="text-orange-400 font-bold mb-2">Company Registration</h4>
                <p className="text-zinc-300 font-mono">ID: 62177312</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-zinc-900/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-zinc-800 rounded-xl text-zinc-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100">Cross-functional Management</h3>
                    <p className="text-zinc-400 mt-1">Coordinating a diverse creative team.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                    <p className="text-3xl font-bold text-orange-400 mb-1">3</p>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Video Editors</p>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                    <p className="text-3xl font-bold text-orange-400 mb-1">1</p>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Scriptwriter</p>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                    <p className="text-3xl font-bold text-orange-400 mb-1">2</p>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Marketing</p>
                  </div>
                  <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                    <p className="text-3xl font-bold text-orange-400 mb-1">1</p>
                    <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Exec Assistant</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-zinc-900/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-zinc-800 rounded-xl text-zinc-300">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100">Beyond the Code</h3>
                    <p className="text-zinc-400 mt-1">Real-world business operations.</p>
                  </div>
                </div>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Navigated company registration, government procedures, and contracts outside my university major.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Managed commercial negotiation, client acquisition, and production workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Delivered results: First 8 videos for a client generated ~50,000 views; personal brand project exceeded 10,000 views by the third video.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
