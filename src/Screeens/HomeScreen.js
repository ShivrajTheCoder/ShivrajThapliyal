import React from 'react'

import MyImage from '../Components/MyImage'
import { Link } from 'react-router-dom';
import Slider from '../Components/Slider'
import Skills from '../Components/Skills';

export default function HomeScreen() {
  return (
    <div className='container'>
       
        <MyImage/>
        <button className='font-serif underline text-xl mx-3'>Skills</button>
        <Skills/>
        <div>
            <Link to="/projects">
              <button className=' mx-3 font-serif underline text-xl'>Projects</button>
            </Link>
          </div>
          
        <Slider/>
      
    </div>
  )
}
