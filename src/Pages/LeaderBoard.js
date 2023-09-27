import React from 'react';
import { useQuizContext } from '../Context/useContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function LeaderBoard() {
    const navigate = useNavigate()
  return (
    <>
    
    
    <div className="w-screen max-w-sm bg-yellow-400 h-96 rounded-3xl relative flex">
  <div className='absolute left-6 top-8 cursor-pointer' onClick={() => navigate("/result")}>
    <FontAwesomeIcon icon={faAngleLeft} size='2xl' color='white' />
  </div>
  
  {/* Three vertical boxes for positions */}
  <div className="absolute bottom-24  left-1/2 transform -translate-x-1/2 flex space-x-4  ">
    <div className="w-12 h-12 me-2 bg-blue-700 border-4 border-blue-900 mt-8 rounded-full flex items-center justify-center shadow-lg text-white">2nd</div>
    <div className="w-12 h-12  bg-blue-700 border-4 border-blue-900  rounded-full  flex items-center justify-center shadow-lg text-white">1st</div>
    <div className="w-12 h-12  bg-blue-700 border-4 border-blue-900  rounded-full mt-12 flex items-center justify-center shadow-l text-white">3rd</div>
  </div>
  <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2 flex space-x-4  ">
    <div className="w-16 h-20 bg-orange-700 mt-8  flex items-center justify-center shadow-lg text-white">250pts</div>
    <div className="w-16 h-28 bg-orange-700  flex items-center justify-center shadow-lg text-white">300pts</div>
    <div className="w-16 h-16 bg-orange-700  mt-12 flex items-center justify-center shadow-l text-white">270pts</div>
  </div>

</div>

<div className='absolute  top-96 w-screen max-w-sm mt-8'>
    <div className='flex justify-between px-8'>
       
        <div className=''>
            4
        </div>
        <div className='h-8 w-8 rounded-full bg-yellow-500 border-2 border-yellow-800' >
            
        </div>
        <div className='w-8' >
            Alex
        </div>
        <div className='h-8 w-16 rounded-full bg-yellow-800 text-white pl-1 pt-1' >
            240 PTS
        </div>
    </div>
    <hr  className='mt-4'/>
</div>
<div className='absolute  bottom-52 w-screen max-w-sm mt-8'>
    <div className='flex justify-between px-8'>
       
        <div className=''>
            5
        </div>
        <div className='h-8 w-8 rounded-full bg-yellow-500 border-2 border-yellow-800' >
            
        </div>
        <div className='w-8' >
            Harry
        </div>
        <div className='h-8 w-16 rounded-full bg-yellow-800 text-white pl-1 pt-1' >
            200 PTS
        </div>
    </div>
    <hr  className='mt-4'/>
</div>
<div className='absolute  bottom-36 w-screen max-w-sm mt-8'>
    <div className='flex justify-between px-8'>
       
        <div className=''>
            6
        </div>
        <div className='h-8 w-8 rounded-full bg-yellow-500 border-2 border-yellow-800' >
            
        </div>
        <div className='w-8' >
            XYZ...
        </div>
        <div className='h-8 w-16 rounded-full bg-yellow-800 text-white pl-1 pt-1' >
            190 PTS
        </div>
    </div>
    <hr  className='mt-4'/>
</div>
<div className='absolute  bottom-20 w-screen max-w-sm mt-8'>
    <div className='flex justify-between px-8'>
       
        <div className=''>
            7
        </div>
        <div className='h-8 w-8 rounded-full bg-yellow-500 border-2 border-yellow-800' >
            
        </div>
        <div className='w-8' >
            New
        </div>
        <div className='h-8 w-16 rounded-full bg-yellow-800 text-white pl-1 pt-1' >
            180 PTS
        </div>
    </div>
    <hr  className='mt-4'/>
</div>
</>
  )
}
