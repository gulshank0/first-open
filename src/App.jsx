import { useState } from 'react'

import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-3 ' > 
<RevenueCard title={"Amount pending"} amount={"93,456"} oderCount={13} />
</div>


    </>
  )
}

export default App
