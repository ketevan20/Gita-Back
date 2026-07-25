"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { signUpSchema } from '../validators/sign-up';
import axios from 'axios';
import Link from 'next/link';

const signUp = () => {
  const [error, setError] = useState("")
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema)
  })

  async function onSubmit(data: any) {
    try {
      setError("")
      const res = await axios.post("http://localhost:3030/auth/sign-up", data)
      if (res.status === 200) {
        router.push("/sign-in")
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='h-screen flex items-center justify-center text-white'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[40%] bg-gray-950 p-6 rounded-2xl flex flex-col gap-2'>
        <input type="text" placeholder='FullName' className='border rounded-xl pl-4 py-4' {...register("fullName")} />
        <p className='text-[red]'>{errors.fullName?.message}</p>

        <input type="text" placeholder='Email' className='border rounded-xl pl-4 py-4' {...register("email")} />
        <p className='text-[red]'>{errors.email?.message}</p>

        <input type="password" placeholder='password' className='border rounded-xl pl-4 py-4' {...register("password")} />
        <p className='text-[red]'>{errors.password?.message}</p>

        <button type='submit' className='bg-white text-black rounded-xl p-3 cursor-pointer'>Sign Up</button>

        <div className='flex justify-center gap-4'>
          <span>Do you have account?</span>
          <Link className='text-blue-600' href={"/sign-in"}>Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default signUp