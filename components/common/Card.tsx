import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

type HeadingProps = {
  headingText: string;
} & HTMLAttributes<HTMLHeadingElement>;

type SupportingTextProps = {
  supportingText: string;
} & HTMLAttributes<HTMLParagraphElement>;

type MediaProps = {
  type: "img";
  src: string;
} & ImgHTMLAttributes<HTMLImageElement> &
  HTMLAttributes<HTMLVideoElement>;

function Card({ children, ...props }: Props) {
  return <div {...props}>{children}</div>;
}

function HeadLine({ headingText: headline, ...props }: HeadingProps) {
  return <h2 {...props}>{headline}</h2>;
}

function SubHead({ headingText: subhead, ...props }: HeadingProps) {
  return <h3 {...props}>{subhead}</h3>;
}

function Media({ type, src, className }: MediaProps) {
  return (
    <div className={className}>
      {type === "img" ? (
        <Image src={src} alt={`card media ${src}`} fill />
      ) : null}
    </div>
  );
}

function SupportingText({ text, ...props }: SupportingTextProps) {
  return <p {...props}>{text}</p>;
}

function Addon({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

function Divider({ ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} />;
}

export default Object.assign(Card, {
  HeadLine,
  SubHead,
  Media,
  SupportingText,
  Addon,
  Divider,
});
