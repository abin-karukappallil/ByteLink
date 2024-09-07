import React, { useState } from 'react'
import { Description } from '@/components/type';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useNavigate } from 'react-router-dom';

const Landing = () => {
const [longurl,setLongurl] = useState();
const navigate = useNavigate();

const handleShort = (e)=>{
  e.preventDefault();
  if(longurl){
    navigate(`/auth?newUrl=${longurl}`)
  }
}

  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className='min-h-20 p-2 flex justify-center flex-col mb-0'>
          <Description />
        </div>
        <form className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8' onSubmit={handleShort}>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center  sm:w-96">
            <Input 
              id="longUrl"
              value={longurl}
              placeholder="https://example.com/very/long/url" 
              className="w-full rounded-xl" 
              onChange={(e)=> setLongurl(e.target.value)}
              />
            <Button type="submit" className="w-full sm:w-36 bg-red-500 rounded-full">Short It</Button>
          </div>
         
        </form>
        <div className="flex justify-center items-center">
          <Accordion className='w-full max-w-md' type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

export default Landing;