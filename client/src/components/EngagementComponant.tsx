import { defaults } from 'chart.js';
import React from 'react';

export interface EngagementProps {
  icon?: any;
  title?: string;
  data?: string;
}

function EngagementComponant({ icon, title, data }: EngagementProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-4 h-40 w-60 p-4 relative rounded-2xl bg-[#faf4f0] text-black">
      <div className="absolute left-[20%] top-[-2rem] p-4 rounded-2xl bg-[#fe4c24]">
        {icon}
      </div>
      <p className="text-xl">{title}</p>
      <h1 className={`font-bold ${data!.length < 4 ? 'text-5xl' : 'text-4xl'}`}>
        {data}
      </h1>
    </div>
  );
}
export default EngagementComponant;
