import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-emerald-500 text-white flex flex-col justify-center items-center py-40 px-10'>
                <h1 className='text-4xl font-bold text-center'>ABOUT COMPONENT</h1>
                <div className='mt-5 w-1/2 md:w-1/4 text-center border-b-4 border-b-white relative'>
                    <i className='p-3 absolute -bottom-5 left-[50%] -translate-x-1/2 bg-emerald-500 rounded-full fa-solid fa-star'></i>
                </div>
                <div className='flex flex-col md:flex-row text-lg mt-7'>
                    <div className=' px-8'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                            source files including HTML, CSS, and JavaScript as well as optional
                            SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='px-8'>
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete
                            source files including HTML, CSS, and JavaScript as well as optional
                            SASS stylesheets for easy customization.</p>
                    </div>
                </div>


            </div>


        </>
    )
}
