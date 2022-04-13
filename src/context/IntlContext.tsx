import intl from "react-intl-universal";
import en_US from "../../static/json/en_US.json";
import zh_CN from "../../static/json/zh_CN.json";
import React from "react";

export const IntlContext = React.createContext({
  intl: intl,
  en_US: en_US,
  zh_CN: zh_CN
});