import React from 'react';

import Icon from '../icon/index.jsx';
import { cn } from '../../lib/classnames';

const Input = React.forwardRef(
  ({
    className, classInput, classIcon, iconType, iconDirection = 'right', ...props
  }, ref) => (
    <div
      className={cn(
        'relative flex h-10 items-center rounded-lg bg-white border-input shadow-sm border pl-3 pr-2 gap-x-2',
        iconDirection === 'left' ? 'flex-row-reverse' : '',
        iconDirection === 'right' ? 'flex-row' : '',
        className,
      )}
    >
      <input
        type="text"
        ref={ref}
        className={cn(
          'flex-1 text-slate-600 w-full text-sm font-semibold placeholder:text-gray-light bg-transparent placeholder:font-normal focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          classInput,
        )}
        {...props}
      />
      {iconType && <Icon type={iconType} className={cn('text-xs', classIcon)} />}
    </div>
  ),
);
Input.displayName = 'Input';

export default Input;
