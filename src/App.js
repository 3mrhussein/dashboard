import React, { Suspense, useContext, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Footer, Navbar, Settings, Sidebar } from './components';

import { ThemeContext } from './context/theme.context';
import { TabsContext } from './context/tabs.context';
import Spinner from './components/Spinner';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
const Ecommerce = React.lazy(() => import('./pages/Ecommerce'));
const Bar = React.lazy(() => import('./pages/Bar'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Employees = React.lazy(() => import('./pages/Employees'));
const Customers = React.lazy(() => import('./pages/Customers'));
const Calendar = React.lazy(() => import('./pages/Calendar'));
const Kanban = React.lazy(() => import('./pages/Kanban'));
const Editor = React.lazy(() => import('./pages/Editor'));
const ColorPicker = React.lazy(() => import('./pages/ColorPicker'));
const Line = React.lazy(() => import('./pages/Line'));
const Area = React.lazy(() => import('./pages/Area'));
const Financial = React.lazy(() => import('./pages/Financial'));
const Pie = React.lazy(() => import('./pages/Pie'));
const Pyramid = React.lazy(() => import('./pages/Pyramid'));

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
  }, [setShowSidebar]);
  return (
    <div className=" w-screen h-screen dark:text-gray-100 bg-main-bg dark:bg-main-dark-bg">
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
          <Navbar />

          {/* Settings Menu */}
          {showSettings && (
            <div className=" flex justify-end w-full h-screen  top-0 right-0 bg-half-transparent z-50 absolute  ">
              <div
                className="  w-1/2 min-w-300 overflow-y-scroll animate-slide-bottom-up  m-auto shadow-md rounded-2xl z-1000 dark:text-white bg-white dark:shadow-gray-600 dark:bg-secondary-dark-bg "
                style={{ bottom: '15%' }}
              >
                <Settings />
              </div>
            </div>
          )}
          <div className="w-full overflow-y-scroll">
            <div className="w-full  max-w-7xl p-3 mx-auto min-h-screen ">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Ecommerce />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/ecommerce"
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Ecommerce />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Orders />
                    </Suspense>
                  }
                  path="/orders"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Employees />
                    </Suspense>
                  }
                  path="/employees"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Customers />
                    </Suspense>
                  }
                  path="/customers"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Calendar />
                    </Suspense>
                  }
                  path="/calendar"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Kanban />
                    </Suspense>
                  }
                  path="/kanban"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Editor />
                    </Suspense>
                  }
                  path="/editor"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <ColorPicker />
                    </Suspense>
                  }
                  path="/color-picker"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Line />
                    </Suspense>
                  }
                  path="/line"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Area />
                    </Suspense>
                  }
                  path="/area"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Bar />
                    </Suspense>
                  }
                  path="/bar"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Pie />
                    </Suspense>
                  }
                  path="/pie"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Financial />
                    </Suspense>
                  }
                  path="/financial"
                />

                <Route
                  exact
                  element={
                    <Suspense fallback={<Spinner Loading />}>
                      <Pyramid />
                    </Suspense>
                  }
                  path="/pyramid"
                ></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
