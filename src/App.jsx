import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Error from "./pages/Error";
import { Routes, Route, Navigate } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Admin from "./pages/Admin";

function App() {
  const [cntData, setCntData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json"
    )
      .then((response) => response.json())
      .then((data) => setCntData(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-gray-800">
      <Routes>
        <Route path="/" element={<Navigate to="/Countries" />} />

        <Route path="/" element={<Rootlayout cntData={cntData} />}>
          <Route path="/Countries" element={<Main cntData={cntData} />} />
          <Route path="/Countries/:region" element={<Main cntData={cntData} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Details/:alpha3Code" element={<Details cntData={cntData} />}/>
        </Route>

        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

    </div>
  );
}

export default App;
