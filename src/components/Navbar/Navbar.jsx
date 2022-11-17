import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch, FiShoppingCart, FiMessageSquare } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { TabsContext } from '../../context/tabs.context';
import UserTab from './UserTab';
import { NavbarButton } from './NavbarCommons';
import NotificationsTab from './NotificationsTab';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ThemeContext } from '../../context/theme.context';
import ProfileImage from '../../data/profile.jpg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import MessagesTab from './MessagesTab';
import CartTab from './CartTab';

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
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  return (
    <div className="flex relative w-full justify-between items-center md:px-6 py-1 rounded-md shadow-md ">
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
        <NavbarButton
          Content="Shopping Cart"
          OnClick={handleTabs}
          Icon={FiShoppingCart}
          Unread
          Shadow
        />
        {/* Cart Tab */}

        {displayedTab === 'shopping cart' && (
          <CartTab handleTabs={handleTabs} />
        )}
        <NavbarButton
          Icon={FiMessageSquare}
          Unread
          Shadow
          OnClick={handleTabs}
          Content="Messages"
          Color="green"
        />
        {displayedTab === 'messages' && <MessagesTab handleTabs={handleTabs} />}
        <NavbarButton
          Content="Notifications"
          Icon={RiNotification3Line}
          Unread
          Shadow
          OnClick={handleTabs}
          Color="#1155cc"
        />
        {displayedTab === 'notifications' && (
          <NotificationsTab handleTabs={handleTabs} />
        )}

        {/* Drop Down User Button */}
        <TooltipComponent content={'Profile'} position="Bottom-Center">
          <button
            type="button"
            onClick={handleTabs}
            value="user profile"
            style={{ color: themeColor }}
            className="flex items-center z-10 gap-1 md:gap-2 p-1  dark:hover:bg-white rounded-lg text-base hover:bg-light-gray"
          >
            <img
              className=" bg-contain w-10 h-10 rounded-full"
              src={ProfileImage}
              alt="profile-img"
            />
            <h2 className="text-gray-400 hidden md:block">Hi, </h2>
            <span className=" font-semibold text-gray-400 whitespace-nowrap">
              Amr Hussein
            </span>
            <MdKeyboardArrowDown />
          </button>
        </TooltipComponent>
        {displayedTab === 'user profile' && <UserTab handleTabs={handleTabs} />}
      </div>
    </div>
  );
};

export default Navbar;
