import styles from "@/styles/components/Carousel.module.sass";
import CarouselSwiper from "./CarouselSwiper";
import CarouselItem from "./CarouselItem";
import { WithChildren } from "@/utils/util-types";
import { useEffect, useRef } from "react";

type CarouselProps = WithChildren<{
  showSwiper?: boolean;
}>;

function Carousel({ showSwiper = false, children }: CarouselProps) {
  const carouselScrollerRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("carousel_item_inview");
            // target.setAttribute("tabIndex", "0");
          } else {
            target.classList.remove("carousel_item_inview");
            // target.setAttribute("tabIndex", "-1");
          }
        });
      },
      {
        root: carouselScrollerRef.current,
        threshold: 1,
      }
    );
    Array.from(document.getElementsByClassName(styles.carousel_snap)).forEach(
      (el) => intersectionObserver.observe(el)
    );

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.carousel}>
      {showSwiper && <CarouselSwiper />}
      <ul ref={carouselScrollerRef} className={styles.carousel_scroller}>
        {children}
      </ul>
    </div>
  );
}

Carousel.Item = CarouselItem;

export default Carousel;
