import React from 'react';

import { cn } from '@/lib/utils';

const TextAreaFiled = ({
  placeholder,
  className,
  ...props
}: {
  placeholder: string;
  className: string;
}) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      required
      className={cn(
        `px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `
      )}
    />
  );
};

export default TextAreaFiled;
