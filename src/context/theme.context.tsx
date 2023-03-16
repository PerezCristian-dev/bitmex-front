import React, { createContext, useMemo, useState } from "react";
import useCustomEffect from "../hooks/useCustomEffect";


export const themes = {
  default: "default-mode",
  dark: "dark-mode"
}
export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

/**
 * Theme Context.
 */

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "default",
  setTheme: () => { },
});

/**
 * Theme Context Provider.
 *
 * @param value string
 * @param children ReactNode
 * @returns ReactNode
 */
export const ThemeContextProvider = ({
  value = "default-mode",
  children,
}: {
  value?: string;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(value);

  useCustomEffect(() => {
    const storeTheme = localStorage.getItem("theme");

    applyTheme(storeTheme || "default-mode");
    setTheme(storeTheme || "default-mode")
  }, []);

  /**
   * Apply theme to 'html' tag on DOM.
   *
   * @param newTheme string
   */
  const applyTheme = (newTheme: string = "default-mode") => {
    const body = document.querySelector("body") as HTMLBodyElement;

    let isMode = Boolean(Object.values(themes).find(theme => body.classList.contains(theme)))
    if (isMode) Object.values(themes).forEach(theme => body.classList.remove(theme))

    localStorage.setItem("theme", newTheme);
    body.classList.add(newTheme);
  };

  /**
   * Handle Theme change.
   *
   * @param theme string
   */
  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    applyTheme(theme);
  };

  /**
   * Current context value for theme.
   */
  const val = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>;
};