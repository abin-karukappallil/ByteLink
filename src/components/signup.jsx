import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function signup() {
  return (
    <div>
        <Card>
                <CardHeader>
                    <CardTitle>SignUp</CardTitle>
                    <CardDescription>Create a new acount</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <label htmlFor="email" className='text-xl font-semibold'>Email</label>
                  <input className='bg-inherit border-1 h-full border-white border  focus:border-yellow-600 focus:border-4  p-1 rounded' type="text" />
                  <label htmlFor="password" className='text-xl font-semibold'>Password</label>
                  <input className='bg-inherit border-1 h-full border-white border p-1 rounded focus:border-yellow-600 focus:border-4 ' type="password" />
                  <button className='bg-inherit border rounded mt-4 w-52 mx-auto hover:bg-slate-400 hover:text-black '>Sign Up</button>
                </CardContent>
            </Card>
    </div>
  )
}

export default signup