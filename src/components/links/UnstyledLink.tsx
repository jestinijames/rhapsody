import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { UnstyledLinkProps } from '@/types/types';

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={className}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={cn('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
