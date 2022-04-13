import React from "react";

export const UserContext = React.createContext({
  user: "这里是张三!",
  setUser: () => {}
})