
'use client'
import localFont from 'next/font/local';
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as Z from 'zod'
import emailjs from '@emailjs/browser'

const contactFormSchema = Z.object({
  name: Z.string().nonempty("Name is Required"),
  email: Z.string().email("Invalid Email").nonempty("Email is Required"),
  subject: Z.string().nonempty("Subject is Required"),
  message: Z.string().nonempty("Message is Required"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const lm = localFont({
  src: "../fonts/LEMONMILK-Light.otf",
})

const ContactForm = () => {

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {

      const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
          time: new Date().toLocaleString()
        },
        publicKey
      )

    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message, please try again.")
    } finally {
      setLoading(false);
      reset(initialValues);
      alert("Message Sent Successfully")
    }

  }

  return (
    <div className={`flex items-center justify-center -mt-9`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-3'>
        <div>
          <label htmlFor="name" className={`block text-white md:text-md text-sm font-semibold mb-3 ${lm.className}`}>Name</label>
          <input
            {...register("name")}
            type="text"
            id='name'
            placeholder='Syed Akbar Ali'
            className='w-full px-3 py-3 text-white font-light md:text-sm text-xs bebas-neue placeholder:text-white/60 bg-gray-900 rounded-md '
          />
          {
            errors.name && (
              <span className='text-red-600'>{errors.name.message}</span>
            )
          }
        </div>

        <div>
          <label htmlFor="email" className={`block text-white md:text-md text-sm font-semibold mb-3 ${lm.className}`}>Email Address</label>
          <input
            {...register("email")}
            type="email"
            id='email'
            placeholder='hello9@gmail.com'
            className='w-full px-3 py-3 text-white font-light md:text-sm text-xs bebas-neue placeholder:text-white/60 bg-gray-900 rounded-md'
          />
          {
            errors.email && (
              <span className='text-red-600'>{errors.email.message}</span>
            )
          }
        </div>

        <div>
          <label htmlFor="subject" className={`block text-white md:text-md text-sm font-semibold mb-3 ${lm.className}`}>Subject</label>
          <input
            {...register('subject')}
            type="text"
            id='subject'
            placeholder='Enter your subject'
            className='w-full px-3 py-3 text-white font-light md:text-sm text-xs bebas-neue placeholder:text-white/60 bg-gray-900 rounded-md'
          />
          {
            errors.subject && (
              <span className='text-red-600'>{errors.subject.message}</span>
            )
          }
        </div>

        <div>
          <label htmlFor="message" className={`block text-white md:text-md text-sm font-semibold mb-3 ${lm.className}`}>Message</label>
          <textarea
            {...register('message')}
            rows="5"
            id='message'
            placeholder='Enter your message'
            className='w-full px-3 py-3 text-white font-light md:text-sm text-xs bebas-neue placeholder:text-white/60 bg-gray-900 rounded-md'
          />
          {
            errors.message && (
              <span className='text-red-500'>{errors.message.message}</span>
            )
          }
        </div>

        <button
          type='submit'
          className={`w-full py-4 bg-yellow-300 text-black font-semibold rounded-md hover:bg-white-50 transition duration-300 cursor-pointer ${lm.className}`}>
          {loading ? "Sending..." : "Send Message"}

        </button>
      </form>
    </div>
  )
}

export default ContactForm