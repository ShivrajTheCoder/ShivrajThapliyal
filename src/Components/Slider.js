import React, { useState } from 'react'

import pdata from '../data';

export default function Slider() {
  let [i, updateurl] = useState(0);

  return (
    <div className='flex flex-col justify-center h-auto m-8'>
      <div >
        <div className='flex justify-center items-center h-64'>
          <span><button onClick={() => {
            updateurl(--i);
            updateurl((i < 0) ? i + pdata.projects.length : i)
          }}><img src='./icons/left.png' /></button></span>
          <img className='h-64' src={pdata.projects[i].image} />
          <span><button onClick={() => {
            updateurl(++i);
            updateurl((i > pdata.projects.length - 1) ? i - pdata.projects.length : i)
          }}
          ><img src='./icons/right.png' /></button></span>
         
        </div>

      </div>
    </div>
  )
}
