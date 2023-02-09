import React from 'react';

export interface EventComponentProps {
  title: string;
  date: string;
}

function EventComponent({ title, date }: EventComponentProps) {
  return (
    <div className="grid-span-1 w-full h-full flex flex-row justify-between rounded-2xl bg-GDG-BLACK text-white">
      <div className="bg-blue-600 h-full w-3 rounded-tl-2xl rounded-bl-2xl"></div>
      <div className="w-[95%] items-start p-2">
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-base">{date}</p>
      </div>
    </div>
  );
}

export default EventComponent;
