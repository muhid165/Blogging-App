import React from 'react'
import logo from "@/assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { Button } from './ui/button';
import { PiSignInBold } from "react-icons/pi";
import SearchBox from './SearchBox';
import { RouteSignIn } from '@/helpers/RouteName';


const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-20 fixed w-full z-20 
    bg-white px-5 border-b border-gray-200 shadow-sm'>
      <div> <img src={logo} width={103} /></div>
      <div className="w-[500px]"> <SearchBox /> </div>
      <div>
        <Button asChild className='rounded-full'>
          <Link to={RouteSignIn} className='rounded-full bg-blue-300'>
          <PiSignInBold/>
          SignIn</Link>
        </Button>
      </div>
    </div>
  )
}

export default Topbar