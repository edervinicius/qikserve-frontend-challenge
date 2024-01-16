import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "normal" | "fullwidth";
}

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton className={props.width}>{props.children}</StyledButton>;
};

export { Button };
