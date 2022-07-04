import React, { useState } from 'react';
import ProfileImage from '../../data/profile.jpg';
import { BsCurrencyDollar, BsShield, BsListTask } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const buttonStyles = `flex gap-4 w-full p-4 items-center border-b-1 dark:border-gray-700  border-gray-200`;
const iconsStyles = ` w-12 h-12 rounded-lg flex justify-center items-center  text-2xl`;
const UserButton = ({ Text, Header, Icon, extraStyles }) => (
  <button type="button" className={`${buttonStyles}`}>
    <div className={`${iconsStyles} ${extraStyles}`}>
      <Icon />
    </div>
    <div className="flex flex-col items-start">
      <h3 className="text-xl">{Header}</h3>
      <p className="text-sm  text-gray-400">{Text}</p>
    </div>
  </button>
);

const NavbarUserDropdown = ({ handleTabs }) => {
  const user = {
    name: 'Amr Hussein',
    role: 'Administrator',
    email: '3mrhusn@gmail.com',
  };
  return (
    <div
      className={` w-screen
      
       sm:w-96 top-16 bg-white  dark:text-white 
       items-start text-start flex flex-col
        dark:bg-secondary-dark-bg  shadow-sm
       dark:shadow-gray-700 md:right-8 z-1000 absolute rounded-lg p-6
       text-black
    `}
    >
      <div className="flex justify-between w-full items-center">
        <h1 className="text-xl font-bold "> User Profile</h1>
        <button
          type="button"
          className="p-3 text-2xl text-gray-500 hover:bg-light-gray dark:hover:bg-white rounded-full text-center hover:shadow-md shadow-gray-700"
          value="user"
          onClick={handleTabs}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      <div className="w-full">
        <div
          className={`flex gap-4 w-full py-4 items-center border-b-1 dark:border-gray-700  border-gray-200`}
        >
          <img
            src={ProfileImage}
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
        <UserButton
          Header="My Profile"
          Text="Account Settings"
          Icon={BsCurrencyDollar}
          extraStyles="bg-light-gray text-blue-400"
        />
        <UserButton
          Header="My Inbox"
          Text="Messages & Emails"
          Icon={BsShield}
          extraStyles="bg-light-gray text-green-400"
        />

        <UserButton
          Header="My Tasks"
          Text="To-do & Daily Tasks"
          Icon={BsListTask}
          extraStyles="bg-yellow-400 text-white"
        />
      </div>
    </div>
  );
};

export default NavbarUserDropdown;
