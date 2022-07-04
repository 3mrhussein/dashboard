import React from 'react';
import ProfileImage from '../../data/profile.jpg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavbarUser = ({ handleTabs }) => {
  const userName = 'Amr Hussein';
  const image = ProfileImage;

  return (
    <TooltipComponent content={'Profile'} position="Bottom-Center">
      <button
        type="button"
        onClick={handleTabs}
        value="user"
        className="flex items-center z-10 gap-1 md:gap-2 p-1 text-gray-400 dark:hover:bg-white rounded-lg text-base hover:bg-light-gray"
      >
        <img
          className=" bg-contain w-10 h-10 rounded-full"
          src={image}
          alt="profile-img"
        />
        <h2>
          Hi, <span className=" font-bold">{userName}</span>
        </h2>
        <MdKeyboardArrowDown />
      </button>
    </TooltipComponent>
  );
};

export default NavbarUser;
