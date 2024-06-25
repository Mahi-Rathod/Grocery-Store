import React from 'react'

function Button({
    buttonText,
    type = "button",
    bgColor="bg-orange-600",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button
        className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:bg-gradient-to-r from-pink-700 font-bold font-mono`} {...props}
    >{buttonText}</button>
  )
}

export default Button