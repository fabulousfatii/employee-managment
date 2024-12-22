import React from 'react'

function Aceptedtask({data , oncomplete,onfailed}) {
    return (
        <div className='flex-shrink-0 w-72 h-72 bg-yellow-600 rounded-lg p-4 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-xl font-bold text-white mb-2'>Accepted</h2>
                        <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskTitle}</h2>
                        <p className='text-white'>{data?.taskDescription}</p>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={oncomplete}  className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>Completed</button>
                        <button onClick={onfailed} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Failed</button>
                    </div>
                </div>
    )
}

export default Aceptedtask
