import React, { Dispatch, SetStateAction, useState } from "react";
import { HiMenuAlt2 } from 'react-icons/hi';

type MobileDropDownNavBarProps = {
  isShown: boolean,
  setIsShown: Dispatch<SetStateAction<boolean>>,
}
const MobileDropDownNavBar: React.FC<MobileDropDownNavBarProps> = ({ isShown, setIsShown }) => {
  return <div onClick={() => setIsShown(false)} className={`${isShown ? "absolute z-10 top-0 left-0" : "hidden"} w-full h-screen bg-opacity-60 bg-black`}>
    <aside className={`h-screen w-1/2 p-3 space-y-10 bg-white`}>
      <img src="https://www.gdgalgiers.com/static/phonelogo-db9c725b1463afd46d9b886076124bb2.png" alt="logo" className='w-14' />
      <nav className="uppercase text-secondary">
        <ul className="space-y-10 w-fit">
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-blue hover:border-b-blue">messages</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-red hover:border-b-red">automation</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-green hover:border-b-green">contacts</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-yellow hover:border-b-yellow">media</a></li>
        </ul>
      </nav>
    </aside>
  </div>
}
export default function Header() {
  const [isMobileNabBarShown, setIsMobileNabBarShown] = useState<boolean>(false);

  return <>
    <header className='w-full p-2 md:px-2 border-b-2 border-b-gray-200 flex items-center justify-between'>
      <div>
        <img src="https://www.gdgalgiers.com/static/phonelogo-db9c725b1463afd46d9b886076124bb2.png" alt="logo" className="hidden md:block w-16 h-16" />
        <HiMenuAlt2 className=" md:hidden w-10 h-10 cursor-pointer text-black" onClick={() => setIsMobileNabBarShown(true)} />
      </div>
      <nav className="hidden md:block uppercase text-secondary">
        <ul className="w-fit flex items-center gap-x-10 ">
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-blue hover:border-b-blue">messages</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-red hover:border-b-red">automation</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-green hover:border-b-green">contacts</a></li>
          <li><a href="/" className="pb-5 transition-colors duration-200 border-b-gray-200 hover:border-b-4 hover:text-yellow hover:border-b-yellow">media</a></li>
        </ul>
      </nav>
      <div className="rounded-full overflow-hidden w-12">
        <img src="https://ui-avatars.com/api/?name=M+B" alt="" />
      </div>  
    </header>
    <MobileDropDownNavBar isShown={isMobileNabBarShown} setIsShown={setIsMobileNabBarShown} />
  </>
}