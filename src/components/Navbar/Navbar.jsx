import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch, FiShoppingCart, FiMessageSquare } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { TabsContext } from '../../context/tabs.context';
import NavbarUserDropdown from './NavbarUserDropdown';
import { NavbarButton } from './NavbarCommons';
import NavbarUser from './NavbarUser';
import NavbarNotificationsTab from './NavbarNotificationsTab';
const Navbar = () => {
  const { showSidebar, setShowSidebar, displayedTab, setDisplayedTab } =
    useContext(TabsContext);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  };
  const handleTabs = (e) => {
    e.preventDefault();
    if (displayedTab === e.currentTarget.value) {
      setDisplayedTab('');
    } else setDisplayedTab(e.currentTarget.value);
  };

  return (
    <div className="flex justify-between items-center relative md:px-6 py-2 ">
      {/* Left Part */}
      <div className="flex  justify-start items-center md:gap-2 ">
        <NavbarButton
          Content="Menu"
          Icon={AiOutlineMenu}
          OnClick={toggleSidebar}
        />

        <NavbarButton Content="Search" Icon={FiSearch} Shadow />
      </div>

      {/* Right Part */}
      <div className="flex justify-end items-center md:gap-2">
        <NavbarButton Content="Cart" Icon={FiShoppingCart} Unread Shadow />
        <NavbarButton
          Content={'Messages'}
          Icon={FiMessageSquare}
          Unread
          Shadow
        />
        <NavbarButton
          Content="Notifications"
          Icon={RiNotification3Line}
          Unread
          Shadow
          OnClick={handleTabs}
        />
        {displayedTab === 'notifications' && (
          <NavbarNotificationsTab handleTabs={handleTabs} />
        )}

        {/* Drop Down User Button */}
        <NavbarUser handleTabs={handleTabs} />
        {displayedTab === 'user' && (
          <NavbarUserDropdown handleTabs={handleTabs} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
