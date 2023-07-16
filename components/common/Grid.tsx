import {
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  forwardRef,
} from "react";
import styles from "@/styles/components/Grid.module.sass";

type Props = HTMLAttributes<HTMLUListElement>;

type ItemProps = LiHTMLAttributes<HTMLLIElement>;

function Grid({ className, children, ...props }: Props) {
  return (
    <ul className={`${styles.grid} ${className}`} {...props}>
      {children}
    </ul>
  );
}

const GridItem = forwardRef(
  (
    { className, children, ...props }: ItemProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li ref={ref} className={className} {...props}>
      {children}
    </li>
  ),
);

export default Object.assign(Grid, {
  Item: GridItem,
});
