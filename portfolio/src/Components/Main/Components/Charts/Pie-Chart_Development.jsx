import ReactECharts from "echarts-for-react";

const PieChartDevelopment = () => {
  const option = {
    title: {
      text: "Development",
      // subtext: 'Fake Data',
      left: "center",
      textStyle: {
        color: "#f6f8ff",
        fontWeight: "600",
      },
    },
    textStyle: {
      color: "#f6f8ff",
      fontFamily: "Inter, sans-serif",
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
            name: "Programer",
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
              color: "#04111d",
            },
          },
          {
            value: 20,
            name: "Designer",
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
              color: "#04111d",
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
