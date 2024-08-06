"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {axios} from 'axios'

export default function SignUpPage(params:any) {
  const [user, setUser] = useState({
    email:"",
    password: "",
    userName: ""
})
const onSignUp = async (params:any) => {
  
}
return(
  <div className='flex flex-col items-center justify-center min-h-screen py-2'>
    <h1 className='font-extrabold'>Signup</h1>
    <hr />
    <label htmlFor="username">User Name</label>
    <input
    id='username'
    type='text'
    value={user.userName}
    onChange={(e)=>{setUser({...user, userName:e.target.value})}}
    placeholder='User Name'
    />
    <label htmlFor="email">Email</label>
    <input
    id='email'
    type='email'
    value={user.email}
    onChange={(e)=>{setUser({...user, email:e.target.value})}}
    placeholder='Enter your email'
    />
    <label htmlFor="password">Password</label>
    <input
    id='password'
    type='password'
    value={user.password}
    onChange={(e)=>{setUser({...user, password:e.target.value})}}
    placeholder='Enter your password'
    />
    <button onClick={onSignUp} className='p-2 border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-600'>Sign Up</button>
    <Link href="/login">Visit login</Link>
  </div>
)
  
}

 
