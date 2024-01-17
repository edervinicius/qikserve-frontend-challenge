import React, { InputHTMLAttributes } from "react";
import { StyledTextField } from "./styles";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: "normal" | "fullwidth";
}

const Textfield: React.FC<TextfieldProps> = (props) => {
  return <StyledTextField className="textField" {...props} />;
};

export { Textfield };
