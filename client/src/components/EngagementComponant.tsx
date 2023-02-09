import { defaults } from 'chart.js';
import React from 'react';

export interface EngagementProps {
  icon?: any;
  title?: string;
  data?: string;
}

function EngagementComponant({ icon, title, data }: EngagementProps) {
  return (
    <div className="flex flex-col items-start justify-center h-full gap-4 p-5 relative rounded-2xl bg-[#faf4f0] text-black">
      <div className="absolute left-[20%] top-[-2rem] p-3 rounded-2xl bg-[#fe4c24]">
        {icon}
      </div>
      <p className="text-base lg:text-xl">{title}</p>
      <h1
        className={`font-bold ${
          data!.length < 4 ? 'text-xl lg:text-3xl' : 'text-xl lg:text-3xl'
        }`}
      >
        {data}
      </h1>
    </div>
  );
}
export default EngagementComponant;
