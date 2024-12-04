import Styles from "./LabTest.module.css";
import downloadIcon from "../../assets/downloadICON.svg";

const LabTest = () => {
  return (
    <div className={Styles.labTestContainer}>
      <h2>Lab Results</h2>
      <div className={Styles.labTest}>
        <div className={Styles.labTestItem}>
          <p>Blood Tests</p>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
        <div className={Styles.labTestItem}>
          <p>CT Scans</p>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
        <div className={Styles.labTestItem}>
          <p>Radiology Reports</p>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
        <div className={Styles.labTestItem}>
          <p>X-Rays</p>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
        <div className={Styles.labTestItem}>
          <p>Urine Test</p>
          <img src={downloadIcon} alt="downloadIcon" />
        </div>
      </div>
    </div>
  );
};

export default LabTest;
