import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import NoMatch from "./components/noMatch/NoMatch";
import EmployeeCreation from "./components/employee/EmployeeCreation";
import Updateuser from "./components/employee/Updateuser";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createNew" element={<EmployeeCreation />} />
        <Route path="/employee/:id" element={<Updateuser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
