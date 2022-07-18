import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import {
  ChartComponent,
  ColumnSeries,
  Legend,
  Tooltip,
  DataLabel,
  Category,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Inject,
} from '@syncfusion/ej2-react-charts';
import { barCustomSeries } from '../data/dummy';
const Bar = () => {
  return (
    <ChartPageContainer
      Title={'Bar'}
      Desc="Olympic Medal Counts - RIO

   "
    >
      <ChartComponent
        primaryXAxis={{
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          minorGridLines: { width: 0 },
          minorTickLines: { width: 0 },
          valueType: 'Category',
          intervalType: 'Years',
        }}
        primaryYAxis={{
          majorTickLines: { width: 0 },
          minorGridLines: { width: 0 },
          minorTickLines: { width: 0 },
        }}
        tooltip={{ enable: true }}
        legendSettings={{
          background: 'rgba(1,1,1,0.5)',
          textStyle: { color: 'white' },
          margin: { top: 10 },
        }}
      >
        <Inject
          services={[
            ColumnSeries,
            Tooltip,
            Legend,
            DataLabel,
            Category,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </ChartPageContainer>
  );
};

export default Bar;
