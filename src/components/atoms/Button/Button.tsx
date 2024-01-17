import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { useTheme } from "../../../hooks/theme";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "normal" | "fullwidth";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, width }) => {
  const theme = useTheme();

  return (
    <StyledButton
      className={width}
      $primaryColour={theme.primaryColour}
      $primaryColourHover={theme.primaryColourHover}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
