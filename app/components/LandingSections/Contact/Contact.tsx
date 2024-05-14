"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState('');
    const cleanEmailInput = () => setEmail('');
  
    const handleSubmit = async (event: any) => {
      event.preventDefault();
  
      // const { error } = 
      //   await supabase
      //     .from('Emails')
      //     .insert(
      //       { email }
      //     );
  
      // error === null
      //   ? alert('Thank you for subscribing to our newsletter!')
      //   : alert('An error occurred. Please try again.')
  
      cleanEmailInput();
    };
  
    const FORM_STYLES = `w-[100%]
    mb-4
    py-4
    px-4 
    mr-auto 
    bg-[#44444400] 
    border 
    border-solid 
    border-[#5b5b5b] 
    rounded-[6px]
    flex 
    flex-col
    sm:flex-row
    justify-between`
    const INPUT_STYLES = `p-3
    bg-[#3d3d3d] 
  
    outline-none
    border
    border-solid
    border-[transparent]
    focus:border 
    focus:border-solid
    focus:border-[#d1da92]
    transition
    duration-350 inline rounded-[6px]`
    const BUTTON_STYLES = `p-2
  
    bg-[#d1da92]
    text-[#000]
    hover:cursor-pointer
    hover:bg-[#cfcfcf]
    transition
    duration-350 mt-6 sm:mt-0 sm:ml-6 rounded-[6px] font-bold`
  
  return (
    <section className="mt-24">
        <h1 className="font-bold text-[36px] mb-2">Join to our newsletter</h1>

        <form
          className={FORM_STYLES}
          onSubmit={handleSubmit}>
          <input
            className={INPUT_STYLES}
            type="email"
            value={email}
            placeholder='admin@example.com'
            onChange={e => setEmail(e.target.value)}
            required />
          <button
            className={BUTTON_STYLES}
            type="submit"
          >Subscribe</button>
        </form>
      </section>
  )
}

export default Contact