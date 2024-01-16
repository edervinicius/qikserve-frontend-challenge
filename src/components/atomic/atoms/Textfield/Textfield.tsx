import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: "normal" | "fullwidth";
}

const Textfield: React.FC<TextfieldProps> = (props) => {
  return <input className="textField" {...props} />;
};

export { Textfield };
