import { Link } from 'react-router-dom';
import { Sidebar } from '../components';
import DepartementComponant from '../components/DepartementComponant';
import EventComponent from '../components/EventComponant';
import events from '../constant/event';
import { DepartementDataProps } from '../types/departementData';
import { DepartmentProps } from './Departement';

interface DepartementHomeProps {
  allDepartmentInfo: DepartmentProps[];
}

const routeDepartement = () => {};

export const DepartementHome = ({
  allDepartmentInfo,
}: DepartementHomeProps) => {
  const colors = [
    'GDG-BLUE',
    'GDG-RED',
    'GDG-GREEN',
    'GDG-YELLOW',
    'GDG-BLACK',
  ];
  return (
    <div className="flex flex-row gap-8 items-center">
      <Sidebar />
      <div className="h-screen p-10 flex flex-col justify-between items-start m-auto w-[60%]">
        <div className="grid gap-4 mt-6 grid-cols-2 w-full">
          {allDepartmentInfo.map(departement => (
            <Link to={departement.path ?? ''}>
              <DepartementComponant
                departementInfo={departement}
                members={departement.data?.totalMembers ?? 0}
                bgColor={'GDG-BLACK'}
              />
            </Link>
          ))}
        </div>
        <div className="grid gap-4 grid-col-2 w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Next Events</h1>
            <div className="grid gap-4 grid-row-3">
              {events.map(event => (
                <EventComponent title={event.title} date={event.date} />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Leaders</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
