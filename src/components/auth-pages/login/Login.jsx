import React from 'react'
import { CustomButton } from '../../CustomButton'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='w-full h-screen bg-[url(/loginPage.png)] bg-cover md:bg-contain flex items-center justify-center'>
        <main className='h-[550px] w-4/5 flex-col md:flex-row flex bg-[rgba(52,16,49,0.6)] p-4'>
          <section className='h-96 w-2/4 hidden md:flex flex-col items-start p-6 justify-around'>
            <h1 className='text-white text-4xl font-bold'>H1</h1>
            <h1 className='text-white text-4xl font-bold'>Welcome</h1>
           <p className='text-white'> kindly SignUp by entering in your correct details</p>
          </section>
          <form className='h-full w-full md:w-2/4 p-4 flex flex-col justify-around text-white'>
            <h2 className='text-2xl font-medium mx-auto'>Login</h2>

            <article className='h-16 w-full flex flex-col gap-2 px-2'>
              <label className='ml-2' htmlFor="">Username</label>
              <input type="text" placeholder='your name' className='h-12 w-full border-none outline-none py-3 px-2 rounded-4xl bg-[#ffffff25]' />
            </article>


            <article className='h-16 w-full flex flex-col gap-2 px-2'>
              <label className='ml-2' htmlFor="">Password</label>
              <input type="password" name="password" placeholder='password' className='h-12 w-full border-none outline-none py-3 px-2 rounded-4xl bg-[#ffffff25]' />
            </article>

            <CustomButton name='Login' extendedStyles={'px-2 py-3 rounded-3xl mt-6'} />
            <p className='text-base md:text-sm mx-auto'>Don't have an account? <Link to={'/auth-pages'}>Sign up</Link></p>
          </form>
        </main>
    </div>
  )
}
