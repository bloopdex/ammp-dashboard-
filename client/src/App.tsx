import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components/';
import { devDepartementData } from './constant/departementData';
import { devLeaders } from './constant/departementLeaders';
import { devProjectsCompletation } from './constant/projectCompletation';
import { Home, Members, NotFoundPage } from './pages';
import Department from './pages/Departement';

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
            <Route index element={<Department />} />
            <Route
              path="dev"
              element={
                <Department
                  name="dev"
                  leaders={devLeaders}
                  projects={devProjectsCompletation}
                  data={devDepartementData}
                />
              }
            />
            <Route path="design" element={<Department name="design" />} />
            <Route
              path="multimedia"
              element={<Department name="multimedia" />}
            />
            <Route path="community" element={<Department name="community" />} />
            <Route path="event" element={<Department name="event" />} />
            <Route path="logistics" element={<Department name="logistics" />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
