import React from 'react'

const CardFront = ({cardNumber, name, date, month, className}) => {
  return (
    <div className={`absolute ${className}`} >
        <img src="/bg-card-front.png" />
        <img 
            className='absolute left-6 top-6'
        src='/card-logo.svg'/>

        <p className='absolute left-6 top-28 text-2xl text-white'>{`${cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}`}</p>
        <p className='absolute bottom-6 left-6 text-white text-md uppercase'>{`${name === '' ? 'Jane Appleseed' : name}`}</p>
        <p className='absolute bottom-6 right-6 text-white text-md'>{`${date === '' ? '00' : date}/${month === '' ? '00' : month}`}</p>

        
    </div>
  )
}

export default CardFront