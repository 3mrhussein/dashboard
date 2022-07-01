import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavbarButton = ({ Icon, OnClick, Content, Shadow, Unread }) => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  const buttonClasses = `items-center text-2xl hover:bg-light-gray  dark:hover:bg-white p-3 rounded-full`;

  const UnreadMark = (
    <div className="absolute rounded-full bg-green-600 right-2 top-2 w-2 h-2" />
  );
  return (
    <TooltipComponent content={Content} position="Bottom-Center">
      <button
        onClick={OnClick}
        type="button"
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

export default NavbarButton;
