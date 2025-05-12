import React, { useState, useRef }from 'react'
import Button from "../reuseables/Button";
import authSideImage from "/Images/authSideImage.svg";
import backgroundImage from "/Images/backgroundImage.svg";
const Otp = () => {
    const inputsRef = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <>

          <div className='flex justify-evenly items-center'
                style={{ backgroundImage: `url(${backgroundImage})` }}
          >
          <div className='w-[500px]  border border-gray-500 p-10'>
            <h1 className='text-center text-4xl font-bold mb-1'>Recover your password</h1>
        <p className='text-center mb-1'>Please enter the four digit code sent to your email</p>
            <form className=' max-w-[600px]'>
                <div  className='flex justify-center gap-2 mb-5'>
                {Array.from({ length: 4}, (_, i) => (
                    <input
                    key={i}
                    onPaste={(e) => e.preventDefault()}
                     type="text"
                    name={`otp-${i}`}
                    maxLength={1}
                    ref={(el) => (inputsRef.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-10 h-11 rounded-lg mt-6 mb-2 ml-1 border border-[#6fcf9780] bg-white outline-none text-center"
                    value={otp[i]}
                     />
                ))}
                </div>
            <Button type='submit'className='w-full py-3 rounded-full'>Send</Button>

            </form>
            </div>
            <div>
                    <img src={authSideImage} className='h-[500px]' alt="auth Side Image" />
                  </div>
            </div>
    </>
  )
}

export default Otp
