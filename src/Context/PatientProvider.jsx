import { useState, useEffect } from "react";

import { PatientContext } from "./PatientContext";
import PropTypes from "prop-types";

export const PatientProvider = ({ children }) => {
  const [patientsData, setPatientsData] = useState({
    allPatients: [],
    jessicaData: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const username = import.meta.env.VITE_USERNAME || "coalition";
      const password = import.meta.env.VITE_PASSWORD || "skills-test";
      const headers = new Headers();
      headers.set("Authorization", "Basic " + btoa(username + ":" + password));

      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          { headers }
        );
        const data = await response.json();
        // console.log(data);
        setPatientsData({
          allPatients: data,
          jessicaData: data.find(
            (patient) => patient.name === "Jessica Taylor"
          ),
        });
      } catch (error) {
        console.error(error);
        setPatientsData((prev) => ({
          ...prev,
          error: "Failed to fetch patient data",
        }));
      }
    };

    fetchData();
  }, []);

  return (
    <PatientContext.Provider value={patientsData}>
      {children}
    </PatientContext.Provider>
  );
};
PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PatientProvider;
