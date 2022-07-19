import React from 'react';
import { ChartPageContainer } from '../components/Commons';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../data/dummy';
const Pyramid = () => {
  return (
    <ChartPageContainer
      Title={'Pyramid'}
      Desc="Food Comparison Chart
    "
    >
      <AccumulationChartComponent
        legendSettings={{
          background: 'rgba(1,1,1,0.5)',
          textStyle: { color: 'white' },
          margin: { top: 10 },
          visible: true,
          position: 'Top',
        }}
        tooltip={{ enable: true }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PyramidSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
            AccumulationLegend,
            AccumulationDataLabel,
            PyramidSeries,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName="x"
            yName="y"
            explode
            explodeOffset="10%"
            explodeIndex={0}
            dataLabel={{ visible: true, name: 'text', position: 'Inside' }}
            type="Pyramid"
            name="Food"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </ChartPageContainer>
  );
};

export default Pyramid;
