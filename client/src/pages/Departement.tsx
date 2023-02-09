import { Sidebar, EngagementComponant } from '../components';
import { LeaderComponantProps } from '../types/departementLeaders';
import { ProjectCompletationProps } from '../types/ProjectCompletation';
import {
  BsFillPeopleFill,
  BsFillCalendar2CheckFill,
  BsFillCalendarWeekFill,
  BsFillCalendarXFill,
} from 'react-icons/bs';
import { DepartementDataProps } from '../types/departementData';
import { EngagementProps } from '../components/EngagementComponant';
import { Line } from 'react-chartjs-2';

export interface DepartmentProps {
  path?: string;
  name?: string;
  leaders?: LeaderComponantProps[];
  projects?: ProjectCompletationProps;
  data?: DepartementDataProps;
}

interface deparementPageProps {
  departementData: DepartmentProps;
}

function LeaderComponant({ pic, name, role }: LeaderComponantProps) {
  return (
    <div className="flex flex-row gap-2 lg:gap-4 items-center">
      <img
        src={pic}
        className="rounded-full h-10 lg:h-16 w-10 lg:w-16 bg-white"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-base lg:text-xl">{name}</h2>
        <p className="font-light text-sm lg:text-base">{role}</p>
      </div>
    </div>
  );
}

function Department({ departementData }: deparementPageProps) {
  const engagementData: EngagementProps[] = [
    {
      title: 'Total Members',
      data: departementData.data?.totalMembers?.toString(),
      icon: <BsFillPeopleFill size={25} color={'white'} />,
    },
    {
      title: 'Next Event',
      data: departementData.data?.nextEvent?.toISOString().slice(0, 10),
      icon: <BsFillCalendarWeekFill size={25} color={'white'} />,
    },
    {
      title: 'Completed Projects',
      data: departementData.projects?.completed?.toString(),
      icon: <BsFillCalendar2CheckFill size={25} color={'white'} />,
    },
    {
      title: 'Incoming Projects',
      data: departementData.projects?.incoming?.toString(),
      icon: <BsFillCalendarXFill size={25} color={'white'} />,
    },
  ];

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="grid gap-4 grid-cols-6 w-full p-10 bg-[#f3f1ef]">
        <div className="col-span-3 lg:col-span-2 row-span-3 p-8 rounded-3xl flex flex-col justify-around bg-[#0f1322] text-white">
          <h1 className="text-2xl lg:text-3xl sm:text-xl font-bold ">
            Leaders
          </h1>
          <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-2xl lg:text-3xl">
                {departementData.projects?.completed}%
              </h1>
              <p className="font-light">Completed</p>
            </div>
            <div className="rounded-full border-2 border-grey"></div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-2xl lg:text-3xl">
                {departementData.projects?.incoming}
              </h1>
              <p className="font-light">Incoming</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {departementData.leaders?.map(leaderInfo =>
              LeaderComponant(leaderInfo),
            )}
          </div>
        </div>

        <div className="col-span-3 lg:col-span-4 row-span-3 p-8 rounded-3xl flex flex-col justify-around bg-GDG-BLUE">
          {/* <LineChart /> */}{' '}
        </div>

        <div className="col-span-full row-span-2 p-8 rounded-3xl flex flex-row justify-around items-center bg-[#d9bda9]">
          <div className="flex flex-col gap-4 w-40">
            <h1 className="font-bold text-xl lg:text-2xl">Engagement</h1>
            <p>
              General Statistics of user{' '}
              <span className="font-bold">engagement</span> process.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {engagementData.map(engagementInfo => (
              <div className="col-span-1 row-span-full">
                <EngagementComponant
                  title={engagementInfo.title}
                  data={engagementInfo.data}
                  icon={engagementInfo.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
