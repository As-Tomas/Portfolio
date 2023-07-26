
import ReactECharts from 'echarts-for-react';

const PieChartDevelopment = () => {
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '70%',
        data: [
          { value: 60, name: 'Coder', itemStyle: { color: ' #6CE5E8'}, label: { show: true } },
          { value: 40, name: 'Desinger',  itemStyle: { color: '#2D8BBA' }, label: { show: true }},
        ],
        label: {
          show: true,
          position: 'inside', // Display labels inside the pie chart slices
          formatter: '{b} - {c}%', // {b} represents the name, {c} represents the value
          textStyle: {
            fontWeight: 'bold',
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: '400px' }} />
  );
};

export default PieChartDevelopment;
