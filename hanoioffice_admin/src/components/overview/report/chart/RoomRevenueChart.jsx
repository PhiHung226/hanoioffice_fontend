import React from 'react';

import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

import DateYear from '../../../base/dateTime/DateYear';

const RoomRevenueChart = ({ data }) => {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg">
        <div className="flex justify-between">
          <p className="text-xl font-medium antialiased px-3 pt-3">Doanh thu theo loại phòng</p>
          <div className="mx-3"><DateYear /></div>
        </div>
        <div className="h-190 w-full">
          <ResponsiveBar
            data={ data }
            keys={ [ 'hot dog', 'burger' ] }
            indexBy="country"
            margin={ { top: 10, right: 130, bottom: 40, left: 60 } }
            padding={ 0.3 }
            groupMode="grouped"
            valueScale={ { type: 'linear' } }
            indexScale={ { type: 'band', round: true } }
            colors={ { scheme: 'nivo' } }
            defs={ [
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ] }
            fill={ [
              {
                match: {
                  id: 'fries'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'sandwich'
                },
                id: 'lines'
              }
            ] }
            borderColor={ { from: 'color', modifiers: [ [ 'darker', 1.6 ] ] } }
            axisTop={ null }
            axisRight={ null }
            axisBottom={ {
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Tháng',
              legendPosition: 'middle',
              legendOffset: 32
            } }
            axisLeft={ {
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Triệu đồng',
              legendPosition: 'middle',
              legendOffset: -40
            } }
            labelSkipWidth={ 12 }
            labelSkipHeight={ 12 }
            labelTextColor={ { from: 'color', modifiers: [ [ 'darker', 1.6 ] ] } }
            legends={ [
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ] }
            animate={ true }
            motionStiffness={ 90 }
            motionDamping={ 15 }
          />
          <div className="pb-3 px-4 flex justify-start">
            <p className="hover:text-blue-700 cursor-pointer">Xem chi tiết</p>
          </div>
        </div>
      </div>
    </>
  );
};
RoomRevenueChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
export default RoomRevenueChart;