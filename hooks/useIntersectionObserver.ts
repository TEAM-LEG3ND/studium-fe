import { useEffect } from "react";

function useIntersectionObserver(
  ref: React.RefObject<Element>,
  onIntersect: () => void,
  options: IntersectionObserverInit = {},
) {
  const { threshold = 1, root = null, rootMargin = "0%" } = options;

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { threshold, root, rootMargin },
    );

    observer.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, onIntersect]);
}

export default useIntersectionObserver;
