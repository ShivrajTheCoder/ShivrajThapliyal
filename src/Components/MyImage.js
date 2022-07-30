import React from 'react'

export default function MyImage() {
  return (
    <div className='flex items-center justify-center p-3 h-96 bg-[#7e22ce]  '>
      <div className='m-3'>
        <img className=' h-64 w-64 rounded-full bg-gray-400 mt-16 border-4 border-neutral-50 ' src='./images/profilepic.png' />
      </div>
      <div className='italic m-3 w-96 h-48 rounded-lg p-3 bg-gray-300'>
        Nobody wants their websites to crash, that is what I help people with who own it and fulfill the dream of owning one for those who
        don't . Enthusiast to learn latest web technologies ,currently seeking an internship to get the taste of real corporate world.
        <div><strong>-Shivraj Thapliyal</strong></div>
      </div>
    </div>
    // <div className='inline-flex'>
    //   <div className='h-96 w-32 flex items-center justify-center bg-slate-600 '> hii</div>
    //   <div className='h-96 w-32 bg-red-900'> bye</div>
    // </div>
  )
}
