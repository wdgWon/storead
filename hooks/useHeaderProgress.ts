import { useCallback, useEffect, useRef } from "react";

import { sizes } from "@/constants/sizes";
import { useHeaderProgressStore } from "@/store/header-progress-store";
import { mapToRange } from "@/utils/mapToRange";

export const useHeaderProgress = <T extends HTMLElement>() => {
  const { scrollProgress, setScrollProgress, setIsShow, reset } =
    useHeaderProgressStore();
  const elementRef = useRef<T>(null);

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const windowScrollY = document.documentElement.scrollTop;
      const { offsetHeight, offsetTop } = elementRef.current;
      const scrollPosition = mapToRange(
        windowScrollY + sizes.headerHeight,
        offsetTop,
        offsetTop + offsetHeight - window.innerHeight + sizes.headerHeight,
      );
      setScrollProgress(scrollPosition);
    }
  }, [setScrollProgress]);

  useEffect(() => {
    if (elementRef.current) {
      setIsShow(true);

      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      reset();
    };
  }, [elementRef, setScrollProgress, setIsShow, reset, handleScroll]);

  return { scrollProgress, elementRef };
};
