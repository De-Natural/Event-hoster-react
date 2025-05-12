import React, { useState } from "react";
import Button from "../reuseables/Button";
import signUpBackgroundImage from "/Images/signUpBackgroundImage.svg";
import backgroundImage from "/Images/backgroundImage.svg";

import { Icon } from "@iconify/react/dist/iconify.js";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="gap-2 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${signUpBackgroundImage})` }}
    >
      <div
        className="mx-auto flex justify-center gap-20 p-10 bg-cover bg-center h-fit w-fit"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-300">Hi Welcome!</h1>
          <p className="text-lg pt-2 text-gray-300">
            Kindly sign up by entering your correct details
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-4 max-w-[600px] border border-gray-500 p-10">
            <div className="w-[350px] flex flex-col mb-2">
              <label
                htmlFor="username"
                className="mb-1 font-medium text-gray-400"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Spark042"
                className="w-full p-3 border border-gray-300 rounded-full bg-[3D284C] focus:outline-none focus:ring-0 focus:ring-blue-400 "
                required
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="mb-1 font-medium text-gray-400">
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

            <Button type="submit" className="py-3 rounded-3xl">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
