import React from 'react';
import { Github, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold text-zinc-100 mb-4">
              Let's build something real.
            </h2>
            <p className="text-zinc-400 max-w-md">
              A philosophy student, entrepreneur, and AI-assisted builder applying for the Claude Campus Ambassador program.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-4">
            <a 
              href="mailto:eros101988@gmail.com" 
              className="inline-flex items-center text-lg font-medium text-orange-400 hover:text-orange-300 transition-colors group"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/eros101988" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Eros. Built with AI.</p>
          <p className="mt-2 md:mt-0">Fu Jen Catholic University</p>
        </div>
      </div>
    </footer>
  );
}
