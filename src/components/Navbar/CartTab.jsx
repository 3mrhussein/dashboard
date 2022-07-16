import React, { useContext, useState } from 'react';
import { CartItem, NavbarTabHeader } from './NavbarCommons';
import { ThemeContext } from '../../context/theme.context';
import { TabDefaultClasses } from './NavbarCommons';
import { cartData } from '../../data/dummy';
const NavbarCartTab = ({ handleTabs }) => {
  const [cart, setCart] = useState(cartData);
  const total = cart.reduce((prev, current) => {
    return prev + current.price * current.quantity;
  }, 0);
  const handleCart = (Id, count) => {
    const index = cart.findIndex((item) => item.id === Id);
    const newCart = [...cart];
    newCart[index] = { ...cart[index], quantity: cart[index].quantity + count };
    setCart(newCart);
  };

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
          {cart.map((item) => (
            <CartItem
              key={item.id}
              Id={item.id}
              price={item.price}
              name={item.name}
              Img={item.image}
              category={item.category}
              qty={item.quantity}
              handleCart={handleCart}
            />
          ))}
        </div>
        <div className="flex  w-full justify-between ">
          <span className="text-gray-400 font-semibold ">Sub Total</span>
          <span className="font-semibold ">{`$${total}`}</span>
        </div>
        <div className="flex  w-full justify-between ">
          <span className="text-gray-400 font-semibold text-lg ">Total</span>
          <span className="font-bold text-lg ">{`$${total}`}</span>
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
