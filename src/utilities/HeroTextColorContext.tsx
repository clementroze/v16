import { createContext, useContext } from "react";

export const TextColorContext = createContext<"light" | "dark">("dark");

export const useTextColor = () => useContext(TextColorContext);
