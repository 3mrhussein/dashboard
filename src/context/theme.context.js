import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({ themeOption: '', themeColor: '' });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  useEffect(() => {
    let Color = localStorage.getItem('color') || '#ff3c55';
    let Mode = localStorage.getItem('mode') || 'light';
    setTheme({
      themeOption: Mode,
      themeColor: Color,
    });
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
