import React from 'react'
import { CloudIcon } from '../../assets'

export default function Landing() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex justify-center items-center gap-3 '>
            <div>
                <img src={ CloudIcon } alt="cloud icon" className='w-14'/>
            </div>
            <div>
                <h2 className='font-bold text-[#0F4264] text-2xl'>NEM Insurance Plc</h2>
            </div>
        </div>
        <div className='pt-10'>
            <h1 className='font-bold text-4xl '>Welcome to <span className='text-[#4F4F4F]'>NEM Insurance Plc</span></h1>
            <h3 className='font-500 text-lg text-[#BDBDBD] text-center py-3'>To book a meeting click on the button below </h3>
        </div>
    </div>
    
  )
}
