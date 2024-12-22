import React, { useContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../Localstorage/Localstorage'
import { Authcontext } from '../context/Authprovider';
import TaskNumbers from '../Tasks/TaskNumbers';
import Newtask from '../Tasks/Newtask';
import Aceptedtask from '../Tasks/Aceptedtask';
import Completed from '../Tasks/Completed';
import Failedtask from '../Tasks/Failedtask';

function EmployeePanel({data}) {
     useEffect(()=>{
    //     setlocalstorage()
    //   getlocalstorage()  
    //   console.log("changeddddd");
    if (tasks===null) {
        window.location.reload()
    }
    },[])

    

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        window.location.reload();
    }

    const employees = useContext(Authcontext)
    const [alldata, setAlldata] = useState(employees)
    

    const [tasks, setTasks] = useState(data);
     // Add state for tasks
    // const acceptedhandle= (task)=>{
    //     //creating newtask that contains old task prperties with new changes
    //     const newtask= {
    //         ...task,
    //         active:true,
    //         newTask:false,
    //         completed:false,
    //     }
    //     console.log("newtask",newtask);
        
    //     //removing that task from array and adding updated task
    //     const remove= data.tasks.map((e)=>  
    //         {if(e.taskTitle === task.taskTitle ){
    //             return newtask
    //         }
    //         else{ return e   }
    //     })
    //     console.log("remove",remove);
        
    //     const updatedtask= employees.employee.map((e)=>{
    //         if (e.email== task.email){
    //          //console.log(e);
    //          return{
    //              ...e,
    //              taskNumbers:{
    //                  ...e.taskNumbers,
    //                  active: e.taskNumbers.active +1,
    //                  newTask: e.taskNumbers.newTask -1,
    //              }
    //              ,tasks: 
    //                  remove,
    //          } }
    //         return e
    //      })
    //     console.log("updated",updatedtask);

    //     setTasks(updatedtask.find((e)=> 
    //         {  if (e.email === data.email) {
    //                 return e
    //             }
    //          }))
    //          console.log("tasks",tasks);
             
    //      localStorage.setItem("data",JSON.stringify(updatedtask))
    //      getlocalstorage()

    // }

console.log("data",employees);

         const updatedhandle = (task,status)=>{
            const updatedTask = { ...task, ...status };
            const updatedlist = tasks.tasks.map((e) => e.taskTitle === task.taskTitle ? updatedTask : e);
            console.log("updatedlist",updatedlist);
            

           const updatedemployee = alldata.employee.map((e) => {
            
            if(e.email === task.email)  {
                return  { 
                    ...e, 
                    taskNumbers:
                       updateTaskNumbers(e.taskNumbers, status.type), 
                    tasks:
                      updatedlist } 
                    }else{
                        return e
                    } })
              console.log("updatedtasks",updatedTask);
                console.log("updatedemployee",updatedemployee);
               
           setTasks(updatedemployee.find((e) => e.email === data.email));
           setAlldata({employee:updatedemployee})
           console.log("tasks",tasks);
              localStorage.setItem("data", JSON.stringify(updatedemployee));
                getlocalstorage();


    }

    const updateTaskNumbers = (taskNumbers, status) => {
        console.log("taskNumbers",taskNumbers);
        console.log("status",status);
        
        if (status === 'completed') {
            return { ...taskNumbers, active: taskNumbers.active === 0 ? 0 :taskNumbers.active -1, completed: taskNumbers.completed + 1 };
        }
        if (status === 'failed') {
            return { ...taskNumbers, active:taskNumbers.active === 0 ? 0 :taskNumbers.active -1, failed: taskNumbers.failed + 1 };
        }
        if (status === 'accepted') {
            return { ...taskNumbers, active: taskNumbers.active + 1, newTask: taskNumbers.newTask - 1 };
            }
     }
    
    return (
        <div className='w-full h-full p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold text-yellow-400'>Employee Panel</h1>
                <button 
                    onClick={handleLogout}
                    className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                >
                    Logout
                </button>
            </div>
            <h2 className='text-3xl font-bold text-white'>Hi {data?.name}  </h2>
            <TaskNumbers data={tasks}/>

            <div id='tasklist' className='w-full h-full bg-gray-800 rounded-lg overflow-x-auto flex gap-4 p-4'>
                {tasks?.tasks?.map((e,index)=>{
                    
                    if (e.newTask) {
                        return <Newtask data={e} onaccept={()=> updatedhandle(e,{type:"accepted",active:true,newTask:false})}  key={index}/> 
                      }
                    if (e.active) {
                       return <Aceptedtask data={e} oncomplete={()=> updatedhandle(e,{type:"completed",active:false,completed:true,newTask:false})} onfailed={()=>updatedhandle(e,{type:"failed",active:false,failed:true,newTask:false})} key={index} />    
                    }
                    if (e.completed) {
                       return <Completed data={e} key={index}/>
                    }
                    if (e.failed) {
                      return <Failedtask key={index}/> 
                    } })}
            </div>
        </div>
    )
}

export default EmployeePanel
