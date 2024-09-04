import { useEffect } from 'react';

const useOverflowHidden = (state: boolean) => {
  useEffect(() => {
    const winBar = window.innerWidth - document.body.clientWidth;
    if (state) {
      if (winBar === winBar) {
        document.body.style.marginRight = `${winBar}px`;
      }
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.marginRight = '0px';
      document.body.style.position = 'static';
      document.body.style.height = 'auto';
    }
  }, [state]);
};

export default useOverflowHidden;
