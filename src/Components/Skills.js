import React from 'react'
import pdata from '../data'
export default function Skills() {
    return (
        <div className='flex flex-wrap m-8 w-auto'>
            {pdata.skills.map((x) => (
                <button key={x} className='m-2 bg-indigo-500 text-white rounded-md p-2'>{x}</button>

            ))}
        </div>
    )
}
