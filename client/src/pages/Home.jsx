import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5'>
    Home
    <a className='text-blue-700 bold text-xl underline' href="/signin">Sign in</a>
    <a className='text-blue-700 bold text-xl underline' href="/signup">Sign up</a>
    </div>
  )
}

export default Home