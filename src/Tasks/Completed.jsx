import React from 'react'

function Completed({data}) {
    return (
        <div className='flex-shrink-0 w-72 h-72 bg-green-500 rounded-lg p-4'>
                    <h2 className='text-xl font-bold text-white mb-2'>completed</h2>
                    <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskTitle}</h2>
                    <p className='text-white'>{data?.taskDescription}</p>
                </div>
    )
}

export default Completed
