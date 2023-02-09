import React from 'react';
import { DepartmentProps } from '../pages/Departement';

interface DepartementComponantProps {
  bgColor?: string;
  members: number;
  departementInfo: DepartmentProps;
}

interface UserCyrcleComponantProps {
  bgcolor: string;
  userPic?: string;
  memebersCount?: number;
}

const UserCyrcleComponant = ({
  bgcolor,
  userPic,
  memebersCount,
}: UserCyrcleComponantProps) => {
  return (
    <div
      className={`flex items-center justify-center h-10 w-10 rounded-full bg-black text-white text-sm`}
      style={{
        backgroundImage: userPic ? `url("${userPic}")` : '',
        backgroundSize: 'cover',
      }}
    >
      {memebersCount ? `+${memebersCount}` : ''}
    </div>
  );
};

const DepartementComponant = ({
  members,
  departementInfo,
  bgColor,
}: DepartementComponantProps) => {
  const projectCompletation: string = departementInfo.projects
    ? (
        departementInfo.projects?.completed /
        (departementInfo.projects?.completed +
          departementInfo.projects?.incoming)
      ).toFixed()
    : '0';
  console.log(projectCompletation);

  return (
    <div
      className={`w-full flex flex-col gap-1 justify-around p-4 rounded-2xl bg-${bgColor} text-white`}
    >
      <div className="flex flex-row gap-1">
        <UserCyrcleComponant bgcolor={`${bgColor}`} memebersCount={members} />
        <UserCyrcleComponant
          bgcolor={`${bgColor}`}
          userPic="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <UserCyrcleComponant
          bgcolor={`${bgColor}`}
          userPic="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <h1 className="font-bold text-2xl">{departementInfo.name}</h1>
      <p className="text-sm font-medium">
        {`Completed: ${departementInfo.projects?.completed} | Incoming: ${departementInfo.projects?.incoming}`}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 d">
        <div
          className={`bg-blue-600 h-2.5 w-[${
            projectCompletation + 'px'
          }] rounded-full`}
        ></div>
      </div>
    </div>
  );
};
export default DepartementComponant;
