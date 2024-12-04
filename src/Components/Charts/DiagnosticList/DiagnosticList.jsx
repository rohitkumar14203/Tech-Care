import { useContext } from "react";
import { PatientContext } from "../../../Context/PatientContext";
import styles from "./DiagnosticList.module.css";

const DiagnosticList = () => {
  const { jessicaData } = useContext(PatientContext);

  return (
    <div className={styles.container}>
      <h2>Diagnostic List</h2>
      <div className={styles.header}>
        <span>Problem/Diagnosis</span>
        <span>Description</span>
        <span>Status</span>
      </div>
      <div className={styles.list}>
        {jessicaData?.diagnostic_list?.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <div className={styles.diagnosis}>
              <p>{item.name}</p>
            </div>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.status}>
              <span>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticList;
