import React,{ useState, useEffect } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BeatLoader } from 'react-spinners';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Error from './error';
import * as Yup from 'yup';
import useFetch from '../hooks/use-fetch'


function login() {
    const [errors , setErrors] = useState([]);
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });

    const handleInputChnage = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

   const {data, error, loading, fn: fnLogin } = useFetch(login, form);
    useEffect(()=>{
        console.log(data);
        
        // if(error=== null){

        // }
    },[data, error])


    const handleLogin = async () => {
        setErrors([])
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email("Inavlid Email").required("Email is required"),
                password: Yup.string().min(6,"password must contain 6 characters").required("Password is required"),
            });
            await schema.validate(form,{abortEarly: false});
            await fnLogin();
        }
        catch(e){
         const newErrors = {}   ;
         e?.inner?.forEach((err) => {
            newErrors[err.path] = err.message;
         });
         setErrors(newErrors);
        }
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>SignIn into your account</CardDescription>
                   {error && <Error message={error.message} />}
                </CardHeader>
                <form>
                <CardContent className="flex flex-col gap-2">
                    <label htmlFor="email" className='text-xl font-semibold'>Email</label>

                    <Input onChange={handleInputChnage} name='email' placeholder='Enter Email' className='bg-inherit border-1 h-full border-white border ' type="text"  autoComplete="current-username"/>
                   {errors.email && <Error message={errors.email} />}
                    <label htmlFor="password" className='text-xl font-semibold'>Password</label>
                    <Input onChange={handleInputChnage} name='password' placeholder='Enter Password' className='bg-inherit border-1 h-full border-white border p-1 rounded  ' type="password"   autoComplete="current-password"/>
                    {errors.password && <Error message={errors.password} />}
                </CardContent>
                <CardFooter>
                    <Button onClick={handleLogin} className='bg-inherit border rounded mt-4 w-52 mx-auto hover:bg-slate-400 hover:text-black '>{loading ? <BeatLoader size={10} color='#36d7b7' /> : "Login"}</Button>
                </CardFooter>
                </form>
            </Card>

        </div>
    )
}

export default login