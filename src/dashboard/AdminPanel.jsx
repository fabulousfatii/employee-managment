import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../context/Authprovider'
import { getlocalstorage, setlocalstorage } from '../Localstorage/Localstorage'

function AdminPanel() {

    // useEffect(()=>{
    //     setlocalstorage()
    //   getlocalstorage()  
    //   console.log("changedddd");
      
    // },[])
    // console.log("chaged");
    
    const data = useContext(Authcontext)
    const [formData, setFormData] = useState({
        taskTitle: '',
        taskDate: '',
        assignedTo: '',
        category: '',
        description: ''
    })

    const handleChange=(e)=>{
    setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(e);
        
        const newtask= {
            active:false,
            category: formData.category,
            completed:false,
            failed:false,
            newTask:true,
            taskDate:formData.taskDate,
            taskDescription:formData.description,
            taskTitle:formData.taskTitle,
            email:formData.assignedTo
        }
        console.log("newtask",newtask);

        const updatedtask= data.employee.map((e)=>{
           if (e.email== formData.assignedTo){
            console.log(e);
            return{
                ...e,
                taskNumbers:{
                    ...e.taskNumbers,
                    newTask: e.taskNumbers.newTask +1,
                }
                ,tasks:[ 
                    ...e.tasks,
                    newtask
                 ]
            }
            
           }
           return e
        })

        localStorage.setItem("data",JSON.stringify(updatedtask))
        getlocalstorage()
        

        setFormData({
                    taskTitle: '',
                    taskDate: '',
                    assignedTo: '',
                    category: '',
                    description: ''
                })

        window.location.reload()        
        
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        window.location.reload();
    }

    return (
        <div className='w-full h-full p-5'>
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-bold text-yellow-400'>Create New Task</h1>
                <button 
                    onClick={handleLogout}
                    className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                >
                    Logout
                </button>
            </div>
            <div className='w-full max-w-5xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg'>
                <form onSubmit={handleSubmit} className='flex gap-6'>
                    <div className='flex-1 space-y-4'>
                        <div>
                            <label className='block text-white mb-2'>Task Title</label>
                            <input 
                                type="text"
                                name="taskTitle"
                                value={formData.taskTitle}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-700 text-white'
                                placeholder='Enter task title'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-white mb-2'>Due Date</label>
                            <input 
                                type="date"
                                name="taskDate"
                                value={formData.taskDate}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-700 text-white'
                            />
                        </div>

                        <div>
                            <label className='block text-white mb-2'>Assign To</label>
                            <select 
                                name="assignedTo"
                                value={formData.assignedTo}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-700 text-white'
                            >
                                <option value="">Select Employee</option>
                                {data?.employee?.map((emp, index) => (
                                    <option key={index} value={emp.email}>{emp.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className='block text-white mb-2'>Category</label>
                            <select 
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className='w-full p-2 rounded-lg bg-gray-700 text-white'
                            >
                                <option value="">Select Category</option>
                                <option value="development">Development</option>
                                <option value="design">Design</option>
                                <option value="marketing">Marketing</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button 
                            type="submit"
                            className='w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors'
                        >
                            Create Task
                        </button>
                    </div>

                    <div className='flex-1'>
                        <label className='block text-white mb-2'>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className='w-full p-2 rounded-lg bg-gray-700 text-white h-full'
                            placeholder='Enter task description'
                        ></textarea>
                    </div>
                </form>
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl font-bold text-yellow-400 mb-4'>Employee Tasks</h2>
                <div className='space-y-4'>
                    {data?.employee?.map((employee, index) => (
                        <div key={index} className='w-full p-4 bg-gray-800 rounded-lg'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-xl font-bold text-white'>{employee.name}</h3>
                                <span className='text-gray-400'>Active Tasks: {employee.taskNumbers.active}</span>
                            </div>
                            <div className='mt-2'>
                                {employee.tasks.map((task, taskIndex) => (
                                    <div key={taskIndex} className='mt-2 p-2 bg-gray-700 rounded'>
                                        <p className='text-white'>{task.taskTitle}</p>
                                        <p className='text-sm text-gray-400'>Due: {task.taskDate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
