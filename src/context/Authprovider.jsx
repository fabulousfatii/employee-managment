import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../Localstorage/Localstorage'

export const Authcontext = createContext()

function Authprovider({children}) {
    

    const [userdata,setuserdata]= useState(null)
    
    // setting the userdata 
    useEffect(()=>{
        const {employee,admin}= getlocalstorage()
        setuserdata({employee,admin})
        //setlocalstorage()
    },[])

     console.log("here",userdata);
     
    return (
        <div>
            <Authcontext.Provider value={userdata}>
                {children}
            </Authcontext.Provider>
        </div>
    )
}

export default Authprovider
