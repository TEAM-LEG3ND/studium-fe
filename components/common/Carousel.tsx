import styles from "@/styles/components/Carousel.module.sass";
import { WithChildren } from "@/utils/util-types";
import { useEffect, useRef } from "react";
import Prev from "./icon/Prev";
import Next from "./icon/Next";
import Button from "./Button";

type CarouselProps = WithChildren<{
  showSwiper?: boolean;
}>;

function CarouselSwiper() {
  const onClickNextBtn = () => {
    const carouselSnaps = Array.from(
      document.getElementsByClassName(styles.carouselSnap),
    );
    const nextFirstIndex =
      carouselSnaps
        .map(el => el.classList.contains("carouselItemInView"))
        .lastIndexOf(true) + 1;
    if (nextFirstIndex < carouselSnaps.length)
      carouselSnaps[nextFirstIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
  };

  const onClickPrevBtn = () => {
    const carouselSnaps = Array.from(
      document.getElementsByClassName(styles.carouselSnap),
    );
    const prevFirstIndex =
      carouselSnaps
        .map(el => el.classList.contains("carouselItemInView"))
        .indexOf(true) - 1;
    if (prevFirstIndex >= 0)
      carouselSnaps[prevFirstIndex].scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "nearest",
      });
  };

  return (
    <div className={styles.carouselControl}>
      <Button
        type="button"
        data-swipe-direction="left"
        onClick={onClickPrevBtn}
        className={styles.carouselSwipe}
      >
        <Prev />
      </Button>
      <Button
        type="button"
        data-swipe-direction="right"
        onClick={onClickNextBtn}
        className={styles.carouselSwipe}
      >
        <Next />
      </Button>
    </div>
  );
}

function Carousel({ showSwiper = false, children }: CarouselProps) {
  const carouselScrollerRef = useRef(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("carouselItemInView");
            // target.setAttribute("tabIndex", "0");
          } else {
            target.classList.remove("carouselItemInView");
            // target.setAttribute("tabIndex", "-1");
          }
        });
      },
      {
        root: carouselScrollerRef.current,
        threshold: 1,
      },
    );
    Array.from(document.getElementsByClassName(styles.carouselSnap)).forEach(
      el => intersectionObserver.observe(el),
    );

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.carousel}>
      {showSwiper && <CarouselSwiper />}
      <ul ref={carouselScrollerRef} className={styles.carouselScroller}>
        {children}
      </ul>
    </div>
  );
}

type CarouselItemProps = WithChildren<object>;

function CarouselItem({ children }: CarouselItemProps) {
  return <li className={styles.carouselSnap}>{children}</li>;
}

Carousel.Item = CarouselItem;

export default Carousel;
