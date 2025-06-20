import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Rootlayout({ cntData }) {
  return (
    <div>
        <Header cntData={cntData} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Rootlayout