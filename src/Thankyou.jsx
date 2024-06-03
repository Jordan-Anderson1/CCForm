import React from 'react'

const Thankyou = ({className, setSubmitted, setName, setCardNumber, setMonth, setDate, setCvc}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
        <img className='h-[100px] w-[100px]' src="./src/assets/icon-complete.svg" alt="" />
        <h1 className='text-4xl mt-2'>Thank you!</h1>
        <p className='text-xl mt-2'>We've added your card details</p>
        <button onClick={() => {
          setSubmitted(false);
          setName('');
          setCardNumber('');
          setMonth('');
          setDate('');
          setCvc('');
          
          }}className='bg-[#1F0C2E] p-2 text-white rounded-md text-xl w-[120%] mt-8'>Continue</button>
    </div>
  )
}

export default Thankyou