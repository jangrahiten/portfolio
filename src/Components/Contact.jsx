import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-400 pb-4'>
      <h2 className='my-10 text-center text-4xl font-bold drop-shadow-md'>Get In Touch</h2>
      <div className='text-center tracking-tighter text-xl font-bold'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.email}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
      </div>
    </div>
  )
}

export default Contact
