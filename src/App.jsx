import React, { useEffect, useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [cntData, setCntData] = useState([])
  const [region, setRegion] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/country.json')
      .then(response => response.json())
      .then(data => setCntData(data))
  }, []);

 

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-gray-800">
       <Header  setRegion={setRegion} cntData={cntData}  />
       <Main region ={region} cntData={cntData} />
       <Footer />
    </div>
  )
}

export default App
