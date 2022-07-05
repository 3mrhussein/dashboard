import React, { useContext } from 'react';
import ProfileImage from '../../data/profile.jpg';
import { BsCurrencyDollar, BsShield, BsListTask } from 'react-icons/bs';
import { ThemeContext } from '../../context/theme.context';
import { NavbarTabHeader, TabItem } from './NavbarCommons';
const buttonStyles = `flex gap-4 w-full p-4 items-center border-b-1 dark:border-gray-700  border-gray-200`;

const NavbarUserDropdown = ({ handleTabs }) => {
  const { theme } = useContext(ThemeContext);

  const user = {
    name: 'Amr Hussein',
    role: 'Administrator',
    email: '3mrhusn@gmail.com',
    proflieImg: ProfileImage,
  };
  return (
    <div
      className={` w-screen
       sm:w-96 top-16 bg-white  dark:text-gray-100
       items-start text-start flex flex-col
        dark:bg-secondary-dark-bg  shadow-sm
       dark:shadow-gray-700 md:right-8 z-50 absolute rounded-lg p-6
       text-black
    `}
    >
      <NavbarTabHeader
        OnClick={handleTabs}
        Header="User Profile"
        ThemeColor={theme.themeColor}
      />
      <div className="w-full">
        <div
          className={`flex gap-4 w-full py-4 items-center border-b-1 dark:border-gray-700  border-gray-200`}
        >
          <img
            src={user.proflieImg}
            alt="user-img"
            className="  w-20 h-20 rounded-full bg-cover"
          />
          <div className="flex flex-col ">
            <h3 className="text-xl">{user.name}</h3>
            <div className="text-sm  text-gray-400">
              <p>{user.role}</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <TabItem
          Header="My Profile"
          Text="Account Settings"
          Icon={BsCurrencyDollar}
          extraStyles="bg-light-gray text-blue-400 rounded-lg"
        />
        <TabItem
          Header="My Inbox"
          Text="Messages & Emails"
          Icon={BsShield}
          extraStyles="bg-light-gray text-green-400 rounded-lg"
        />

        <TabItem
          Header="My Tasks"
          Text="To-do & Daily Tasks"
          Icon={BsListTask}
          extraStyles="bg-yellow-400 text-white rounded-lg"
        />
        <button
          className="w-full hover:shadow-lg text-white p-3 rounded-lg mt-4"
          style={{ backgroundColor: theme.themeColor }}
        >
          {user && 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default NavbarUserDropdown;
