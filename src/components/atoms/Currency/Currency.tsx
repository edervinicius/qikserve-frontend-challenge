import React, { InputHTMLAttributes } from "react";
import { FormattedNumber } from "react-intl";
import { useSelector } from "react-redux";
import { RootState } from "../../../reduxStore/@types";

interface CurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const ccy = useSelector((state: RootState) => state.venue.ccy);
  return <FormattedNumber value={value} style={"currency"} currency={ccy} />;
};

export { Currency };
