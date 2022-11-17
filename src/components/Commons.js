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
      } w-12 h-12 flex justify-center items-center   text-2xl  ${
        extraStyles.includes('rounded')
          ? extraStyles
          : `${extraStyles} rounded-xl`
      }`}
      style={{
        color: IconColor ? IconColor : '',
        backgroundColor: BgColor ? BgColor : '',
      }}
    >
      {Img && <img src={Img} alt="user" className="rounded-full" />}

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
    className={`${className} w-full rounded-2xl bg-white dark:bg-secondary-dark-bg p-5 shadow-md`}
    style={style}
  >
    {children}
  </div>
);
export const PageContainer = ({ children, className, style, Title }) => (
  <div
    className={`${className} w-full rounded-3xl text-black bg-white p-2 sm:p-10 shadow-md`}
    style={style}
  >
    <p className="text-gray-400 pl-2">Page</p>
    <h1 className="text-3xl font-bold mb-3 pl-2">{Title}</h1>
    {children}
  </div>
);

export const ChartPageContainer = ({
  children,
  className,
  style,
  Title,
  Desc,
}) => (
  <div
    className={`${className} w-full rounded-3xl text-black bg-white dark:bg-secondary-dark-bg dark:text-white p-2 sm:p-10 shadow-md`}
    style={style}
  >
    <p className="text-gray-400 pl-2">Chart</p>
    <h1 className="text-3xl font-bold mb-3 pl-2">{Title}</h1>
    <h1 className="text-2xl text-center font-semibold mb-3">{Desc}</h1>
    {children}
  </div>
);

export const CustomButton = ({
  children,
  TextColor,
  BgColor,
  className,
  style,
  Padding,
  Rounded,
  NoShadow,
}) => (
  <button
    className={`${className} rounded-${Rounded ? Rounded : 'lg'} ${
      NoShadow ? '' : 'hover:shadow-lg'
    } text-white  h-fit align-middle text-center `}
    style={
      style
        ? style
        : { backgroundColor: BgColor, color: TextColor, padding: Padding }
    }
  >
    {children}
  </button>
);

export const QueueContainer = ({ data, borderColor }) => (
  <div className="relative flex items-center ml-5 h-20  ">
    {data.map((item, index) => (
      <button
        className="overflow-hidden  inline-block  hover:z-10 hover:w-20 hover:h-20   -ml-3 bg-black  w-12 h-12  rounded-full  border-2 "
        style={{ borderColor: borderColor }}
        key={index}
        title={'Hello'}
      >
        <img src={item.image} alt="anything w-full h-full" />
      </button>
    ))}
  </div>
);
