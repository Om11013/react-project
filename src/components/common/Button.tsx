import React from 'react';

import { cn } from '../../utils/cn';

import type { ButtonProps } from '@/types/general';
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-colors',
          'focus:outline-none',
          'disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
