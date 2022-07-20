import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  DateTime,
  Tooltip,
  Crosshair,
} from '@syncfusion/ej2-react-charts';
import { financialChartData } from '../data/dummy';
const Financial = () => {
  return (
    <ChartPageContainer Title={'Financial'} Desc="AAPLE Historical">
      <ChartComponent
        tooltip={{ enable: true }}
        primaryYAxis={{
          majorTickLines: { width: 0 },

          minimum: 100,
          maximum: 180,
          interval: 20,
          title: 'Price',
        }}
        primaryXAxis={{
          valueType: 'DateTime',
          minimum: new Date('2016, 12, 31'),
          maximum: new Date('2017, 9, 30'),
          majorGridLines: { width: 0 },
          crosshairTooltip: { enable: true },
        }}
        crosshair={{
          enable: true,
          line: { width: 0 },
          verticalLineColor: 'transparent',
          horizontalLineColor: 'transparent',
        }}
      >
        <Inject services={[Tooltip, DateTime, HiloSeries, Crosshair]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            name="Apple Inc"
            dataSource={financialChartData}
            xName="x"
            high="high"
            type="Hilo"
            low="low"
            close="close"
            volume="volume"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </ChartPageContainer>
  );
};

export default Financial;
