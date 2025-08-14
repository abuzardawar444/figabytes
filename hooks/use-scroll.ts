/**
 * A custom React hook that tracks whether the window has been scrolled past a specified threshold.
 *
 * @param threshold - The scroll position (in pixels) to determine the scrolled state.
 * @returns A boolean indicating whether the window has been scrolled past the threshold.
 */
import { useCallback, useEffect, useState } from "react";

export const useScroll = (threshold: number) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > threshold);
  }, [threshold]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return isScrolled;
};
