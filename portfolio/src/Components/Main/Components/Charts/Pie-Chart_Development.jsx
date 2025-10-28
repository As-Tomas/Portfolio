import ReactECharts from "echarts-for-react";

const PieChartDevelopment = () => {
  const option = {
    title: {
      text: "Development",
      // subtext: 'Fake Data',
      left: "center",
      textStyle: {
        color: "#E2E8F0",
        fontWeight: "600",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : <b>{c}%</b>",
      rich: {
        b: {
          fontWeight: "bold",
        },
      },
    },
    // legend: {
    //   orient: 'horizontal',
    //   left: 'left',
    // },
    series: [
      {
        name: "Development as",
        type: "pie",
        radius: "70%",
        data: [
          {
            value: 80,
            name: "Programmer",
            itemStyle: {
              color: "#00f5d4",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 245, 212, 0.35)",
            },
            label: {
              show: true,
              position: "inside",
              formatter: "{b} - {c}%",
              fontWeight: "bold",
              color: "#0b0f2f",
            },
          },
          {
            value: 20,
            name: "Designer",
            itemStyle: {
              color: "#8338ec",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(131, 56, 236, 0.4)",
            },
            label: {
              show: true,
              position: "inside",
              formatter: "{b} - {c}%",
              fontWeight: "bold",
              color: "#0b0f2f",
            },
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "300px" }} />;
};

export default PieChartDevelopment;
