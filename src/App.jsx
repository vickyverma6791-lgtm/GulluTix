import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'

import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'

const App = () => {

  // to hide the navbar in admin route we use
  const isAdminRoute = useLocation().pathname.startsWith("/admin")

  return (
    <div>
      <Toaster />
      {!isAdminRoute && <Navbar/>}
      {/* Navbar will show in all pages except /admin    */}
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/movies/:id' element={<MovieDetails/>}></Route>
          <Route path='/movies/:id/:date' element={<SeatLayout/>}></Route>
          <Route path='/my-bookings' element={<MyBooking/>}></Route>
         
      </Routes>
      {!isAdminRoute && <Footer/>}
      

    </div>
  )
}

export default App
