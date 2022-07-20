import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({ themeOption: '', themeColor: '' });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    setTheme({
      themeOption: localStorage.getItem('mode') || 'light',
      themeColor: localStorage.getItem('color') || '#ff3c55',
    });
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
