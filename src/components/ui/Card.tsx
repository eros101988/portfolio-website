import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = false, ...props }: CardProps) {
  const Comp = hover ? motion.div : 'div';
  
  return (
    <Comp
      className={cn(
        'rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm',
        hover && 'transition-colors hover:border-zinc-700 hover:bg-zinc-800/50',
        className
      )}
      {...(hover ? { whileHover: { y: -5 }, transition: { duration: 0.2 } } : {})}
      {...props}
    >
      {children}
    </Comp>
  );
}
