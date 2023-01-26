import React, { useState } from 'react';
import { Sidebar } from '../components';
import { LeaderComponantProps } from '../types/departementLeaders';
import { ProjectCompletationProps } from '../types/ProjectCompletation';
import { Line } from 'react-chartjs-2';
import LineChart from '../components/LineChart';

interface DepartmentProps {
   name?: string;
   leaders?: LeaderComponantProps[];
   projects?: ProjectCompletationProps;
}

function LeaderComponant({ pic, name, role }: LeaderComponantProps) {
   return (
      <div className="flex flex-row gap-8 items-center">
         <img src={pic} className="rounded-full h-16 w-16 bg-white" />
         <div className="flex flex-col">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="font-light text-base">{role}</p>
         </div>
      </div>
   );
}

function Department({ name, leaders, projects }: DepartmentProps) {
   return (
      <div className="flex w-full">
         <Sidebar />
         <div className="grid gap-4 grid-cols-6 w-full p-10 text-white">
            <div className="col-span-2 row-span-3 p-8 rounded-3xl box-content flex flex-col justify-around bg-GDG-GREEN">
               <h1 className="text-3xl font-bold ">Leaders</h1>
               <div className="flex flex-row justify-around">
                  <div className="flex flex-col justify-center items-center gap-2">
                     <h1 className="font-bold text-3xl">
                        {projects?.completed}%
                     </h1>
                     <p className="font-light">Completed</p>
                  </div>
                  <div className="rounded-full border-2 border-grey"></div>
                  <div className="flex flex-col justify-center items-center gap-2">
                     <h1 className="font-bold text-3xl">
                        {projects?.incoming}
                     </h1>
                     <p className="font-light">Incoming</p>
                  </div>
               </div>
               <div className="flex flex-col gap-4">
                  {leaders?.map(leaderInfo => LeaderComponant(leaderInfo))}
               </div>
            </div>
            <div className="w-full md:col-span-4 relative h-[50vh] m-auto p-4 border rounded-lg bg-GDG-BLUE">
               <LineChart />
            </div>
            <div className="col-span-full row-span-2 p-4 rounded-3xl flex flex-row justify-between items-center bg-GDG-YELLOW"></div>
         </div>
      </div>
   );
}

export default Department;
