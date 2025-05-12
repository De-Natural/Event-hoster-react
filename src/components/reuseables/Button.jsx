  import React from 'react'
  import { Icon } from '@iconify/react/dist/iconify.js'
  const Button = ({ children, isLoading = false, disabled, className = "", type = "button", ...props }) => {
      return (
        <button
          disabled={isLoading || disabled}
className={`flex justify-center font-medium bg-black cursor-pointer text-white disabled:opacity-95 disabled:cursor-not-allowed transition-all duration-200 ${className}`}
          {...props}
          type={type}
        >
          {isLoading ? (
            <Icon icon="svg-spinners:blocks-shuffle-3" width="24" height="24"/>
          ) : (
            children
          )}
        </button>
      );
    };

  export default Button

  // disabled: stops the buttons functionality
  // ${className}: Allows users to add extra styles when using the component.
  // children: The content inside the button (like text or an icon).
  // isLoading: A boolean that, if true, shows a loading spinner.
  // disabled: Disables the button if true.
  // type: HTML button type (button, submit, or reset) – defaults to "button".
  // className: Allows additional CSS classes to be passed in.
  // ...props: Collects any extra props (like onClick, id, name) and spreads them on the <button>.
  // disabled={isLoading || disabled} -> The button will be disabled if either isLoading is true or disabled is true.

