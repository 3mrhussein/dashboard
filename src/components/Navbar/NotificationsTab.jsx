import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { user1, user2, user3, user4 } from '../../data/dummy';
import { NavbarTabHeader, TabDefaultClasses, TabItem } from './NavbarCommons';
import { notifications } from '../../data/dummy';
const NavbarNotificationsTab = ({ handleTabs }) => {
  const {
    theme: { themeOption, themeColor },
  } = useContext(ThemeContext);

  function switchNotification(notification) {
    if (notification.type === 'message') {
      return {
        header: 'New Message Received',
        body: `${notification.user.firstName} sent you new message`,
      };
    } else if (notification.type === 'payment') {
      return {
        header: 'New Payment recevied',
        body: `Check your earnings`,
      };
    } else if (notification.type === 'new-join') {
      return {
        header: `${notification.user.firstName} joined the Team!`,
        body: 'Congratulate him',
      };
    } else {
      return {
        header: `${notification.user.firstName} completed tasks`,
        body: 'Assign new tasks',
      };
    }
  }
  let topNotifications = notifications.slice(0, 4);
  return (
    <div
      className={` 
   sm:w-96 top-16  sm:right-20 z-50 ${TabDefaultClasses}
`}
    >
      <NavbarTabHeader
        OnClick={handleTabs}
        ThemeColor={themeColor}
        Header="Notfications"
      />

      {topNotifications.map((notification, index) => {
        let { header, body } = switchNotification(notification);

        return (
          <TabItem
            key={index}
            Header={header}
            Text={body}
            Img={notification.user.proflieImg}
            extraStyles="rounded-full"
          />
        );
      })}
      <button
        className="w-full hover:shadow-lg text-white p-3 rounded-lg mt-4"
        style={{ backgroundColor: themeColor }}
      >
        See all notifications
      </button>
    </div>
  );
};

export default NavbarNotificationsTab;
