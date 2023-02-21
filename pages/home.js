import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <>
        {/* <header>
            <div>logo</div>
            
        </header> */}
        <div className='flex w-[100%]'>
          <div className='w-[23%] w-max-[244px] bg-slate-200 h-screen'></div>
          <div className='w-[77%] h-screen'></div>
          <Link href="/contact"> contact</Link>
        </div>
    </>
  )
}

export default Home