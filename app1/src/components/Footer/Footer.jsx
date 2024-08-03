import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-slate-700 text-white text-2xl font-bold'>
    <div className="flex flex-col md:flex-row justify-around text-center py-28">
      <div className='w-full md:w-2/6 pb-3'>
        <h1>LOCATION</h1>
        <h2 className='font-normal text-lg mt-5'>2215 John Daniel Drive</h2>
        <h2 className='font-normal text-lg'>Clark, MO 65243</h2>
      </div>
      <div className='w-full md:w-2/6 flex flex-col items-center pb-3'>
        <h1>AROUND THE WEB</h1>
        <div className='mt-5 flex justify-around w-1/3'>
          <a href=""><i className='fa-brands fa-facebook'></i></a>
          <a href=""><i className='fa-brands fa-twitter'></i></a>
          <a href=""><i className='fa-brands fa-linkedin'></i></a>
          <a href=""><i className='fa-solid fa-globe'></i></a>
        </div>
      </div>
      <div className='w-full md:w-2/6 pb-3'>
        <h1>ABOUT FREELANCER</h1>
        <h2 className='font-normal text-base mt-5 text-wrap'>Freelance is a free to use, licensed Bootstrap theme<br></br> created by Route</h2>
      </div>
    </div>
    <div className='text-center py-8 bg-gray-800'>
      <h2 className='font-normal text-lg'>Copyright © Your Website 2021</h2>
    </div>
    </div>
    </>
  )
}
