import React from 'react';
import { Container } from '../Commons';

const EarningCard = ({
  Title,
  Amount,
  Icon,
  IconBg,
  IconColor,
  Percentage,
  PcColor,
}) => {
  return (
    <Container className="flex flex-col  pt-9 gap-2 xs:w-1/2 min-w-fit sm:w-2/12 h-40">
      <button
        className=" text-center p-3 w-fit text-white shadow-sm hover:shadow-lg text-2xl rounded-full "
        style={{ backgroundColor: IconBg, color: IconColor }}
      >
        {Icon}
      </button>
      <div
        className="flex gap-2 text-center items-center"
        style={{ minWidth: '140px' }}
      >
        <h1 className=" font-bold">{Amount}</h1>
        <span className={` text-${PcColor}  text-xs `}>{Percentage}</span>
      </div>
      <p className="text-gray-400 text-xs">{Title}</p>
    </Container>
  );
};

export default EarningCard;
