import React from 'react'
export default function Contact() {
    return (
        <>
            <div className='flex flex-col justify-center items-center py-10'>
                <h1 className='text-4xl font-bold text-center'>CONTACT SECTION</h1>
                <div className='mt-5 w-1/2 md:w-1/4 text-center border-b-4 border-b-black relative'>
                    <i className='p-3 absolute -bottom-5 left-[50%] -translate-x-1/2 bg-white rounded-full fa-solid fa-star'></i>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <form className='w-1/2 mt-10'>
                        <div className='w-full'>
                            <input type="text" placeholder='User Name' className='focus:outline-none border-b-2 border-b-gray-300  w-full py-2 ps-3 ' />
                        </div>
                        <div className='w-full mt-7'>
                            <input type="number" placeholder='User Age' className='focus:outline-none border-b-2 border-b-gray-300  w-full py-2 ps-3 ' />
                        </div>
                        <div className='w-full mt-7'>
                            <input type="email" placeholder='User Email' className='focus:outline-none border-b-2 border-b-gray-300  w-full py-2 ps-3 ' />
                        </div>
                        <div className='w-full mt-7'>
                            <input type="password" placeholder='User Password' className='focus:outline-none border-b-2 border-b-gray-300  w-full py-2 ps-3 ' />
                        </div>
                        <div className='mt-7'>
                            <button className='bg-teal-500 rounded-md p-2 text-white'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
