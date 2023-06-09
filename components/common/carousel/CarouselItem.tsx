import styles from "@/styles/components/Carousel.module.sass";
import { WithChildren } from "@/utils/util-types";

type CarouselItemProps = WithChildren<{}>;

function CarouselItem({ children }: CarouselItemProps) {
  return <li className={styles.carousel_snap}>{children}</li>;
}

export default CarouselItem;
