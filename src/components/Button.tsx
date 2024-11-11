import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};

const Button = (props: Props) => {
  return <button className={props.className}>{props.children}</button>;
};

export default Button;
