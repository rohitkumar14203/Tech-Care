import { useContext } from "react";
import { PatientContext } from "../../Context/PatientContext";
import Styles from "./PatientProfile.module.css";
import BirthIcon from "../../assets/navImages/ScheduleIcon.svg";
import FemaleIcon from "../../assets/FemaleIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import InsuranceIcon from "../../assets/InsuranceIcon.svg";

const PatientProfile = () => {
  const { jessicaData } = useContext(PatientContext);

  return (
    <div className={Styles.patientProfile}>
      <div className={Styles.profileHeader}>
        <img src={jessicaData?.profile_picture} alt="jessicaImg" />
        <h2>{jessicaData?.name}</h2>
      </div>
      <div className={Styles.profileBody}>
        <div className={Styles.profileBodyDiv}>
          <img src={BirthIcon} alt="BrithIcon" />
          <div>
            <p>Date Of Birth</p>
            <p>{jessicaData?.date_of_birth}</p>
          </div>
        </div>
        <div className={Styles.profileBodyDiv}>
          <img src={FemaleIcon} alt="FemaleIcon" />
          <div>
            <p>Gender</p>
            <p>{jessicaData?.gender}</p>
          </div>
        </div>
        <div className={Styles.profileBodyDiv}>
          <img src={PhoneIcon} alt="PhoneIcon" />
          <div>
            <p>Contact Info.</p>
            <p>{jessicaData?.phone_number}</p>
          </div>
        </div>
        <div className={Styles.profileBodyDiv}>
          <img src={PhoneIcon} alt="PhoneIcon" />
          <div>
            <p>Emergency Contacts</p>
            <p>{jessicaData?.emergency_contact}</p>
          </div>
        </div>
        <div className={Styles.profileBodyDiv}>
          <img src={InsuranceIcon} alt="InsuranceIcon" />
          <div>
            <p>Insurance Provider</p>
            <p>{jessicaData?.insurance_type}</p>
          </div>
        </div>
        <button className={Styles.showAllInfo}>Show All Information</button>
      </div>
    </div>
  );
};

export default PatientProfile;
