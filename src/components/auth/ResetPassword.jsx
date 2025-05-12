import React, { useState } from 'react'
import Button from "../reuseables/Button";
import authSideImage from "/Images/authSideImage.svg";
import backgroundImage from "/Images/backgroundImage.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

const ResetPassword = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
  return (
    <>
      <div className='flex justify-evenly items-center'
            style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      <div className='w-[500px]  border border-gray-500 p-10'>
        <h1 className='text-center text-3xl font-bold mb-8'>Reset your password</h1>
        <form className='flex flex-col gap-4 max-w-[600px]'>
            <div className="flex flex-col mb-2">
                          <label
                            htmlFor="password"
                            className="mb-1 font-medium text-gray-400"
                          >
                            Password
                          </label>
                          <div className=" flex items-center justify-between p-3 border border-gray-300 rounded-full bg-[#3D284C]">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              id="password"
                              // disabled={loading}
                              placeholder="must be greeater than eight"
                              className="w-full rounded-full bg-[3D284C] focus:outline-none focus:ring-0 focus:ring-blue-400 "
                              // value={password}
                              // onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <Icon
                              onClick={() => setShowPassword((prev) => !prev)}
                              icon={showPassword ? "mdi:eye-off" : "mdi-eye"}
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
            <div className="flex flex-col mb-2">
                          <label
                            htmlFor="confirm-password"
                            className="mb-1 font-medium text-gray-400"
                          >
                            Confirm password
                          </label>
                          <div className=" flex items-center justify-between p-3 border border-gray-300 rounded-full bg-[#3D284C]">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirm-password"
                              id="confirm-password"
                              // disabled={loading}
                              placeholder="must be greeater than eight"
                              className="w-full rounded-full bg-[3D284C] focus:outline-none focus:ring-0 focus:ring-blue-400 "
                              // value={password}
                              // onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <Icon
                              onClick={() => setShowConfirmPassword((prev) => !prev)}
                              icon={showConfirmPassword ? "mdi:eye-off" : "mdi-eye"}
                              width={24}
                              height={24}
                            />
                          </div>
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

export default ResetPassword
