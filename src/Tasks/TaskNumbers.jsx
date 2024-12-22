import React from 'react'

function TaskNumbers({data}) {
    return (
        <div className='w-full h-full grid grid-cols-4 gap-4 p-4 bg-gray-800 rounded-lg'>
        <div className='h-36 bg-blue-700 rounded-lg flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskNumbers.newTask}</h2>
            <h2 className='text-2xl font-bold text-white mb-2'>New task</h2>
        </div>
        <div className='h-36 bg-green-500 rounded-lg flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskNumbers.completed}</h2>
        <h2 className='text-2xl font-bold text-white mb-2'>completed</h2>
        </div>
        <div className='h-36 bg-yellow-500 rounded-lg flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskNumbers.active}</h2>
        <h2 className='text-2xl font-bold text-white mb-2'>accepted</h2>
        </div>
        <div className='h-36 bg-rose-800 rounded-lg flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskNumbers.failed}</h2>
        <h2 className='text-2xl font-bold text-white mb-2'>failed</h2>
        </div>
    </div>
    )
}

export default TaskNumbers
