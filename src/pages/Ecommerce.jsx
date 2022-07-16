import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { BsCurrencyDollar } from 'react-icons/bs';
import { EarningCard } from '../components/index';
import {
  earningData,
  recentTransactions,
  lineCustomSeries,
} from '../data/dummy';
import RevenueUpdates from '../components/Ecommerce/RevenueUpdates';
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Category,
  ChartComponent,
  DateTime,
  Legend,
  LineSeries,
  PieSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Container, TabItem } from '../components/Commons';

const Ecommerce = () => {
  const {
    theme: { themeColor, themeOption },
  } = useContext(ThemeContext);
  return (
    <div className="px-3 gap-10 flex flex-col w-full justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-5 w-full ">
        <Container
          className=" relative min-w-60 lg:w-3/12 h-40 flex-auto
       bg-cover bg-no-repeat bg-hero-pattern bg-no-repeat bg-center"
        >
          <p className=" font-bold text-gray-400">Earnings</p>
          <h1 className="text-2xl dark:text-white font-semibold">$63,448.78</h1>
          <button
            className="absolute text-center p-3 text-white shadow-sm hover:shadow-lg text-2xl top-6 right-6 rounded-full "
            style={{ backgroundColor: themeColor }}
          >
            <BsCurrencyDollar />
          </button>
          <button
            className="text-center p-3 mt-5 rounded-lg text-white shadow-sm hover:shadow-lg"
            style={{ backgroundColor: themeColor }}
          >
            Download
          </button>
        </Container>
        <div className="flex flex-wrap justify-center gap-1 max-w-4xl">
          {earningData.map((item) => (
            <EarningCard
              key={item.title}
              Title={item.title}
              Amount={item.amount}
              Icon={item.icon}
              IconBg={item.iconBg}
              IconColor={item.iconColor}
              Percentage={item.percentage}
              PcColor={item.pcColor}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col xl:flex-row justify-center items-center gap-10">
        {/* Revenue Updates */}
        <RevenueUpdates />

        {/* Earnings & Yearly Sales */}
        <div className="flex flex-wrap gap-5 items-center justify-center xl:flex-col ">
          {/* Earnings */}
          <Container
            className=" h-210 min-w-96  w-96"
            style={{ backgroundColor: themeColor }}
          >
            <div className=" m-1 text-white text-2xl font-semibold flex  justify-between">
              <h1>Earnings</h1>
              <div className="flex flex-col">
                <span>$63,448.78</span>
                <span className="text-sm font-normal">Monthly revenue</span>
              </div>
            </div>
            <SparklineComponent
              height="120px"
              width="350px"
              id="sparkline_column"
              valueType={'Numeric'}
              lineWidth={2}
              dataSource={[
                { x: 1, yval: 2 },
                { x: 2, yval: 6 },
                { x: 3, yval: 8 },
                { x: 4, yval: 5 },
                { x: 5, yval: 10 },
              ]}
              xName="x"
              yName="yval"
              fill={'#fff'}
              border={{ width: 2, color: '#fff' }}
              type={'Column'}
              tooltipSettings={{
                visible: true,
                fill: 'black',
                trackLineSettings: { visible: true },
                format: '${x} : data ${yval}',
              }}
              markerSettings={{
                visible: ['All'],
                size: 3,
                fill: themeColor,
              }}
            >
              <Inject services={[SparklineTooltip]} />
            </SparklineComponent>
          </Container>
          {/* Yearly sales */}
          <Container className="flex h-210 min-w-96  w-96 ">
            <div className="flex flex-col w-fit justify-center items-center pl-5">
              <h1 className="font-semibold  text-2xl">$43,246</h1>
              <p className="text-gray-400 whitespace-nowrap">Yearly sales</p>
            </div>
            {/* <div className=""> */}
            <div className="w-full h-full flex justify-center items-center">
              <AccumulationChartComponent
                background="transparent"
                id="pie-chart-salar"
                width="200px"
                height="200px"
                tooltip={{
                  enable: true,
                }}
                legendSettings={{ visible: false }}
              >
                <Inject
                  services={[
                    AccumulationLegend,
                    AccumulationTooltip,
                    PieSeries,
                    AccumulationDataLabel,
                  ]}
                />
                <AccumulationSeriesCollectionDirective>
                  <AccumulationSeriesDirective
                    dataSource={[
                      { x: '2019', y: 10, text: '10%' },
                      { x: '2019', y: 20, text: '20%' },
                      { x: '2020', y: 30, text: '30%' },
                      { x: '2021', y: 40, text: '40%' },
                    ]}
                    name="Sale"
                    xName="x"
                    yName="y"
                    startAngle={0}
                    endAngle={360}
                    radius="70%"
                    explode
                    explodeOffset="10%"
                    explodeIndex={2}
                    innerRadius="40%"
                    width="100px"
                    height="100px"
                    dataLabel={{
                      name: 'text',
                      visible: true,
                      position: 'Inside',
                      font: { fontWeight: '600', color: '#fff' },
                    }}
                  ></AccumulationSeriesDirective>
                </AccumulationSeriesCollectionDirective>
              </AccumulationChartComponent>
              {/* </div> */}
            </div>
          </Container>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row flex-wrap gap-10 w-full justify-center items-center">
        {/* Recent Transaction */}
        <Container className={' w-md h-600'}>
          <div className="flex w-full justify-between items-center ">
            <h1 className="font-semibold text-base sm:text-xl dark:text-gray-300">
              Recent Transactions
            </h1>
            <div className="px-2 py-1  border-gray-300 border-1 rounded-lg ">
              <DropDownListComponent
                style={{ color: themeOption === 'dark' ? 'white' : 'black' }}
                value="March 2021"
                width={'100px'}
                dataSource={['March 2021', 'April 2021', 'May 2021']}
              ></DropDownListComponent>
            </div>
          </div>
          {recentTransactions.map((transaction, index) => (
            <div className="flex justify-between">
              <TabItem
                Icon={transaction.icon}
                key={index}
                Header={transaction.title}
                Text={transaction.desc}
                IconColor={transaction.iconColor}
                BgColor={transaction.iconBg}
                hoverIcon
                extraStyles={'w-14 h-14'}
              />
              <p
                className={`m-5 text-xs font-semibold sm:text-base text-${transaction.pcColor}`}
              >
                {transaction.amount}
              </p>
            </div>
          ))}
          <div className="p-3 flex justify-between">
            <button
              className="p-3 rounded-lg"
              style={{ backgroundColor: themeColor }}
            >
              Add
            </button>
            <p className="text-gray-400 text-sm mt-2">36 Recent Transactions</p>
          </div>
        </Container>

        {/* Sales Overview */}
        <Container className={'max-w-3xl h-600'}>
          <div className="flex w-full justify-between items-center ">
            <h1 className="font-semibold text-base sm:text-xl dark:text-gray-300">
              Sales Overview
            </h1>
            <div className="px-2 py-1  border-gray-300 border-1 rounded-lg ">
              <DropDownListComponent
                style={{ color: themeOption === 'dark' ? 'white' : 'black' }}
                value="March 2021"
                width={'100px'}
                dataSource={['March 2021', 'April 2021', 'May 2021']}
              ></DropDownListComponent>
            </div>
          </div>
          <ChartComponent
            legendSettings={{ background: 'white' }}
            background="transparent"
            primaryXAxis={{
              majorGridLines: { width: 0 },
              majorTickLines: { width: 0 },
              valueType: 'DateTime',
              labelFormat: 'y',
              intervalType: 'Years',
              edgeLabelPlacement: 'Shift',
              lineStyle: { width: 0 },

              // // minorGridLines: { width: 0 },
              // minorTickLines: { width: 0 },
              // // lineStyle: { width: 0 },
            }}
            primaryYAxis={{
              labelFormat: '{value}%',
              minimum: 0,
              maximum: 100,
              interval: 20,
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
            }}
            tooltip={{ enable: true }}
          >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
              {lineCustomSeries.map((line, index) => (
                <SeriesDirective
                  key={index}
                  xName={line.xName}
                  yName={line.yName}
                  dataSource={line.dataSource}
                  type={'Line'}
                  width={2}
                  marker={{
                    visible: true,
                    width: 10,
                    height: 10,
                    border: { width: 2 },
                  }}
                  name={line.name}
                ></SeriesDirective>
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </Container>
      </div>
    </div>
  );
};

export default Ecommerce;
