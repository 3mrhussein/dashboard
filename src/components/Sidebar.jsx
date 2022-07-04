import React, { useContext } from 'react';
import { SiShopware } from 'react-icons/si';
import { links } from '../data/dummy';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { TabsContext } from '../context/tabs.context';
const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(TabsContext);
  const navigate = useNavigate();
  return (
    <div className="w-full relative overflow-y-scroll flex flex-col text-lg  text-gray-400 p-4 ">
      {/* Logo */}
      <div className="flex font-bold items-center p-2 dark:text-white text-black text-2xl gap-4">
        <SiShopware />
        <span> Shoppy</span>
      </div>

      {/* Close Icon */}
      <button
        onClick={() => {
          setShowSidebar(false);
        }}
        className=" absolute md:hidden  right-4 top-4 text-3xl"
      >
        <AiOutlineCloseCircle />
      </button>
      <div className="mt-10">
        {links.map((item) => (
          <div className=" w-full" key={item.title}>
            <h3 className="pl-2 uppercase">{item.title}</h3>
            {item.links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(`/${link.name}`, { replace: 'true' });
                }}
                className="flex  text-base hover:bg-light-gray  dark:text-gray-200 dark:hover:text-gray-800 text-gray-800 items-center gap-3 w-full capitalize p-3 pl-7 my-3 rounded-lg"
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
