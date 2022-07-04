import { createContext, useState } from 'react';

export const TabsContext = createContext(null);

const TabsProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [displayedTab, setDisplayedTab] = useState('');
  return (
    <TabsContext.Provider
      value={{
        showSidebar,
        displayedTab,
        setDisplayedTab,
        setShowSidebar,
        showSettings,
        setShowSettings,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
