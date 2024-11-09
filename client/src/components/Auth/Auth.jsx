import React from 'react'
import Login from './Login'
import OTP from './OTP'
import { useState } from 'react'

const Auth = () => {
    const [isLoginSubmit , setIsLoginSubmit ] = useState(false)

    const handelSubmit = ()=>{
        console.log("submitted")
        setIsLoginSubmit(true);
    }
  return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      {isLoginSubmit ? (
        <OTP />
    ):(
        <Login onSub = {handelSubmit}/>
    )}
    </div>
  )
}

export default Auth
