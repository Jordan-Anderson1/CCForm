import { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import Form from './Form'
import Thankyou from './Thankyou'
import './App.css'


function App() {

  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [cvc, setCvc] = useState('')
  const [submitted, setSubmitted] = useState(false);
  

  return (
    <>
    <div className='relative justify-center items-center flex-col flex xl:overflow-hidden min-h-screen'>

      <img 
        className='invisible xl:visible absolute top-0 left-0 h-screen'
        src='/bg-main-desktop.png'/>

      <img 
        src="/bg-main-mobile.png"
        className='xl:invisible absolute top-0 left-0 min-w-full max-h-[300px]' />


      <CardFront 
        name={name}
        cardNumber={cardNumber}
        date={date}
        month={month}
        className='xl:top-40 xl:left-40 top-44 self-center z-10 mr-16 ml-4 xl:mr-0 max-h-[215px] max-w-[387px]'
      />

      <CardBack 
        cvc={cvc}
        className='xl:top-[420px] xl:left-56 top-12 z-0 self-center ml-16 mr-6 xl:ml-0 max-h-[215px] max-w-[387px]'
      />
      
      {!submitted && 
      <Form 
        name={name}
        setName={setName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        date={date}
        setDate={setDate}
        month={month}
        setMonth={setMonth}
        cvc={cvc}
        setCvc={setCvc}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      }

      {submitted && <Thankyou 
        setSubmitted={setSubmitted}
        setName={setName}
        setCardNumber={setCardNumber}
        setDate={setDate}
        setMonth={setMonth}
        setCvc={setCvc}
        className='absolute md:left-1/2 md:top-[280px] justify-center md:ml-[100px] top-[450px] mx-8'
      />}
      


    </div>
      
    </>
  )
}

export default App
