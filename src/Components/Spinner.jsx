import React from 'react'
import "./spinner.css";

export default function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'></div>
        <p className='bg-purple-900 text-lg font-semibold'>loading...</p>
    </div>
  )
}
