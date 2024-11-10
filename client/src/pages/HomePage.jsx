import React from 'react'
import Header from '../components/Lander/Header'
import Footer from '../components/Lander/Footer'
import Content from '../components/Lander/Content'

const HomePage = () => {
  return (
    <div className='bg-slate-900 min-h-screen p-4 flex-col justify-between items-center'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default HomePage
