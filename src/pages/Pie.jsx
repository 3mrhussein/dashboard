import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../data/dummy';

const Pie = () => {
  return (
    <ChartPageContainer
      Title="Pie"
      Desc="Project Cost Breakdown

  "
    >
      <AccumulationChartComponent
        tooltip={{ enable: true }}
        legendSettings={{
          background: 'rgba(1,1,1,0.5)',
          textStyle: { color: 'white' },
          margin: { top: 10 },
          visible: true,
          position: 'Top',
        }}
      >
        <Inject
          services={[
            AccumulationLegend,
            AccumulationDataLabel,
            AccumulationTooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            innerRadius="40%"
            dataLabel={{ visible: true, name: 'text', position: 'Inside' }}
            explode
            explodeOffset="10%"
            explodeIndex={3}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </ChartPageContainer>
  );
};

export default Pie;
