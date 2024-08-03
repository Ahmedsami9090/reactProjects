import React from 'react'
import img_1 from './src/11.png'
import img_2 from './src/12.png'
import img_3 from './src/13.png'
import { useState } from 'react'
export default function Portfolio() {
    const [clickedImg, setclickedImg] = useState(img_1)
    const [isVisible, setIsVisible] = useState(false)
    return (
        <>
            <div className='flex flex-col justify-center items-center py-10 px-10 relative'>
                <div className={isVisible ? 'fixed top-0 h-screen w-screen flex justify-center items-center z-50 bg-blue-500 bg-opacity-40' : ' hidden  '}
                    onClick={() => { setIsVisible(false) }}>
                    <div className='w-3/4 md:w-1/2 flex justify-center'>
                        <img className='w-full md:w-3/4' src={clickedImg} alt="" />
                    </div>
                </div>
                <h1 className='text-4xl font-bold text-center'>PORTFOLIO COMPONENT</h1>
                <div className='mt-5 w-1/2 md:w-1/4 text-center border-b-4 border-b-black relative'>
                    <i className='p-3 absolute -bottom-5 left-[50%] -translate-x-1/2 bg-white rounded-full fa-solid fa-star'></i>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-9 px-14'>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_1} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_1), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_2} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_2), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_3} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_3), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_1} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_1), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_2} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_2), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='rounded-lg' src={img_3} alt="..." />
                        <div className='flex justify-center items-center absolute top-0 left-0 cursor-pointer
                            w-full h-full rounded-lg p-1 bg-emerald-500 z-30 opacity-0 hover:opacity-100 duration-700 transition'
                            onClick={() => { setclickedImg(img_3), setIsVisible(true) }}>
                            <i className='fa-solid fa-plus text-8xl text-white'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
