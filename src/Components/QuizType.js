import React from 'react'

export default function QuizType({name,icon}) {
  return (
    <div className="bg-white rounded-lg border-yellow-400 border-2 shadow-md">
        <p className='pl-1 text-sm'>{name}</p>
        <div className="bg-red p-2 px-4">
        {icon}
        </div>
    </div>
  )
}
