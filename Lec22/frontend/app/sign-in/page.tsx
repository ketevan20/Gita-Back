'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signInSchema } from '../validators/sign-in'
import { useRouter } from 'next/navigation'
import { setCookie } from "cookies-next"
import axios from 'axios'
import Link from 'next/link'

const signIn = () => {
  const router = useRouter()
  const [error, setError] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema)
  })

  async function onSubmit(data: any) {
    try {
      setError("")
      const res = await axios.post("http://localhost:3030/auth/sign-in", data)
      if (res.status === 200) {
        setCookie("accessToken", res.data.data, { maxAge: 60 * 60 })
        router.push("/dashboard")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='h-screen flex items-center justify-center text-white'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[40%] bg-gray-950 p-6 rounded-2xl flex flex-col gap-2'>
        <input type="text" placeholder='Email' className='border rounded-xl pl-4 py-4' {...register("email")} />
        <p className='text-red-600'>{errors.email?.message}</p>

        <input type="password" placeholder='password' className='border rounded-xl pl-4 py-4' {...register("password")} />
        <p className='text-red-600'>{errors.password?.message}</p>

        <button className='bg-white text-black rounded-xl py-3 cursor-pointer'>Sign In</button>

        <div className='flex justify-center gap-4'>
          <span>if you dont have account</span>
          <Link className='text-blue-600' href={"/sign-up"}>Sign up</Link>
        </div>

      </form>
    </div>
  )
}

export default signIn