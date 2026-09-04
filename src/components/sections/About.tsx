import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Code2, Brain, Rocket } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading 
              title="Philosophy meets Engineering." 
              subtitle="My journey from thinking about problems to actually building solutions."
            />
            
            <div className="prose prose-invert prose-lg text-zinc-400">
              <p>
                我是輔仁大學哲學系學生、創業者，也是靠 AI 把想法變成真實產品的實作者。雖然沒有傳統資工背景，但我已經實際碰過 API、資料庫、伺服器、部署、使用者測試、產品迭代與跨職能團隊管理。
              </p>
              <p>
                AI has had a very concrete impact on my life. When I first became interested in building software, many of the ideas I had would traditionally have required years of technical training. AI dramatically lowered that barrier for me.
              </p>
              <p>
                Instead of learning programming only through lectures, I learned by trying to solve real problems. When I needed an API, I learned APIs. When a server failed, I learned deployment.
              </p>
              <blockquote className="border-l-2 border-orange-500 pl-6 my-8 text-xl font-medium text-zinc-200 font-serif italic">
                "AI should reduce the cost of learning, not remove the need to think."
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6"
          >
            <Card hover className="bg-zinc-900/80">
              <Brain className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2">The Philosophy Advantage</h3>
              <p className="text-zinc-400">
                The most important question isn't whether we use AI, but how we use it. AI doesn't remove the need to understand system design or business logic—it allows us to encounter those problems much earlier.
              </p>
            </Card>
            
            <Card hover className="bg-zinc-900/80">
              <Code2 className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2">AI-Assisted Workflow</h3>
              <p className="text-zinc-400">
                I developed a deep workflow: breaking problems into tasks, asking AI agents to inspect code, debugging failures, testing implementations, and repeatedly improving the product.
              </p>
            </Card>

            <Card hover className="bg-zinc-900/80">
              <Rocket className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Focus on Real Users</h3>
              <p className="text-zinc-400">
                A product is not finished when the code works. It is finished when the user finds it useful. The market and real users reveal problems that classroom demonstrations often cannot.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
