import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Members, NotFoundPage } from './pages';
import Department from './pages/Departement';
import { DepartementHome } from './pages/DepartementHome';
import {
  allDepartementInfo,
  communityDepartementInfo,
  designDepartementInfo,
  devDepartementInfo,
  eventsDepartementInfo,
  logisticsDepartementInfo,
  multimediaDepartementInfo,
} from './constant/departementInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
            <Route index element={<Home />} />
            <Route path="members" element={<Members />} />
          </Route> */}
          <Route path="/">
            <Route
              index
              element={
                <DepartementHome allDepartmentInfo={allDepartementInfo} />
              }
            />
            <Route
              path="dev"
              element={<Department departmentData={devDepartementInfo} />}
            />
            <Route
              path="design"
              element={<Department departmentData={designDepartementInfo} />}
            />
            <Route
              path="multimedia"
              element={
                <Department departmentData={multimediaDepartementInfo} />
              }
            />
            <Route
              path="events"
              element={<Department departmentData={eventsDepartementInfo} />}
            />
            <Route
              path="logistics"
              element={<Department departmentData={logisticsDepartementInfo} />}
            />
            <Route
              path="community"
              element={<Department departmentData={communityDepartementInfo} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
