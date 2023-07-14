import { HTMLAttributes, LiHTMLAttributes } from "react";
import Link from "next/link";

type Props = HTMLAttributes<HTMLUListElement>;

type ItemProps = {
  route: string;
} & LiHTMLAttributes<HTMLLIElement>;

function Navigation({ children, className, ...props }: Props) {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
}

function NavigationItem({ route, children, className, ...props }: ItemProps) {
  return (
    <Link href={route} className={className}>
      <li {...props}>{children}</li>
    </Link>
  );
}

export default Object.assign(Navigation, { Item: NavigationItem });
