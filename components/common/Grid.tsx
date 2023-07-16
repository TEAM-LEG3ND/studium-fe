import { HTMLAttributes, LiHTMLAttributes } from "react";
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

function GridItem({ className, children, ...props }: ItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

export default Object.assign(Grid, {
  Item: GridItem,
});
