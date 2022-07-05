import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import user1 from '../../data/avatar.jpg';
import user2 from '../../data/avatar2.jpg';
import user3 from '../../data/avatar3.png';
import user4 from '../../data/avatar4.jpg';
import { NavbarTabHeader } from './NavbarCommons';

const NavbarNotificationButton = () => (
  <button
    type="button"
    className="p-4 w-full border-b-1 dark:border-gray-700  border-gray-200"
  >
    Hello
  </button>
);
const NavbarNotificationsTab = ({ handleTabs }) => {
  const {
    theme: { themeOption, themeColor },
  } = useContext(ThemeContext);
  const notifications = [
    {
      user: {
        firstName: 'Ahmed',
        lastName: 'Hussein',
        role: 'Administrator',
        email: '3mrhusn@gmail.com',
        proflieImg: user1,
      },
      type: 'new-join',
    },
    {
      user: {
        firstName: 'Rana',
        lastName: 'Hussein',
        role: 'Administrator',
        email: '3mrhusn@gmail.com',
        proflieImg: user2,
      },
      type: 'message',
    },
    {
      user: {
        firstName: 'Mohamed',
        lastName: 'Hussein',
        role: 'Administrator',
        email: '3mrhusn@gmail.com',
        proflieImg: user2,
      },
      type: 'payment',
    },
    {
      user: {
        name: 'Hussein',
        lastName: 'Hussein',
        role: 'Administrator',
        email: '3mrhusn@gmail.com',
        proflieImg: user1,
      },
      type: 'new-join',
    },
  ];
  let topNotifications = notifications.slice(0, 4);
  return (
    <div
      className={` w-screen
   sm:w-96 top-16 bg-white dark:text-gray-100
   items-start text-start flex flex-col
    dark:bg-secondary-dark-bg  shadow-sm
   dark:shadow-gray-700  md:right-56 z-50 absolute rounded-lg p-6
   text-black
`}
    >
      <NavbarTabHeader
        OnClick={handleTabs}
        ThemeColor={themeColor}
        Header="Notfications"
      />
      {topNotifications.map((notification) => (
        <NavbarNotificationButton />
      ))}
    </div>
  );
};

export default NavbarNotificationsTab;
