import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as light } from '../styles/themes/light';
import { theme as dark } from '../styles/themes/dark';

interface Theme {
  name: string;
  colors: {
    bgWhite: string;
    bgGray: string;
    brandcolorPrimaryLight: string;
    brandcolorPrimaryDefault: string;
    textcolorPrimary: string;
    textcolorSecondary: string;
    outlineGrayDark: string;
  };
}

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'dark') {
      setTheme(light);
    } else if (theme.name === 'light') {
      setTheme(dark);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
