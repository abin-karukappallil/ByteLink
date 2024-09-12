import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '@/components/login'
import Signup from '@/components/signup'

const Auth = () => {

  const [searchParams] = useSearchParams();
  let username = searchParams.get("username");
  console.log(username);


  return (
    <div className='mt-36 mb-7 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold text-white'>
        {searchParams.get("newUrl") ? "Hold my beer and login first" : "Login / SignUp"}
      </h1>

      <Tabs defaultValue="ogin" className="w-[400px]">
        <TabsList className="gride w-full grid-cols-2"> 
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login/>
        </TabsContent>
        <TabsContent value="signup">
         <Signup/>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default Auth;
