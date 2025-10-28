import ReactECharts from "echarts-for-react";

const PieChartProgramer = () => {
  const option = {
    title: {
      text: "Stack Skills",
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
              color: "#ffd23f",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(255, 210, 63, 0.35)",
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
            value: 40,
            name: "Front-End",
            itemStyle: {
              color: "#f72585",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(247, 37, 133, 0.45)",
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

export default PieChartProgramer;
