import React from 'react';
import discount from "../../assets/images/discount.webp";

const Discount = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        <div className='flex rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer  justify-center items-center py-5 gap-3'>
            <img width={50} height={50} className='rounded-lg' src={discount} alt="discoun img" />
            <p className='text-gray-700 font-medium'>Chegirmada</p>
        </div>
        <div className='flex rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer justify-center items-center py-5 gap-3'>
            <img width={50} height={50} className='rounded-lg' src={discount} alt="discoun img" />
            <p className='text-gray-700 font-medium'>Chegirmada</p>
        </div>
        <div className='flex rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer justify-center items-center py-5 gap-3'>
            <img width={50} height={50} className='rounded-lg' src={discount} alt="discoun img" />
            <p className='text-gray-700 font-medium'>Chegirmada</p>
        </div>
        <div className='flex rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer justify-center items-center py-5 gap-3'>
            <img width={50} height={50} className='rounded-lg' src={discount} alt="discoun img" />
            <p className='text-gray-700 font-medium'>Chegirmada</p>
        </div>
    </div>
  )
}

export default Discount