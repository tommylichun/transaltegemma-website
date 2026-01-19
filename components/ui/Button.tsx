'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  showArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', showArrow = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'gradient-bg text-white shadow-sm hover:shadow-accent hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.98] h-12 md:h-14 px-6 md:px-8',
      secondary: 'border border-border bg-transparent text-foreground hover:bg-muted hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] h-12 md:h-14 px-6 md:px-8',
      ghost: 'text-muted-foreground hover:text-foreground hover:bg-muted/50 active:scale-[0.98] h-12 px-6',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
