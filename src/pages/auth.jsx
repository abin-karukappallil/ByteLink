import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Auth = () => {

  const [searchParams] = useSearchParams()

  return (
    <div className='mt-36 mb-7 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold text-white'>
        {searchParams.get("newUrl")?"Hold my beer and login first":"Login / SignUp"}
        </h1>
    </div>
  )
}

export default Auth;
