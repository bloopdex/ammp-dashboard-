import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar } from './components/'
import { Home, Members } from './pages'
import Department from './pages/Departement'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="members" element={<Members />} />
          </Route>
          <Route path="/department">
            <Route path='dev' element={<Department name='dev' />} />
            <Route path='design' element={<Department name='design' />} />
            <Route path='multimedia' element={<Department name='multimedia' />} />
            <Route path='community' element={<Department name='community' />} />
            <Route path='event' element={<Department name='event' />} />
            <Route path='logistics' element={<Department name='logistics' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
