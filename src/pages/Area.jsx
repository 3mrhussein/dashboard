import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import {
  ChartComponent,
  Legend,
  Tooltip,
  DataLabel,
  Category,
  SeriesCollectionDirective,
  SeriesDirective,
  DateTime,
  Inject,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries } from '../data/dummy';
const Area = () => {
  return (
    <ChartPageContainer
      Title={'Area'}
      Desc="Inflation Rate in percentage
    "
    >
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
          maximum: 4,
          labelFormat: '{value}%',
          interval: 1,
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
            SplineAreaSeries,
            Tooltip,
            Legend,
            DataLabel,
            Category,
            DateTime,
          ]}
        />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </ChartPageContainer>
  );
};

export default Area;
