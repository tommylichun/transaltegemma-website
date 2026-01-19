'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean;
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, featured = false, hover = true, children, ...props }, ref) => {
    if (featured) {
      return (
        <div
          className={cn(
            'rounded-xl bg-gradient-to-br from-accent via-accent-secondary to-accent p-[2px]',
            hover && 'transition-all duration-300 hover:shadow-accent-lg',
            className
          )}
          ref={ref}
          {...props}
        >
          <div className="h-full w-full rounded-[calc(0.75rem-2px)] bg-card p-6 md:p-8">
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        className={cn(
          'rounded-xl border border-border bg-card p-6 md:p-8 shadow-md transition-all duration-300',
          hover && 'hover:shadow-xl hover:-translate-y-1 group',
          className
        )}
        ref={ref}
        {...props}
      >
        {hover && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
