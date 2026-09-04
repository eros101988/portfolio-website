import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Lightbulb, Wrench, Rocket, RefreshCw } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-zinc-950/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="The Claude Builder Club." 
          subtitle="My vision for the campus community: replace passive lectures with hands-on building."
          className="text-center md:text-left"
        />

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 font-serif">
              First Activity: "From Idea to AI Tool"
            </h3>
            <p className="text-lg text-zinc-300 mb-8 max-w-3xl leading-relaxed">
              參加者不是來「聽 AI」，而是帶著一個自己生活、學習或工作的問題進場。活動結束時，至少要得到一個可以展示、測試或繼續開發的 AI prototype（原型）。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              {[
                { icon: <Lightbulb />, title: 'Problem', desc: 'Bring a real issue' },
                { icon: <Wrench />, title: 'Build', desc: 'Create a prototype' },
                { icon: <Rocket />, title: 'Deploy', desc: 'Put it in front of users' },
                { icon: <RefreshCw />, title: 'Improve', desc: 'Iterate on feedback' }
              ].map((step, i) => (
                <div key={step.title} className="p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 text-center">
                  <div className="inline-flex p-3 rounded-full bg-zinc-900 text-orange-400 mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 mb-2">{step.title}</h4>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Recruitment Strategy</h3>
            <Card className="h-full bg-zinc-900/50">
              <p className="text-zinc-400 leading-relaxed mb-6">
                I would combine online distribution, campus networks, and direct outreach. Leveraging my digital media company's capabilities, we won't just post a flyer—we'll create engaging short-form video content and social media campaigns.
              </p>
              <blockquote className="border-l-2 border-orange-500 pl-6 text-lg font-medium text-zinc-200 italic">
                Instead of saying: "Come learn about AI."<br/>
                I would say: "Come with one problem. Leave with your first working AI tool."
              </blockquote>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Why Claude?</h3>
            <Card className="h-full bg-zinc-900/50">
              <p className="text-zinc-400 leading-relaxed mb-6">
                I have developed a deep AI-assisted development workflow. Historically, I chose tools based on cost-efficiency as a student entrepreneur. Now, I want to bring this mature, proven workflow into the Claude ecosystem.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                The largest barrier for students isn't access to AI—it's not knowing how to structure problems, verify outputs, and iterate effectively. I want to teach the workflow that changed what I was capable of building.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
