import React, { useContext, useState } from 'react'
import { Authcontext } from '../context/Authprovider'
import { getlocalstorage } from '../Localstorage/Localstorage'

function Newtask({data,onaccept}) {
    const {onclick,setonclick}= useState(false)
    
    return (
        <div className='flex-shrink-0 w-72 h-72 bg-blue-700 rounded-lg p-4 flex flex-col justify-between'>
                    <div>
                        <h2 className='text-xl font-bold text-white mb-2'>New task</h2>
                        <h2 className='text-2xl font-bold text-white mb-2'>{data?.taskTitle}</h2>
                        <p className='text-white'>{data?.taskDescription}</p>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={onaccept} className={`px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 ${data?.active===true? "hidden":""}`}>accept</button>
                        
                    </div>
                </div>
    )
}

export default Newtask
