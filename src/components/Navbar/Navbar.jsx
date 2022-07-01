import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch, FiShoppingCart, FiMessageSquare } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { SidebarContext } from '../../context/sidebar.context';

import NavbarButton from './NavbarButton';
import NavbarUser from './NavbarUser';
const Navbar = ({ darkTextColor }) => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex justify-between items-center px-6 py-2 ">
      {/* Left Part */}
      <div className="flex  justify-start items-center gap-2">
        <NavbarButton
          Content="Menu"
          Icon={AiOutlineMenu}
          OnClick={toggleSidebar}
        />

        <NavbarButton Content="Search" Icon={FiSearch} Shadow />
      </div>

      {/* Right Part */}
      <div className="flex justify-end items-center gap-2">
        <NavbarButton Content="Cart" Icon={FiShoppingCart} Unread Shadow />
        <NavbarButton
          Content={'Messages'}
          Icon={FiMessageSquare}
          Unread
          Shadow
        />
        <NavbarButton
          Content="Notification"
          Icon={RiNotification3Line}
          Unread
          Shadow
        />
        {/* Drop Down User Button */}
        <NavbarUser />
      </div>
    </div>
  );
};

export default Navbar;
