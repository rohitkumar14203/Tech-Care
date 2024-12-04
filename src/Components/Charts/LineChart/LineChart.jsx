import { useContext } from "react";
import { PatientContext } from "../../../Context/PatientContext";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import ArrowDown from "../../../Assets/ArrowDown.png";
import ArrowUp from "../../../Assets/ArrowUp.png";
import Styles from "./LineChart.module.css";

const LineChart = () => {
  const { jessicaData } = useContext(PatientContext);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const last12Months = jessicaData?.diagnosis_history.slice(0, 12).reverse();

    const labels = last12Months?.map(
      (record) => `${record.month} ${record.year}`
    );
    const systolicData = last12Months?.map(
      (record) => record.blood_pressure.systolic.value
    );
    const diastolicData = last12Months?.map(
      (record) => record.blood_pressure.diastolic.value
    );

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "#E66FD2",
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "#8C6FE6",
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 12,
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 180,
            grid: {
              display: true,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [jessicaData]);

  const getLatestReadings = () => {
    const latest = jessicaData?.diagnosis_history[0];
    return {
      systolic: latest?.blood_pressure.systolic,
      diastolic: latest?.blood_pressure.diastolic,
    };
  };

  const latestReadings = getLatestReadings();

  return (
    <div>
      <div className={Styles.chartContainerHeader}>
        <h2>Diagnosis History</h2>
        <div className={Styles.chartContent}>
          <div className={Styles.chart}>
            <p>Blood Pressure</p>
            <canvas ref={chartRef}></canvas>
          </div>
          <div className={Styles.readings}>
            <div className={Styles.reading}>
              <div className={Styles.readingHeader}>
                <span className={Styles.label}>Systolic</span>
                <div
                  className={Styles.circle}
                  style={{ backgroundColor: "#E66FD2" }}
                />
              </div>
              <div className={Styles.value}>
                <span className={Styles.valuesys}>
                  {latestReadings?.systolic?.value}
                </span>
                <div className={Styles.readingLevel}>
                  <img src={ArrowUp} alt="arrow up" />
                  <span className={Styles.level}>
                    {latestReadings?.systolic?.levels}
                  </span>
                </div>
              </div>
            </div>
            <div className={Styles.reading}>
              <div className={Styles.readingHeader}>
                <span className={Styles.label}>Diastolic</span>
                <div
                  className={Styles.circle}
                  style={{ backgroundColor: "#8C6FE6" }}
                />
              </div>
              <div className={Styles.value}>
                <span className={Styles.valuesys}>
                  {latestReadings?.diastolic?.value}
                </span>
                <div className={Styles.readingLevel}>
                  <img src={ArrowDown} alt="arrow down" />
                  <span className={Styles.level}>
                    {latestReadings?.diastolic?.levels}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
