import React from 'react'
import { Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>

      <div className='min-h-[70vh]'>

        <Routes>

          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>
    </div>
  )
}

export default App;
