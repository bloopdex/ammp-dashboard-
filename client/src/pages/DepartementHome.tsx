import { Link } from 'react-router-dom';
import { Sidebar } from '../components';
import DepartementComponant from '../components/DepartementComponant';
import { DepartementDataProps } from '../types/departementData';
import { DepartmentProps } from './Departement';

interface DepartementHomeProps {
  allDepartmentInfo: DepartmentProps[];
}

const routeDepartement = () => {};

export const DepartementHome = ({
  allDepartmentInfo,
}: DepartementHomeProps) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      <Sidebar />
      <div className="w-screen h-screen p-10 flex flex-col justify-between items-start">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {allDepartmentInfo.map(departement => (
            <Link to={departement.path ?? ''}>
              <DepartementComponant
                departementInfo={departement}
                members={departement.data?.totalMembers ?? 0}
                bgColor={`GDG-BLUE`}
              />
            </Link>
          ))}
        </div>
        <div className="grid gap-4 grid-col-1 md:grid-col-2 w-full">
          <div className="flex flex-col grid-span-1">
            <h1 className="font-bold text-2xl">Next Events</h1>
          </div>
          <div className="flex flex-col grid-span-1"></div>
        </div>
      </div>
    </div>
  );
};
