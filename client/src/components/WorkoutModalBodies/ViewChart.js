import React from "react";
import { format } from "date-fns";
import { Line } from "react-chartjs-2";

function ViewChart(props) {
  return props.data ? (
    <div>
      <Line
        data={{
          //Dates of data on the X-axis of the chart.
          labels: props.data.map((entry) =>
            format(new Date(entry.date), "MM-dd")
          ),
          //format(date, "MM-dd-yy")
          datasets: [
            {
              label: "Workout Progress",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              //Values of data on the Y-axis of the chart.
              data: props.data.map((entry) => entry.value),
            },
          ],
        }}
        options={{
          legend: {
            labels: {
              fontColor: "black",
              fontSize: 16,
              fontStyle: "bold",
            },
          },
          scales: {
            xAxes: {
              fontStyle: "bold",
            },
          },
        }}
      />
    </div>
  ) : (
    <h6> No data yet! </h6>
  );
}

export default ViewChart;

/*
                          options={{
                            legend: {
                              labels: {
                                fontColor: "rgba (0, 0, 0, 0.9)",
                                fontSize: 16,
                                fontStyle: "bold",
                              },
                            },
                            scales: {
                              xAxes: [
                                {
                                  ticks: {
                                    fontColor: "rgba(0, 0, 0, 0.8)",
                                    fontStyle: "bold",
                                  },
                                },
                              ],
                              yAxes: [
                                {
                                  ticks: {
                                    fontColor: "rgba(0, 0, 0, 0.8)",
                                  },
                                },
                              ],
                            },
                          }}
*/
