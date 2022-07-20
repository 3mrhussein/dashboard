import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Footer, Navbar, Settings, Sidebar } from './components';

import { ThemeContext } from './context/theme.context';
import { TabsContext } from './context/tabs.context';
import {
  Bar,
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Calendar,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Financial,
  Pie,
  Pyramid,
} from './pages';

const App = () => {
  const [settingsEffect, setSettingsEffect] = useState(false);
  const { theme } = useContext(ThemeContext);
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
    <div className=" w-screen h-screen dark:text-gray-100 bg-main-bg dark:bg-main-dark-bg">
      <BrowserRouter>
        <div className="  dark:bg-main-dark-bg h-full w-full flex">
          {/* Tools Button */}

          <div className="fixed right-8  bottom-8 z-1000 ">
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
            }   shadow-gray-500 fixed md:static flex bg-white dark:bg-secondary-dark-bg  z-40`}
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
              <div className=" flex justify-end w-full h-screen  top-0 right-0 bg-half-transparent z-50 absolute  ">
                <div
                  className="  w-1/2 min-w-300  min-h-590 overflow-y-scroll animate-slide-bottom-up  m-auto shadow-md rounded-2xl z-1000 dark:text-white bg-white dark:shadow-gray-600 dark:bg-secondary-dark-bg "
                  style={{ bottom: '15%' }}
                >
                  <Settings />
                </div>
              </div>
            )}
            <div className="w-full overflow-y-scroll">
              <div className="w-full  max-w-7xl p-3 mx-auto   ">
                <Routes>
                  <Route exact path="/" element={<Ecommerce />} />
                  <Route exact path="/ecommerce" element={<Ecommerce />} />
                  <Route exact path="/orders" element={<Orders />} />
                  <Route exact path="/employees" element={<Employees />} />
                  <Route exact path="/customers" element={<Customers />} />
                  <Route exact path="/calendar" element={<Calendar />} />
                  <Route exact path="/kanban" element={<Kanban />} />
                  <Route exact path="/editor" element={<Editor />} />
                  <Route exact path="/color-picker" element={<ColorPicker />} />
                  <Route exact path="/line" element={<Line />} />
                  <Route exact path="/area" element={<Area />} />
                  <Route exact path="/bar" element={<Bar />} />
                  <Route exact path="/pie" element={<Pie />} />
                  <Route exact path="/financial" element={<Financial />} />
                  <Route exact path="/pyramid" element={<Pyramid />} />
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
