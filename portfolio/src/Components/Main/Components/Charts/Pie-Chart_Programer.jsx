import ReactECharts from "echarts-for-react";

const PieChartProgramer = () => {
  const option = {
    title: {
      text: "Stack Skills",
      left: "center",
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

    series: [
      {
        name: "Stack Skills in",
        type: "pie",
        radius: "70%",
        data: [
          {
            value: 60,
            name: "Back-End",
            itemStyle: {
              color: "#6CE5E8",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.2)",
            },
            label: {
              show: true,
              position: "inside",
              formatter: "{b} - {c}%",
              fontWeight: "bold",
            },
          },
          {
            value: 40,
            name: "Front-End",
            itemStyle: {
              color: "#2D8BBA",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.2)",
            },
            label: {
              show: true,
              position: "inside",
              formatter: "{b} - {c}%",
              fontWeight: "bold",
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

export default PieChartProgramer;
