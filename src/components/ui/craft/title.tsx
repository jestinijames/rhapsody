import React from 'react';

import { cn } from '@/lib/utils';

const Title = ({
  title_text,
  className,
}: {
  title_text: string;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        `text-[30px] 2sm:text-4xl font-bold leading-135 text-primary-rhapsody font-farro mb-7.5 ${className}`
      )}
    >
      {title_text}
    </h3>
  );
};

export default Title;
