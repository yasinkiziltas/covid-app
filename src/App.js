import React, { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'

export default function App() {
  const [key, setKey] = useState(1)
  return (
    <>
      <Header onMenuChange={(key) => {
        setKey(key)

      }} />

      <div className='md:container md: mx-auto p-8 page-content'>
        {
          key === 1 &&
          <div>
            <Card />
          </div>
        }
      </div>



    </>
  )
}
