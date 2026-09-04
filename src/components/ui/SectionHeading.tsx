import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-20', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
