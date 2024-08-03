import React from 'react'
import profileImg from './src/profile.svg'
export default function Main() {
    return (
        <>
            <div className='bg-emerald-500 text-white flex justify-center items-center py-20'>
                <div className='w-1/2 text-center'>
                    <div className='flex justify-center'>
                        <img className='w-[250px]' src={profileImg} alt="profile img" />
                    </div>
                    <div className='flex flex-col items-center mt-6'>
                        <h1 className='text-4xl font-bold'>START FRAMEWORK</h1>
                        <div className='mt-5 w-1/2 md:w-1/4 text-center border-b-4 border-b-white relative'>
                            <i className='p-3 absolute -bottom-5 left-[50%] -translate-x-1/2 bg-emerald-500 rounded-full fa-solid fa-star'></i>
                        </div>
                        <h2 className='mt-4'>Graphic Artist - Web Designer - Illustrator</h2>

                    </div>
                </div>
            </div>
        </>
    )
}
