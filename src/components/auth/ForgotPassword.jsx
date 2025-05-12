import React from 'react'
import Button from "../reuseables/Button";
import authSideImage from "/Images/authSideImage.svg";
import backgroundImage from "/Images/backgroundImage.svg";


const ForgotPassword = () => {
  return (
    <>
    <div className='flex justify-evenly items-center'
                style={{ backgroundImage: `url(${backgroundImage})` }}
    
    >
      <div className='w-[500px]  border border-gray-500 p-10'>
        <h1 className='text-center text-3xl font-bold mb-2'>Recover your password</h1>
        <p className='text-center mb-8'>Please enter your email</p>
        <form className='flex flex-col gap-4 max-w-[600px]'>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="mb-2 font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                // disabled={loading}
                placeholder="useremail@gmail.com"
                className=" w-full p-3 border border-gray-300 rounded-full bg-[3D284C] focus:outline-none focus:ring-0 focus:ring-blue-400"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type='submit'className='py-3 rounded-full'>Send</Button>
        </form>
      </div>
      <div>
        <img src={authSideImage} className='h-[500px]' alt="auth Side Image" />
      </div>
      </div>
    </>
  )
}

export default ForgotPassword
