import { useEffect } from 'react';
import { useScrollState } from '../store/scroll';

function useScroll() {
  const { setScroll } = useScrollState();

  useEffect(() => {
    const onScroll = () => {
      const { scrollX: x, scrollY: y } = window;
      setScroll({
        x,
        y,
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

export default useScroll;
