import React, { useEffect } from 'react'
import Head from 'next/head'
import Posts from '../components/posts/Posts'
import Sidebar from '../components/Sidebar'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { BiBell, BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri'
import ThemeToggle from '../components/ThemeToggle'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

function Home() {
  const auth = Cookies.get("jwtToken")
  const router = useRouter()

  // useEffect(()=>{
  //   if(!auth){
  //     router.push("/login ")
  //   }
  // } ,[auth])

  const logout = () =>{
    console.log("user logged out")
    Cookies.remove("jwtToken")
    router.push("/login")

    
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}

      <header className='h-[70px] xs:hidden fixed top-0 z-10 sm:hidden  w-full bg-slate-500 flex items-center justify-between'>
        <h3 className='p-0 m-0'>Logo</h3>
        <p>icons</p>
        <button onClick={()=>logout()}>Logout</button>
      </header>
      {/* <div className='flex w-[100%] mt-[70px] xs:mt-0 xs:h-[100vh] h-[calc(100vh_-_70px)]'> */}
      <div className='flex w-[100%] mt-[70px] mb-[50px] xs:mb-0 xs:mt-0 xs:h-[100vh] '>
        <div className='sidebar_container duration-700 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[280px] sm:-[200px] xs:w-[70px] hidden md:block xl:block lg:block xs:block bg-[var(--sidebar-bg)] h-full relative'>
          <Sidebar logout={logout} />
        </div>
        <div className='xl:w-[80%] lg:w-[calc(100vw_-_20%)] md:w-[calc(100vw_-_60px)] xs:w-[calc(100vw_-_60px)] overflow-y-auto h-full'>
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
        {/* <li className='sidebarLink h-[50] w-[50] rounded-[8px] p-[10px]'><ThemeToggle className='fntSz30' /></li> */}
      </ul>
    </>
  )
}

export default Home