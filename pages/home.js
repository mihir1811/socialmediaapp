import Link from 'next/link'
import React, { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Posts from '../components/posts/Posts'
import Header from '../components/header/Header'
import Sidebar from '../components/Sidebar'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { BiBell, BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import ThemeToggle from '../components/ThemeToggle'

function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}
      <div className='flex w-[100%]'>
        <div className='sidebar_container duration-700 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[280px] sm:-[200px] xs:w-[70px] hidden md:block xl:block lg:block xs:block bg-[var(--sidebar-bg)] h-screen'>
          <Sidebar/>
        </div>
        <div className='xl:w-[80%] lg:w-[calc(100vw_-_20%)] md:w-[calc(100vw_-_60px)] xs:w-[calc(100vw_-_60px)] overflow-y-auto h-screen'>
          <Posts />
        </div>
        {/* <Link href="/contact"> contact</Link> */}
      </div>
      <ul className='2xs:flex sm:hidden xs:hidden hidden justify-around fixed bottom-0 bg-white w-full'> 
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><AiOutlineHome className='fntSz30' /></li>
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><AiOutlineSearch className='fntSz30' /></li>
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><BiMoviePlay className='fntSz30' /></li>
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><RiMessengerLine className='fntSz30' /></li>
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><BiBell className='fntSz30' /> </li>
        <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><ThemeToggle className='fntSz30' /></li>
      </ul>
    </>
  )
}

export default Home