import Image from 'next/image'
import React from 'react'
import { AppLogo } from '../lib/config'
import {AiOutlineHome ,AiOutlineSearch} from "react-icons/ai"
import {BiMoviePlay , BiBell} from "react-icons/bi"
import {RiMessengerLine} from "react-icons/ri"
import {FaRegCompass} from "react-icons/fa"
import ThemeToggle from './ThemeToggle'
import Chat from './Chat'

const Sidebar = (props) => {
  return (
    <div className='w-full'>
        <div className='xs:hidden sm:hidden md:block'>
            {/* <Image
                src={AppLogo}
                width={200}
                height={100}
                alt="logo"
                style={{marginLeft:"10px"}}
                className="cursor-pointer"
            /> */}
            <h2 style={{fontFamily:"cursive "}}>commune</h2>
        </div>
        <ul className='m-0 p-0 fw500 hidden lg:block md:block sm:hidden xl:block xs:hidden duration-700 '> 
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><AiOutlineHome className='fntSz30 mr-1' />Home</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><AiOutlineSearch className='fntSz30 mr-1' />Search</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><BiMoviePlay className='fntSz30 mr-1' />Reels</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><RiMessengerLine className='fntSz30 mr-1' />Message</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><BiBell className='fntSz30 mr-1' />Notifications</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'><FaRegCompass className='fntSz30 mr-1' />Explore</li>
            <li className='sidebarLink p-[10px_20px] rounded-[30px] flex items-center'  onClick={()=>props.logout}><FaRegCompass className='fntSz30 mr-1' />Logout</li>
        </ul>
        <ul className='m-0 p-0 px-2 fw500 block lg:hidden md:hidden sm:block xl:hidden xs:block duration-700 mt-3'> 
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><AiOutlineHome className='fntSz30' /></li>
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><AiOutlineSearch className='fntSz30' /></li>
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><BiMoviePlay className='fntSz30' /></li>
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><RiMessengerLine className='fntSz30' /></li>
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><BiBell className='fntSz30' /> </li>
            <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><FaRegCompass className='fntSz30' /> </li>
            {/* <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><ThemeToggle className='fntSz30' /></li> */}

        </ul>
<Chat />

        <style jsx>
            {`
            .sidebarLink{
                // padding:10px 20px;
                // border-radius:30px;
                cursor:pointer
            }
            .sidebarLink:hover{
                background-color:var(--sidebar-hover-bg);
                font-weight:bold;
                transition:all 0.1s linear
            }
            .bottomBar{
                background-color:var(--sidebar-bg)
            }
            `}
        </style>
    </div>
  )
}

export default Sidebar