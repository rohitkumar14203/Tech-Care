import Dashboard from "./Components/dashboard/Dashboard";
import { PatientProvider } from "./Context/PatientProvider";

const App = () => {
  return (
    <PatientProvider>
      <Dashboard />
    </PatientProvider>
  );
};

export default App;
