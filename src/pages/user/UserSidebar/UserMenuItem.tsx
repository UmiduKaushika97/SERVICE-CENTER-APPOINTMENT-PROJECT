import React from 'react'
import type { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface UserMenuItemProps {
  Icon: IconType;
  name: string;
  isOpen: boolean;
  path?: string;
}

const UserMenuItem: React.FC<UserMenuItemProps> = ({ Icon, name, isOpen, path = "/"}) => {
  return (
//     <div className='m-2 flex cursor-pointer items-center space-x-4 rounded-md px-4 py-3
//     text-gray-400 duration-500 hover:bg-teal-700 hover:text-white'>
//       <Icon className='text-xl' />
// {isOpen && <span className='text-[14px] 
// overflow-hidden'>{name}</span>}
//     </div>

   <NavLink 
   to={path}
   className={({ isActive }) => `m-2 flex cursor-pointer items-center space-x-4 rounded-md px-4 py-3
    text-white-400 duration-500 hover:bg-red-700 hover:text-white ${isActive ? "bg-red-900" : "bg-transparent"}`}>
      <Icon className='text-xl' />
{isOpen && <span className='text-[14px] 
overflow-hidden'>{name}</span>}
    </NavLink>

  )
}

export default UserMenuItem
