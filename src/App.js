import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Footer, Navbar, Settings, Sidebar } from './components';
import { Ecommerce } from './pages';
import { ThemeContext } from './context/theme.context';
import { TabsContext } from './context/tabs.context';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
const App = () => {
  const [settingsEffect, setSettingsEffect] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { showSidebar, setShowSettings, showSettings, setShowSidebar } =
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
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowSidebar(false);
    }
  }, []);
  return (
    <div className=" w-screen  h-screen dark:text-gray-100 bg-main-bg dark:bg-main-dark-bg">
      <BrowserRouter>
        <div className="  dark:bg-main-dark-bg h-full w-full flex">
          {/* Tools Button */}

          <div className="fixed right-8  bottom-8 z-40 ">
            <TooltipComponent content={'Settings'} position="Bottom-Left">
              <button
                onClick={toggleSettings}
                type="button"
                className={`${
                  settingsEffect && 'animate-spin-1'
                } text-white  rounded-full text-3xl p-3 hover:bg-light-gray hover:shadow-md  shadow-gray-500`}
                style={{ backgroundColor: theme?.themeColor }}
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

          <div
            className={`  h-screen shadow-md ${
              showSidebar ? 'block' : 'hidden'
            }   shadow-gray-500 fixed md:static flex bg-white dark:bg-secondary-dark-bg  z-1000`}
            style={{ minWidth: '260px' }}
          >
            <Sidebar />
          </div>

          {/* Body */}

          <div className="flex flex-col w-full overflow-x-hidden  ">
            {/* Navbar */}

            <Navbar />

            {/* Settings Menu */}
            {showSettings && (
              <div
                className=" fixed  w-72 h-3/4 overflow-scroll animate-slide-bottom-up  right-0 shadow-md rounded-2xl z-40 dark:text-white bg-white dark:shadow-gray-600 dark:bg-secondary-dark-bg "
                style={{ bottom: '15%' }}
              >
                <Settings />
              </div>
            )}
            <div className="w-full overflow-y-scroll">
              <div className="w-full  max-w-7xl px-3 mx-auto pt-2  ">
                <Routes>
                  <Route exact path="/" element={<Ecommerce />} />
                  <Route exact path="/ecommerce" element={<Ecommerce />} />
                  <Route exact path="/orders" element={<Orders />} />
                  <Route exact path="/employees" element={<Employees />} />
                  <Route exact path="/customers" element={<Customers />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
