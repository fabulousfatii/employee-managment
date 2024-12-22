import { useState,useEffect, useContext } from 'react'
import Login from './components/Login'
import EmployeePanel from './dashboard/EmployeePanel'
import AdminPanel from './dashboard/AdminPanel'

import { getlocalstorage, setlocalstorage } from './Localstorage/Localstorage'
import { Authcontext } from './context/Authprovider'

function App() {
 const [user,setuser]=useState(null)
 const [isloggedin,setisloggedin]=useState(null)
 const [loggeduserdata,setloggeduserdata]= useState(null)
 const data = useContext(Authcontext)
 console.log(data);
 

 
useEffect(()=>{
    
    const loggedin= localStorage.getItem("loggedin")
    console.log("logged");
    if (loggedin) {
      console.log("logged");
      
      const userdata = JSON.parse(loggedin)
      setuser(userdata.role)
      //console.log(userdata.role);
      setloggeduserdata(userdata.data)
    }
},[user,data])  

console.log(loggeduserdata);

  const handlelogin =(email,password)=>{
  
    if(email === "admin@example.com" && password=== "123"){
      setuser("admin")
      localStorage.setItem("loggedin",JSON.stringify({role:"admin"}))
    } else if (data)  {
      const employee =data.employee.find((e)=> e.email === email && e.password === password)
      
      if(employee){
        setuser("user")
        setisloggedin(employee)
      localStorage.setItem("loggedin",JSON.stringify({role:"user",data:employee}))
      }
    }
    else{
      alert("invalid please try again")
    }

  }
  
  
  //console.log(isloggedin);
console.log(user);


  return (
  <main className='w-full h-full'>
   {!user ?  <Login handlelogin={handlelogin}/> : ""}

    {user === "user" ? <EmployeePanel data={loggeduserdata}/> : user === "admin" ? <AdminPanel /> : null}
    
    
  </main>
  )
}

export default App
