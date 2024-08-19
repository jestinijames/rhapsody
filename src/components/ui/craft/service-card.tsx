import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import OutlineSvgText from '@/components/ui/craft/outline-svg-text';

import { ServiceCardProps } from '@/types/types';

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  service_name,
  service_desc,
  text_muted,
  link,
}) => {
  return (
    <div className='px-3 sm:px-0'>
      <OutlineSvgText text={id} />
      <Link
        href={link}
        onClick={(e) => e.preventDefault()}
        className={cn(
          `text-primary-foreground font-bold leading-135 md:text-4xl text-3xl hover-underline ${text_muted}`
        )}
      >
        <span>{service_name}</span>
      </Link>
      <p className={cn(`font-normal text-primary-foreground ${text_muted}`)}>
        {service_desc}
      </p>
    </div>
  );
};

export default ServiceCard;
