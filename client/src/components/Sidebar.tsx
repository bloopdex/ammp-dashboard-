import React, { useState } from 'react';
import {
   AiFillCaretLeft,
   AiOutlineLogout,
   AiFillDashboard,
   AiFillSetting,
} from 'react-icons/ai';
import { BsFillPeopleFill, BsHddNetworkFill } from 'react-icons/bs';
import { Logo } from '../assets/';
function Sidebar() {
   const [open, setOpen] = useState(true);
   const Menus = [
      { title: 'Dashboard', src: <AiFillDashboard size={20} /> },
      { title: 'All Members', src: <BsFillPeopleFill size={20} /> },
      { title: 'Activities', src: <BsHddNetworkFill size={20} /> },
      { title: 'Settings ', src: <AiFillSetting size={20} /> },
   ];
   return (
      <div
         className={` flex flex-col justify-between rounded-r-xl ${
            open ? 'w-72' : 'w-20 '
         } bg-GDG-BLACK h-screen p-5  pt-8 relative duration-300`}
      >
         <AiFillCaretLeft
            size={25}
            className={`absolute cursor-pointer right-[-1rem] top-9 w-7 border-white
           border-2 rounded-full bg-GDG-BLACK p-1 ${
              !open && 'rotate-180 top-12'
           }`}
            color="#FFF"
            onClick={() => setOpen(!open)}
         />
         <div className="flex gap-x-4 items-center">
            <img
               src={Logo}
               className={`h-9 cursor-pointer duration-500 ${
                  open && 'rotate-[360deg]'
               }`}
            />
            <h1
               className={`text-white cursor-pointer origin-left font-medium text-xl duration-200 ${
                  !open && 'scale-0'
               }`}
            >
               GDG Dashboard
            </h1>
         </div>
         <ul>
            {Menus.map((Menu, index) => (
               <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-GDG-BLUE text-white text-sm items-center gap-x-4 mt-2 ${
                     index === 0 && 'bg-light-white'
                  } `}
               >
                  {Menu.src}
                  <span
                     className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                     {Menu.title}
                  </span>
               </li>
            ))}
         </ul>
         <ul className="pt-6">
            <li className="flex rounded-md p-2 cursor-pointer hover:bg-GDG-RED text-white text-sm items-center gap-x-4 mt-2">
               <AiOutlineLogout size={25} />
               <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
               >
                  Logout
               </span>
            </li>
         </ul>
      </div>
   );
}
export default Sidebar;
