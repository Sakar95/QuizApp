import React from 'react'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faHouse,faListUl,faEye,faShareNodes,faFilePdf,faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
export default function ResultBottom() {
    const navigate = useNavigate()
  return (
    <div className="absolute bottom-12 w-64 left-1/2 transform -translate-x-1/2 p-6 shadow-md">
    {/* <div className='flex justify-between  pb-2'>
      <div className='text-yellow-500 flex flex-col item-center cursor-pointer' onClick={()=>navigate("/")}>
      <FontAwesomeIcon icon={faHouse} size="xl"  /><p className='text-xs text-black'>Home</p>
      </div> 
      <div className='text-yellow-500 flex flex-col item-center cursor-pointer' onClick={()=>navigate("/leaderboard")}>
      <FontAwesomeIcon icon={faListUl} size="xl"/><p className='text-xs text-black'>Leader Board</p>
      </div>
      <div className='text-yellow-500 flex flex-col item-center'>
      <FontAwesomeIcon icon={faEye} size="xl" /> <p className='text-xs text-black'>Review</p>
      </div>
    </div>
    <div className='flex justify-between my-8'>
    <div className='text-yellow-500 flex flex-col item-center'>
      <FontAwesomeIcon icon={faShareNodes}  size="xl" /><p className='text-xs text-black'>Share</p>
      </div>
      <div className='text-yellow-500 flex flex-col item-center'>
      <FontAwesomeIcon icon={faFilePdf}  size="xl" /><p className='text-xs text-black'>Generate Pdf</p>
      </div>
      <div className='text-yellow-500 flex flex-col item-center'>
      <FontAwesomeIcon icon={faArrowRotateLeft}  size="xl" /> <p className='text-xs text-black'>Try Again</p>
      </div>
    </div> */}
    <button className='border-2 bg-reg-400 rounded-lg'>Play Again</button>

  </div>
  )
}
