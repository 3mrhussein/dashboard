import React, { useContext } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { ThemeContext } from '../../context/theme.context';
import {
  SparklineComponent,
  ChartComponent,
  Inject,
  SparklineTooltip,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  StackingColumnSeries,
} from '@syncfusion/ej2-react-charts';
import { Container } from '../Commons';
const RevenueUpdates = () => {
  const {
    theme: { themeColor },
  } = useContext(ThemeContext);
  return (
    <Container className={'max-w-3xl'}>
      <div className="flex  justify-between ">
        <h1 className="font-semibold text-xl">Revenue Updates</h1>
        <div className="flex  gap-5 font-semibold">
          <div className="flex items-center gap-2 text-gray-600 dark:text">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Expense</span>
          </div>
          <div className="flex items-center gap-2 text-green-500">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>Budget</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center  gap-5  overflow-hidden pt-5 md:flex-row">
        <div className="md:w-1/2 w-full  md:border-r-1 flex flex-col  border-gray-300 ">
          <div className="flex md:flex-col justify-around">
            <div className="flex flex-col">
              <span className="text-3xl font-semibold">
                $93,438
                <span className="p-1 rounded-full bg-green-400 ml-2 w-fit  text-xs">
                  23%
                </span>
              </span>

              <p className="text-gray-500 mb-8">Budget</p>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-semibold ">$48,487</span>
              <p className="text-gray-500">Expense</p>
            </div>
          </div>
          <div
            className="flex flex-col h-full w-full mx-auto justify-between items-center "
            style={{ maxWidth: '320px' }}
          >
            <div className="w-full">
              <SparklineComponent
                height="80px"
                width="100%"
                id="sparkline"
                lineWidth={2}
                valueType={'Numeric'}
                dataSource={[
                  { x: 1, yval: 2 },
                  { x: 2, yval: 6 },
                  { x: 3, yval: 8 },
                  { x: 4, yval: 5 },
                  { x: 5, yval: 10 },
                ]}
                xName="x"
                yName="yval"
                fill={'#777'}
                border={{ color: `${themeColor}`, width: 2 }}
                type={'Line'}
                tooltipSettings={{
                  visible: true,
                  fill: themeColor,
                  format: '${x} : data ${yval}',
                  trackLineSettings: { visible: true },
                }}
                markerSettings={{
                  visible: ['All'],
                  size: 4.5,
                  fill: `${themeColor}`,

                  // // border: { color: 'black', width: '1px' },
                }}
              >
                <Inject services={[SparklineTooltip]} />
              </SparklineComponent>
            </div>
            <button
              style={{ backgroundColor: themeColor }}
              type="button"
              className="py-3 px-2 hover:shadow-lg shadow-gray-500 text-white rounded-lg mt-5 w-fit "
            >
              Download Report
            </button>
          </div>
        </div>
        <div className=" w-full md:w-1/2 flex justify-center  ">
          <div className="w-full">
            <ChartComponent
              width="100%"
              border={{ width: 0 }}
              id="charts"
              background="transparent"
              chartArea={{ border: { width: 0 } }}
              height="360px"
              tooltip={{ enable: true }}
              legendSettings={{ background: 'white' }}
              primaryXAxis={{
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorGridLines: { width: 0 },
                minorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                interval: 1,
                valueType: 'Category',
              }}
            >
              <Inject
                services={[
                  Legend,
                  DataLabel,
                  Category,
                  StackingColumnSeries,
                  Tooltip,
                ]}
              />

              <SeriesCollectionDirective>
                <SeriesDirective
                  xName="x"
                  yName="y"
                  dataSource={[
                    { x: 'Jan', y: 91.1 },
                    { x: 'Feb', y: 147.3 },
                    { x: 'Mar', y: 153.4 },
                    { x: 'Apr', y: 189.9 },
                    { x: 'May', y: 189.9 },
                    { x: 'Jun', y: 189.9 },
                    { x: 'July', y: 189.9 },
                    // { x: 'Oct', y: 189.9 },
                  ]}
                  name={'Budget'}
                  type={'StackingColumn'}

                  // stackingGroup={'a'}
                />
                <SeriesDirective
                  xName="x"
                  yName="y"
                  dataSource={[
                    { x: 'Jan', y: 111.1 },
                    { x: 'Feb', y: 127.3 },
                    { x: 'Mar', y: 143.4 },
                    { x: 'Apr', y: 159.9 },
                    { x: 'May', y: 159.9 },
                    { x: 'Jun', y: 159.9 },
                    { x: 'July', y: 159.9 },
                  ]}
                  type={'StackingColumn'}
                  // stackingGroup={'a'}
                  name={'Expense'}
                />
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RevenueUpdates;
