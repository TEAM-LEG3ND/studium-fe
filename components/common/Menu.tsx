import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from "react";
import styles from "@/styles/components/Menu.module.sass";

type Props = HTMLAttributes<HTMLDivElement>;

type TriggerProps = {
  as: ReactElement;
  onClick: (e?: React.MouseEvent) => void;
};

type ContainerProps = HTMLAttributes<HTMLUListElement>;

type ItemProps = LiHTMLAttributes<HTMLLIElement>;

function Menu({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

function MenuTrigger({ as, onClick }: TriggerProps) {
  const trigger = Children.only(as);

  return cloneElement(trigger, {
    onClick,
    ...trigger.props,
  });
}

const MenuContainer = forwardRef(
  (
    { className, children, ...props }: ContainerProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul ref={ref} className={`${styles.container} ${className}`} {...props}>
      {children}
    </ul>
  ),
);

function MenuItem({ children, ...props }: ItemProps) {
  return <li {...props}>{children}</li>;
}

function MenuDivider({ ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} />;
}

export default Object.assign(Menu, {
  Trigger: MenuTrigger,
  Container: MenuContainer,
  Item: MenuItem,
  Divider: MenuDivider,
});
