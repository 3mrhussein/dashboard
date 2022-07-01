import { createContext, useState } from 'react';

export const ThemeContext = createContext({ themeOption: '', themeColor: '' });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    themeOption: 'light',
    themeColor: '#FF663C',
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
