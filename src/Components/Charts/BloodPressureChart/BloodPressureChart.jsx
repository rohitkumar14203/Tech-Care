import DiagnosticList from "../DiagnosticList/DiagnosticList";
import LineChart from "../LineChart/LineChart";
import PatientReport from "../PatientReport/PatientReport";
import Styles from "./BloodPressureChart.module.css";

const BloodPressureChart = () => {
  return (
    <div className={Styles.chartContainer}>
      <LineChart />
      <PatientReport />
      <DiagnosticList />
    </div>
  );
};

export default BloodPressureChart;
