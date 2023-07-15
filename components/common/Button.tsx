import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: Props) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props}>{children}</button>
  );
}

export default Button;
