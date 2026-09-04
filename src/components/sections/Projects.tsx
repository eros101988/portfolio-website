import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Github, ExternalLink, GitBranch, Terminal, Database } from 'lucide-react';
import { Button } from '../ui/Button';

const projects = [
  {
    title: 'BookAIProject',
    date: 'Early 2025',
    description: 'A local AI learning system where students upload course materials and ask questions grounded in those materials. Evolved from a simple chatbot into a complex system with document processing, vector search (FAISS), SQLite storage, and background workers.',
    impact: 'Tested with real medical and philosophy students, leading to complete revisions of the retrieval architecture based on user feedback.',
    tech: ['Vector Search', 'RAG Architecture', 'SQLite', 'Background Workers'],
    icon: <Database className="w-6 h-6" />,
    featured: true,
  },
  {
    title: 'LINE Automation Product',
    date: '2025',
    description: 'A LINE-based scheduling and group messaging system. Allowed users to configure messages, schedule delivery, and target specific groups using a LINE bot.',
    impact: 'Forced me to move beyond "AI generated some code" to understanding how multiple real services (APIs, databases, schedulers, auth) must work together reliably.',
    tech: ['LINE API', 'Scheduling', 'Authentication', 'Server Deployment'],
    icon: <Terminal className="w-6 h-6" />,
    link: 'https://github.com/eros101988/LINE-Automation',
  },
  {
    title: 'Taipei Metro Hackathon (3rd Place)',
    date: '2026',
    description: 'Served as the primary creator and operator behind a project that placed 3rd overall. Explored how Taipei Metro reward points could create economic value by allowing passengers to support local businesses.',
    impact: 'Reached a top result against traditional engineering teams, reinforcing that AI can dramatically change who is capable of becoming a builder.',
    tech: ['Product Concept', 'Business Model', 'Prototype Dev', 'Pitch Strategy'],
    icon: <GitBranch className="w-6 h-6" />,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Proof of Work." 
          subtitle="Projects that demonstrate my transition from having ideas to shipping functional products."
          className="text-center md:text-left"
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={`relative overflow-hidden ${project.featured ? 'border-orange-500/30 bg-zinc-900/80 shadow-[0_0_30px_-15px_rgba(249,115,22,0.3)]' : 'bg-zinc-900/50'}`}
              >
                {project.featured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-300" />
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${project.featured ? 'bg-orange-500/20 text-orange-400' : 'bg-zinc-800 text-zinc-300'}`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 font-serif">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm font-medium text-orange-400/80 uppercase tracking-wider mb-4">
                      {project.date}
                    </p>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="pt-4 pb-2">
                      <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2">The Impact / Lesson</h4>
                      <p className="text-zinc-400 italic">
                        "{project.impact}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full">
                    {project.featured ? (
                      <div className="w-full h-full min-h-[200px] rounded-xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-center items-center text-center space-y-4">
                        <Database className="w-12 h-12 text-zinc-700" />
                        <p className="text-sm text-zinc-500">
                          Verified through local development logs, SQLite databases, and early 2025 commit history.
                        </p>
                        <Button variant="outline" size="sm" className="w-full" onClick={() => window.open('https://github.com/eros101988/BookAI-Project', '_blank')}>
                          <Github className="w-4 h-4 mr-2" />
                          View Repository
                        </Button>
                      </div>
                    ) : (
                      project.link && (
                        <Button variant="ghost" size="sm" onClick={() => window.open(project.link, '_blank')}>
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
