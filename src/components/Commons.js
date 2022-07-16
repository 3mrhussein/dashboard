export const TabItem = ({
  IconColor,
  Text,
  Header,
  Icon,
  extraStyles,
  Img,
  Time,
  BgColor,
  hoverIcon,
}) => (
  <button
    type="button"
    className={`${
      hoverIcon ? 'cursor-default' : ''
    } flex gap-4 w-full p-4 items-center border-b-1 dark:border-gray-700  border-gray-200`}
  >
    <div
      className={`${
        hoverIcon ? 'cursor-pointer hover:shadow-xl' : ''
      } w-12 h-12 flex justify-center items-center   text-2xl rounded-xl ${extraStyles}`}
      style={{
        color: IconColor ? IconColor : '',
        backgroundColor: BgColor ? BgColor : '',
      }}
    >
      {Img && <img src={Img} alt="user-image" className="rounded-full" />}

      {Icon && Icon}
    </div>
    <div className="flex flex-col font-semibold items-start">
      <h3 className="text-base sm:text-lg ">{Header}</h3>
      <p className="text-sm   text-gray-400">{Text}</p>
      {Time && <p className="text-xs  text-gray-400">{Time}</p>}
    </div>
  </button>
);

export const Container = ({ children, className, style }) => (
  <div
    className={`${className} w-full rounded-xl bg-white dark:bg-secondary-dark-bg p-5 shadow-md`}
    style={style}
  >
    {children}
  </div>
);
