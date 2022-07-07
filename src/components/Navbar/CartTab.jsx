import React, { useContext } from 'react';
import { CartItem, NavbarTabHeader } from './NavbarCommons';
import { ThemeContext } from '../../context/theme.context';
import { TabDefaultClasses } from './NavbarCommons';
import { cartData } from '../../data/dummy';
const NavbarCartTab = ({ handleTabs }) => {
  const {
    theme: { themeOption, themeColor },
  } = useContext(ThemeContext);

  return (
    <div className=" flex justify-end w-full h-screen  top-0 right-0 bg-half-transparent z-1000 absolute  ">
      <div
        className={`${TabDefaultClasses} z-1000 h-full gap-2 rounded-r-none`}
      >
        <NavbarTabHeader
          OnClick={handleTabs}
          ThemeColor={themeColor}
          Header="Shopping Cart"
        />
        <div className="h-full overflow-y-scroll mt-5  pr-2 w-full">
          {cartData.items.map((item) => (
            <CartItem
              key={item.id}
              price={item.item.price}
              name={item.item.name}
              Img={item.item.image}
              category={item.item.category}
              qty={item.item.quantity}
            />
          ))}
        </div>
        <div className="flex  w-full justify-between ">
          <span className="text-gray-400 font-semibold ">Sub Total</span>
          <span className="font-semibold ">{`$${cartData.subTotal}`}</span>
        </div>
        <div className="flex  w-full justify-between ">
          <span className="text-gray-400 font-semibold text-lg ">Total</span>
          <span className="font-bold text-lg ">{`$${cartData.total}`}</span>
        </div>
        <button
          className="w-full p-3 rounded-xl text-gray-100 font-semibold hover:shadow-md"
          style={{ backgroundColor: themeColor }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default NavbarCartTab;
