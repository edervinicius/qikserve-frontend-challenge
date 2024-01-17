import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "normal" | "fullwidth";
  onClick?: () => void;
  primaryColour: string;
  primaryColourHover: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  width,
  primaryColour,
  primaryColourHover,
}) => {
  return (
    <StyledButton
      className={width}
      $primaryColour={primaryColour}
      $primaryColourHover={primaryColourHover}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
