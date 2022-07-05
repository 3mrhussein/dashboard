import React, { useContext } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ThemeContext } from '../../context/theme.context';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

export const NavbarButton = ({ Icon, OnClick, Content, Shadow, Unread }) => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  const buttonClasses = `relative items-center text-xl hover:bg-light-gray  dark:hover:bg-white p-3 rounded-full`;

  const UnreadMark = (
    <div className="absolute rounded-full bg-green-600 right-2 top-2 w-2 h-2" />
  );
  return (
    <TooltipComponent content={Content} position="Bottom-Center">
      <button
        onClick={OnClick}
        type="button"
        value={Content.toLowerCase()}
        style={{ color: themeColor }}
        className={`${buttonClasses} ${
          Shadow ? 'hover:shadow-xl' : ''
        } relative`}
      >
        {Unread ? UnreadMark : null}
        <Icon />
      </button>
    </TooltipComponent>
  );
};

export const NavbarTabHeader = ({ OnClick, ThemeColor, Header }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <h1 className="text-xl font-bold "> {Header}</h1>
      <button
        type="button"
        className="p-3 text-2xl hover:bg-light-gray dark:hover:bg-white rounded-full text-center hover:shadow-md shadow-gray-700"
        value="user"
        style={{ color: ThemeColor }}
        onClick={OnClick}
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export const TabItem = ({ Text, Header, Icon, extraStyles }) => (
  <button
    type="button"
    className={`flex gap-4 w-full p-4 items-center border-b-1 dark:border-gray-700  border-gray-200`}
  >
    <div
      className={`w-12 h-12 flex justify-center items-center  text-2xl ${extraStyles}`}
    >
      <Icon />
    </div>
    <div className="flex flex-col items-start">
      <h3 className="text-lg">{Header}</h3>
      <p className="text-sm  text-gray-400">{Text}</p>
    </div>
  </button>
);
