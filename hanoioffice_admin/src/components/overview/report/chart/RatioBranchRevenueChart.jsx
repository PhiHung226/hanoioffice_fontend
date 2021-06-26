import React from 'react';

import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

const RatioBranchRevenueChart = ({ title = 'Báo cáo', data }) => {
  return (
    <>
      <div className="w-full bg-white shadow-lg rounded-lg">
        <p className="text-xl font-medium antialiased px-3 pt-3">{ title }</p>
        <div className="w-full h-5/6">
          <ResponsivePie
            data={ data }
            margin={ { top: 40, right: 80, bottom: 80, left: -50 } }
            activeOuterRadiusOffset={ 8 }
            borderWidth={ 1 }
            borderColor={ { from: 'color', modifiers: [ [ 'darker', 0.2 ] ] } }
            enableArcLinkLabels={ false }
            arcLinkLabelsSkipAngle={ 10 }
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={ 2 }
            arcLinkLabelsColor={ { from: 'color' } }
            arcLabelsSkipAngle={ 10 }
            arcLabelsTextColor={ { from: 'color', modifiers: [ [ 'darker', 2 ] ] } }
            defs={ [
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ] }
            fill={ [
              {
                match: {
                  id: 'ruby'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'c'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'go'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'python'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'scala'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'lisp'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'elixir'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'javascript'
                },
                id: 'lines'
              }
            ] }
            legends={ [
              {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 33,
                translateY: 20,
                itemsSpacing: 16,
                itemWidth: 103,
                itemHeight: 11,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000'
                    }
                  }
                ]
              }
            ] }
          />
        </div>
      </div>
    </>
  );
};
RatioBranchRevenueChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
export default RatioBranchRevenueChart;