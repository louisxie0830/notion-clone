import { useEffect, useState } from 'react';

/**
 * Custom hook that tracks whether the page has been scrolled past a specified threshold.
 *
 * @param {number} [threshold=10] - The scroll position (in pixels) at which the hook considers the page to be scrolled. Default is 10 pixels.
 * @returns {boolean} `true` if the page has been scrolled beyond the threshold, otherwise `false`.
 *
 * @example
 * const hasScrolled = useScrollTop(100);
 *
 * If the user scrolls past 100px from the top, `hasScrolled` will be `true`.
 **/
export const useScrollTop = (threshold: number = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
};
