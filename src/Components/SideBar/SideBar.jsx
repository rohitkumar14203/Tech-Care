import { useContext } from "react";
import { PatientContext } from "../../Context/PatientContext";
import Styles from "./Sidebar.module.css";
import dots from "../../assets/3dots.svg";
import searchIcon from "../../assets/search.svg";

const SideBar = () => {
  const { allPatients, loading } = useContext(PatientContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={Styles.SideBar}>
      <div className={Styles.header}>
        <h2>Patients</h2>
        <img src={searchIcon} alt="" />
      </div>
      {allPatients.map((patient, index) => (
        <div
          key={index}
          className={`${Styles.patient_card} ${
            patient.name === "Jessica Taylor" ? Styles.selected : ""
          }`}
        >
          <div className={Styles.patient_info}>
            <img
              style={{ width: "48px", height: "48px" }}
              src={patient.profile_picture}
              alt=""
            />
            <div>
              <p>{patient.name}</p>
              <p className={Styles.patient_age}>
                {patient.gender}, {patient.age}
              </p>
            </div>
          </div>
          <div className={Styles.dots}>
            <img src={dots} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
