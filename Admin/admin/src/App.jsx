import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
export const currency='Rs.'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token") || "");
 

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      return
    }

    localStorage.removeItem('token')
  }, [token])

  const handleLogout = () => {
    setToken('')
  }

  return (
    <div className='bg-gray-50 min-h-screen'>

      <ToastContainer />
      {token === "" ?
        <Login setToken={setToken} /> :
        <>
          <Navbar onLogout={handleLogout} />
          <hr />

          <div className='flex w-full'>
            <Sidebar />

            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-500 text-base'>
              <Routes>
                <Route path='/' element={<Navigate to='/add' replace />} />
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/order' element={<Order token={token} />} />
                <Route path='*' element={<Navigate to='/add' replace />} />
              </Routes>
            </div>

          </div>
        </>
      }

    </div>
  )
}

export default App