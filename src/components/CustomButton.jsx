import React from 'react'
import LoadingSpinner from './LoadingSpinner';

export const CustomButton = ({
    extendedStyles,
    name = "sign up",
    size = 'sm',
    className = "",
    btnClick,
    isLoading = false
}) => {
    const sizeMap = {
        sm: 'text-base leading-normal',
        md: 'text-xl leading-normal',
    }

    const sizeClasses = sizeMap[size];
  return (
    <button 
     onClick={btnClick}
     className={`${sizeClasses} ${className} ${extendedStyles} flex items-center cursor-pointer justify-center bg-[linear-gradient(to_right,rgb(235,160,22),rgb(239,104,55))] text-gray-100 font-bold transition-all duration-200 ease-linear`}
    >
     {isLoading ? <LoadingSpinner className="animate-spin" /> : name}
    </button>
  )
}
