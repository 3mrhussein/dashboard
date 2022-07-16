import React, { useContext, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ThemeContext } from '../../context/theme.context';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

export const TabDefaultClasses = ` w-screen
sm:w-96 bg-white
items-start text-start flex flex-col
 dark:bg-secondary-dark-bg  shadow-lg
dark:shadow-gray-800 rounded-lg p-6 absolute
z-30`;
export const NavbarButton = ({
  Icon,
  OnClick,
  Content,
  Shadow,
  Unread,
  Color,
}) => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  let buttonClasses = `relative items-center text-xl hover:bg-light-gray  dark:hover:bg-white p-3 rounded-full`;

  let UnreadMark = (
    <div
      className="absolute rounded-full  right-2 top-2 w-2 h-2"
      style={{ backgroundColor: Color }}
    />
  );
  return (
    <TooltipComponent content={Content} position="Bottom-Center">
      <button
        onClick={OnClick}
        type="button"
        value={Content.toLowerCase()}
        style={{ color: themeColor }}
        className={`${buttonClasses} ${
          Shadow ? 'hover:shadow-xl' : ''
        } relative`}
      >
        {Unread ? UnreadMark : null}
        <Icon />
      </button>
    </TooltipComponent>
  );
};

export const NavbarTabHeader = ({ OnClick, ThemeColor, Header }) => {
  return (
    <div className="flex justify-between w-full items-center">
      <h1 className="text-2xl font-bold "> {Header}</h1>
      <button
        type="button"
        className="p-3 text-2xl hover:bg-light-gray dark:hover:bg-white rounded-full text-center hover:shadow-md shadow-gray-700"
        value={Header.toLowerCase()}
        style={{ color: ThemeColor }}
        onClick={OnClick}
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

// export const TabItem = ({ Text, Header, Icon, extraStyles, Img, Time }) => (
//   <button
//     type="button"
//     className={`flex gap-4 w-full p-4 items-center border-b-1 dark:border-gray-700  border-gray-200`}
//   >
//     <div
//       className={`w-12 h-12 flex justify-center items-center  text-2xl rounded-lg ${extraStyles}`}
//     >
//       {Img && <img src={Img} alt="user-image" className="rounded-full" />}{' '}
//       {Icon && <Icon />}
//     </div>
//     <div className="flex flex-col items-start">
//       <h3 className="text-lg">{Header}</h3>
//       <p className="text-sm font-bold  text-gray-400">{Text}</p>
//       {Time && <p className="text-xs  text-gray-400">{Time}</p>}
//     </div>
//   </button>
// );

export const CartItem = ({
  Img,
  Id,
  name,
  category,
  price,
  qty,
  handleCart,
}) => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-2 w-full border-b-2 pb-8 mt-3 border-gray-200">
      <img
        src={Img}
        alt="cart-item"
        className=" w-20 h-20 bg-cover rounded-lg "
      />
      <div className="flex flex-col w-full gap-1 ">
        <h3 className=" font-semibold text-xl "> {name}</h3>
        <p>{category}</p>
        <div className="flex text-lg justify-between pl-2 ">
          <span
            className=" font-bold text-xl rounded-full p-1"
            style={{ backgroundColor: themeColor }}
          >{`$ ${price * qty}`}</span>
          <div className="flex justify-between text-base   items-center  w-32 ">
            <button
              className=" text-red-600 rounded-full hover:bg-light-gray dark:hover:bg-white text-3xl border-gray-300 w-9"
              onClick={(e) => {
                e.preventDefault();
                if (qty > 0) {
                  handleCart(Id, -1);
                }
              }}
            >
              -
            </button>
            <span className=" border-gray-300  w-14 border-1 rounded-full text-center">
              {qty}
            </span>
            <button
              className=" text-green-600  border-gray-300 w-9 hover:bg-light-gray dark:hover:bg-white text-3xl rounded-full"
              onClick={(e) => {
                e.preventDefault();
                handleCart(Id, 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
