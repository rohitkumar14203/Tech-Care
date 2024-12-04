import styles from "./PatientReport.module.css";
import respiratory from "../../../assets/respiratoryRate.svg";
import HeartBPM from "../../../assets/HeartBPM.svg";
import temperature from "../../../assets/temperature.svg";
import ArrowDown from "../../../assets/ArrowDown.png";

const PatientReport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards1}>
        <img src={respiratory} alt="respiratory" />
        <p style={{ fontSize: "16px" }}>Respiratory Rate</p>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>20 bpm</p>
        <p className={styles.normalText}>Normal</p>
      </div>

      <div className={styles.cards2}>
        <img src={temperature} alt="temperature" />
        <p style={{ fontSize: "16px" }}>Temperature</p>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>98.6°F</p>
        <p className={styles.normalText}>Normal</p>
      </div>

      <div className={styles.cards3}>
        <img src={HeartBPM} alt="HeartBPM" />
        <p style={{ fontSize: "16px" }}>Heart BPM</p>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>78 bpm</p>
        <div>
          <img src={ArrowDown} alt="ArrowDown" />
          <p>Lower than Average</p>
        </div>
      </div>
    </div>
  );
};

export default PatientReport;
