import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import { chatData } from '../../data/dummy';
import { NavbarTabHeader, TabDefaultClasses } from './NavbarCommons';
import { TabItem } from '../Commons';

const NavbarMessagesTab = ({ handleTabs }) => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);

  let topMessages = chatData.slice(0, 4);

  return (
    <div
      className={`
      ${TabDefaultClasses}
    top-16 sm:right-24 z-50 absolute
   
`}
    >
      {console.log('rerendered')}

      <NavbarTabHeader
        OnClick={handleTabs}
        ThemeColor={themeColor}
        Header="Messages"
      />

      {topMessages.map((message, index) => {
        let msg = message.message;
        if (msg.length >= 30) {
          msg = `${message.message.slice(0, 27)}...`;
        }
        return (
          <TabItem
            key={index}
            Header={`${message.user.firstName} ${message.user.lastName}`}
            Text={msg}
            Time={message.time}
            Img={message.user.proflieImg}
            extraStyles="rounded-full"
          />
        );
      })}
      <button
        className="w-full hover:shadow-lg text-white p-3 rounded-lg mt-4"
        style={{ backgroundColor: themeColor }}
      >
        See all messages
      </button>
    </div>
  );
};

export default NavbarMessagesTab;
