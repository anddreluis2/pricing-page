import { Header } from "./components/Header/index"
import { Cards } from "./components/Cards/Index"
import React, { useState } from 'react'


function App() {
  const [subscription, setSubscription] = useState<boolean | undefined>(false)

  const toggleSwitch = (value: any) => {
    setSubscription(value)
  }

  return (
    <div>
      <Header
        subscription={subscription}
        setSubscription={setSubscription}
        toggleSwitch={toggleSwitch}
      />
      <Cards
        subscription={subscription}
      />
    </div>
  )
}
export default App