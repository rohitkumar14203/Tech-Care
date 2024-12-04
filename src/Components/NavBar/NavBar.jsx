import TestLogo from "../../assets/navImages/TestLogo.svg";
import Home from "../../assets/navImages/Home.svg";
import group from "../../assets/navImages/group.svg";
import ScheduleIcon from "../../assets/navImages/ScheduleIcon.svg";
import MessageIcon from "../../assets/navImages/MessageIcon.svg";
import TransactionIcon from "../../assets/navImages/TransactionIcon.svg";
import DotsIcon from "../../assets/navImages/3dots.svg";
import settings from "../../assets/navImages/settings.svg";
import SeniorWomenDoctor1 from "../../assets/navImages/SeniorWomanDoctor1.png";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Styles.navbar}>
      <div>
        <img className={Styles.logo} src={TestLogo} alt="Test Logo" />
      </div>
      <div className={Styles.navbar_links}>
        <a href="">
          <img className={Styles.nav_icon} src={Home} alt="Home" />
          <span>overview</span>
        </a>
        <a href="" className={Styles.selected}>
          <img className={Styles.nav_icon} src={group} alt="Patient" />
          <span>Patient</span>
        </a>
        <a href="">
          <img
            style={{ width: "35px", height: "37px" }}
            className={Styles.nav_icon}
            src={ScheduleIcon}
            alt="Schedule"
          />
          <span>Schedule</span>
        </a>
        <a href="">
          <img className={Styles.nav_icon} src={MessageIcon} alt="Message" />
          <span>Message</span>
        </a>
        <a href="">
          <img
            className={Styles.nav_icon}
            src={TransactionIcon}
            alt="Transactions"
          />
          <span>Transactions</span>
        </a>
      </div>
      <div className={Styles.navbar_user}>
        <img
          className={Styles.user_image}
          src={SeniorWomenDoctor1}
          alt="Dr. Jose Simmons"
        />
        <div className={Styles.user_text}>
          <div className={Styles.user_info}>
            <span>Dr. Jose Simmons</span>
            <p>General Practitioner</p>
          </div>
          <div className={Styles.icon_group}>
            <img
              className={Styles.settings_icon}
              src={settings}
              alt="settingIcon"
            />
            <img className={Styles.dots_icon} src={DotsIcon} alt="DotIcons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
