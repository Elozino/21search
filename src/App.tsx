import { useState } from 'react'
import { Footer, Header, PayBills, PaymentRow, PaymentTools, SendFundsBanner, TransactOnTheGo } from './components'

function App() {
  const [isIndividual, setIsIndividual] = useState(true)
  return (
    <div className='font-poppins'>
      <Header
        isIndividual={isIndividual}
        setIsIndividual={setIsIndividual}
      />
      <PaymentTools
        isIndividual={isIndividual}
      />
      <br />
      <br />
      {isIndividual ?
        <PayBills /> :
        <PaymentRow />
      }
      {isIndividual && <>
        <br />
        <br />
        <TransactOnTheGo />
      </>}
      <br />
      <br />
      <SendFundsBanner />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default App
