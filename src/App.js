import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Ecommerce, Navbar, Settings, Sidebar } from './components';
import { ThemeContext } from './context/theme.context';
import { TabsContext } from './context/tabs.context';
const App = () => {
  const [settingsEffect, setSettingsEffect] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { showSidebar, setShowSettings, showSettings } =
    useContext(TabsContext);
  const toggleSettings = (e) => {
    setSettingsEffect(false);
    e.preventDefault();
    setSettingsEffect(true);
    setShowSettings(!showSettings);
  };
  useEffect(() => {
    if (theme?.themeOption === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className=" w-full bg-main-bg dark:bg-main-dark-bg">
      <BrowserRouter>
        <div className="  dark:bg-main-dark-bg  flex">
          {/* Tools Button */}

          <div className="fixed right-8  bottom-8 z-1000 ">
            <TooltipComponent content={'Settings'} position="Bottom-Left">
              <button
                onClick={toggleSettings}
                type="button"
                className={`${
                  settingsEffect && 'animate-spin-1'
                } text-white  rounded-full text-3xl p-3 hover:bg-light-gray hover:shadow-md  shadow-gray-500`}
                style={{ backgroundColor: theme.themeColor }}
                onAnimationEnd={(e) => {
                  e.preventDefault();
                  setSettingsEffect(false);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar  */}
          {showSidebar ? (
            <div className="  h-screen shadow-md min-w-72 min-w-72 shadow-gray-500 fixed md:static flex bg-white dark:bg-secondary-dark-bg  z-1000">
              <Sidebar />
            </div>
          ) : null}

          {/* Body */}

          <div className=" relative h-screen w-full">
            {/* Navbar */}

            <div className="w-full">
              <Navbar />
            </div>

            {/* Settings Menu */}
            {showSettings && (
              <div
                className=" absolute  w-72 h-3/4 md:animate-slide-top  right-0 shadow-md rounded-2xl z-1000 dark:text-white bg-white dark:shadow-gray-600 dark:bg-secondary-dark-bg "
                style={{ bottom: '15%' }}
              >
                <Settings />
              </div>
            )}
            <Routes>
              <Route exact path="/" element={<Ecommerce />} />
              <Route exact path="/ecommerce" element={<Ecommerce />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
