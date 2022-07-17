import React, { useContext, useState } from 'react';
import { SiShopware } from 'react-icons/si';
import { links } from '../data/dummy';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TabsContext } from '../context/tabs.context';
import { ThemeContext } from '../context/theme.context';
const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(TabsContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.split('/')[1]);
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  return (
    <div className="w-full relative overflow-y-scroll flex flex-col text-lg pl-4 p-1 ">
      {/* Logo */}
      <div className="flex font-bold items-center p-2 text-2xl gap-4">
        <SiShopware />
        <span> Shoppy</span>
      </div>

      {/* Close Icon */}
      <button
        onClick={() => {
          setShowSidebar(false);
        }}
        className=" absolute md:hidden  right-4 top-4 text-3xl"
        style={{ color: themeColor }}
      >
        <AiOutlineCloseCircle />
      </button>
      <div className="mt-10  text-gray-400">
        {links.map((item) => (
          <div className=" w-full" key={item.title}>
            <h3 className="pl-2 uppercase">{item.title}</h3>
            {item.links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(`/${link.name}`, { replace: 'true' });
                  setActive(link.name.toLowerCase());
                  if (window.innerWidth <= 768) {
                    setShowSidebar(false);
                  }
                }}
                className="flex  text-base hover:bg-light-gray  dark:text-gray-200 dark:hover:text-gray-800 text-gray-800 items-center gap-3 w-full capitalize p-2 pl-7 my-3 rounded-lg"
                style={{
                  backgroundColor:
                    active === link.name.toLowerCase() && themeColor,
                }}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
