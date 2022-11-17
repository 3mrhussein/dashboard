import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TabsContext } from '../context/tabs.context';
import { ThemeContext } from '../context/theme.context';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import { themeColors } from '../data/dummy';
const Settings = () => {
  const { setShowSettings } = useContext(TabsContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = (e) => {
    e.preventDefault();
    if (theme.themeOption !== e.currentTarget.value) {
      setTheme({ ...theme, themeOption: e.currentTarget.value });
      window.localStorage.setItem('mode', e.currentTarget.value);
    }
  };
  const handleChangeThemeColor = (e) => {
    e.preventDefault();
    if (theme.themeColor !== e.target.value) {
      setTheme({ ...theme, themeColor: e.target.value });
      window.localStorage.setItem('color', e.target.value);
    }
  };
  const optionClassName = ` p-2 gap-2 flex text-base items-center`;
  const sectionDivClassName = `border-b-2 p-4 flex flex-col justify-start items-start`;
  return (
    <div
      className="flex flex-col w-full h-full pl-6 "
      style={{ color: theme.themeColor }}
    >
      <div className="flex justify-between items-center border-b-2 p-6">
        <h2 className="text-lg font-bold ">Settings</h2>
        <button
          className=" text-2xl dark:hover:bg-light-gray rounded-full p-2"
          onClick={() => setShowSettings(false)}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      {/* Theme Mode */}

      <div className={`${sectionDivClassName}`}>
        <h2 className="text-xl font-bold py-4">Theme Option</h2>
        <button
          type="button"
          className={optionClassName}
          value="light"
          onClick={handleClick}
        >
          <span className="text-2xl">
            {theme.themeOption === 'light' ? (
              <BiRadioCircleMarked />
            ) : (
              <BiRadioCircle />
            )}
          </span>
          Light
        </button>
        <button
          type="button"
          className={optionClassName}
          onClick={handleClick}
          value="dark"
        >
          <span className="text-2xl">
            {theme.themeOption === 'dark' ? (
              <BiRadioCircleMarked />
            ) : (
              <BiRadioCircle />
            )}
          </span>
          Dark
        </button>
      </div>
      {/* Theme Colors */}

      <div className={`${sectionDivClassName} border-none mb-10`}>
        <h2 className="text-xl font-bold py-4">Theme Option</h2>
        <div className="flex items-center gap-4  flex-wrap">
          {themeColors.map((color) => (
            <button
              onClick={handleChangeThemeColor}
              key={color.name}
              type="button"
              value={color.color}
              className="rounded-full w-10 h-10 "
              style={{ backgroundColor: color.color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
