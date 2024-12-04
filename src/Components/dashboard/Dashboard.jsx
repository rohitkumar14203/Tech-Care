import BloodPressureChart from "../Charts/BloodPressureChart/BloodPressureChart";
import LabTest from "../LabTest/LabTest";
import NavBar from "../NavBar/NavBar";
import PatientProfile from "../PatientProfile/PatientProfile";
import Sidebar from "../SideBar/SideBar";
import Styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className={Styles.dashboardContainer}>
        <div>
          <Sidebar />
        </div>
        <div className={Styles.mainContent}>
          <BloodPressureChart />
          <div>
            <PatientProfile />
            <LabTest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
