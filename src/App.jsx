import React from 'react'
import Home from './/home/Home'
import toast, { Toaster } from 'react-hot-toast';


import {Navigate, Route,Routes } from "react-router-dom"
import Courses from './Cource/Courses'
import Signup from './Component/Signup'
import Contact from  './Component/Contact'


// const [authUser ,setAuthUser]=useAuth()
// console.log(authUser);

function App() {
  
  return (
<>


<div className='dark:bg-slate-900 dark:text-white'>
<Routes >
  <Route path="/" element={<Home/>}/>
  
  {/* <Route
            path="/course"
            element={useAuth ? <Courses /> : <Navigate to="/signup" />}
          /> */}
<Route path='course' element={<Courses /> }/>
<Route path='Contact' element={<Contact /> }/>

<Route  path="/Signup" element={<Signup/>}/>

</Routes>
<Toaster />

</div>
</>
  )
}

export default App
