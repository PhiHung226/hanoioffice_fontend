import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import PropTypes from 'prop-types';

import DateYear from '../../../base/dateTime/DateYear';

const CompareRevenueChart = ({ data }) => {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg">
        <div className="flex justify-between">
          <p className="text-xl font-medium antialiased px-3 pt-3">Doanh thu so với cùng kỳ năm trước</p>
          <div className="mx-3"><DateYear /></div>
        </div>
        <div className="h-237 w-full">
          <ResponsiveLine
            data={ data }
            margin={ { top: 15, right: 110, bottom: 50, left: 60 } }
            xScale={ { type: 'point' } }
            yScale={ { type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false } }
            yFormat=" >-.2f"
            axisTop={ null }
            axisRight={ null }
            axisBottom={ {
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Tháng',
              legendOffset: 36,
              legendPosition: 'middle'
            } }
            axisLeft={ {
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Triệu đồng',
              legendOffset: -40,
              legendPosition: 'middle'
            } }
            pointSize={ 10 }
            pointColor={ { theme: 'background' } }
            pointBorderWidth={ 2 }
            pointBorderColor={ { from: 'serieColor' } }
            pointLabelYOffset={ -12 }
            useMesh={ true }
            legends={ [
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ] }
          />
        </div>
        <div className="pb-3 px-4 flex justify-start">
          <p className="hover:text-blue-700 cursor-pointer">Xem chi tiết</p>
        </div>
      </div>
    </>
  );
};
CompareRevenueChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
export default CompareRevenueChart;