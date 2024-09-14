import React from 'react';

const PlayIcon = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 30 36'
      fill='#d67d29'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.500004 1.54552L29 18L0.500002 34.4545L0.500004 1.54552Z'
        stroke='#d67d29'
      ></path>
    </svg>
  );
};

export default PlayIcon;
