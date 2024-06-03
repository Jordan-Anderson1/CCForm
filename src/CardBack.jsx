import React from 'react'

const CardBack = ({cvc, className}) => {
  return (
    <div className={`absolute ${className}`} >
        <img src="/bg-card-back.png"/>
        <p className='absolute bottom-[95px] right-[50px]'>{`${cvc === '' ? '000' : cvc}`}</p>

    </div>
  )
}

export default CardBack