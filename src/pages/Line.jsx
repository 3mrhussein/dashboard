import {
  ChartComponent,
  LineSeries,
  Legend,
  Tooltip,
  DataLabel,
  Category,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Inject,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import { lineCustomSeries } from '../data/dummy';
const Line = () => {
  return (
    <ChartPageContainer Title={'Line'} Desc="Inflation Rate">
      <ChartComponent
        primaryXAxis={{
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          minorGridLines: { width: 0 },
          minorTickLines: { width: 0 },
          valueType: 'DateTime',
          intervalType: 'Years',
        }}
        primaryYAxis={{
          majorTickLines: { width: 0 },
          minorGridLines: { width: 0 },
          minorTickLines: { width: 0 },
          minimum: 0,
          maximum: 100,
          labelFormat: '{value}%',
          interval: 20,
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
            LineSeries,
            Tooltip,
            Legend,
            DataLabel,
            Category,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </ChartPageContainer>
  );
};

export default Line;
