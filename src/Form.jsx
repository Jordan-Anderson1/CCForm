import React, { useEffect } from 'react'

const Form = ({name, setName, cardNumber, setCardNumber, date, setDate, month, setMonth, cvc, setCvc, submitted, setSubmitted}) => {


    const handleInput = (e) => {
        if (e.target.value.length > 2) {
            e.target.value = e.target.value.slice(0,2)
        }
    }

  return (
    <>
    
    <div className='flex flex-col absolute xl:left-1/2 xl:top-[280px] justify-center xl:ml-[100px] top-[450px] mx-8'>

        <h1 className='text-xl mb-2'>CARDHOLDER NAME</h1>
        <input
            className='border border-gray-500 md:w-[480px] w-[400px] h-10 rounded-md p-2 text-xl mb-4' 
            type="text"
            placeholder='e.g. Jane Appleseed'
            value={name}
            onChange={(e)=> setName(e.target.value)} />

        <h1 className='text-xl mb-2'>CARD NUMBER</h1>
        <input 
            className='border border-gray-500 md:w-[480px] w-[400px] h-10 rounded-md p-2 text-xl mb-4 ' 
            type="number"
            placeholder='e.g. 1234 5678 9123 0000'
            value={cardNumber}
            onChange={(e) => {
                let value = e.target.value;
                if(value.length > 16){
                    value = value.slice(0, 16);
                }
                setCardNumber(value);
                }} />

            <div className='flex flex-row mb-2'>
                <h1 className='text-xl'>EXP. DATE (MM/YY)</h1>
                <h1 className='absolute md:left-[240px] left-[200px]  text-xl'>CVC</h1>
            </div>

        

        <div className='flex flex-row mb-4'>
            <input 
                className='border border-gray-500 w-[80px] md:w-[100px] h-10 rounded-md p-2 text-xl  ' 
                type="number"
                placeholder='MM'
                max='31' 
                value={date}
                onChange={(e) => {
                    handleInput(e);
                    setDate(e.target.value)
                }}/>
            
            <input 
                className='border border-gray-500 md:w-[100px] w-[80px] h-10 rounded-md p-2 ml-2 text-xl'
                type="number"
                placeholder='YY'
                max='12' 
                value={month}
                onChange={(e) => {
                    handleInput(e);
                    setMonth(e.target.value)
                }}/>

            <input 
                className='border border-gray-500 md:w-[240px] w-[200px] h-10 rounded-md p-4 absolute left-[200px] md:left-[240px] text-xl' 
                type="text" 
                placeholder='e.g 123'
                max='999'
                value={cvc}
                onChange={(e) => {
                    if (e.target.value.length > 3) {
                        e.target.value = e.target.value.slice(0,3)
                    }
                    setCvc(e.target.value);
            }}/>

        </div>
        <button 
            onClick={()=> {
                setSubmitted(true);
                console.log({ name, cardNumber, date, month, cvc });
            }}
            className='bg-[#1F0C2E] p-2 text-white rounded-md'>
            Confirm
            </button>
        </div>

    </>
    
  )
}

export default Form