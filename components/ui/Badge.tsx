'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  pulsing?: boolean;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, pulsing = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/5 px-5 py-2',
          className
        )}
        ref={ref}
        {...props}
      >
        {pulsing && (
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
        )}
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
          {children}
        </span>
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
