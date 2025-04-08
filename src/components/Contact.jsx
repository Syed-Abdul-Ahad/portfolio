import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { slideIn } from '../utils/motion'

//emailjs.com
// template_6j9sgqb
// service_83iyz81
// 7lEJR41n5eEFzvqDo

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading, setloading] = useState(false)

  const handleChange=(e)=>{
    const {name,value} = e.target;

    setForm({...form,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setloading(true);
    emailjs.send(
      'service_83iyz81',
      'template_6j9sgqb',
      {
        from_name:form.name,
        to_name:'Syed Abdul Ahad',
        from_email:form.email,
        to_email:'engrabdulahad924@gmail.com',
        message:form.message
      },
      '7lEJR41n5eEFzvqDo'
    ).then(()=>{
      setloading(false)
      alert('I will get back to you as soon as possible.')
      setForm({
        name:'',
        email:'',
        message:''
      })
    },
    (error)=>{
      setloading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }


  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='font-medium mb-4 text-white'>Your Name</span>
              <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </label>

            <label className='flex flex-col'>
              <span className='font-medium mb-4 text-white'>Your Email</span>
              <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </label>

            <label className='flex flex-col'>
              <span className='font-medium mb-4 text-white'>Your Message</span>
              <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
            </label>
            
            <button type='submit' className='bg-tertiary py-3 px-8 w-fit font-bold shadow-md text-white shadow-primary rounded-xl'>
              {loading ? 'Sending':'Send'}
            </button>
          </form>
      </motion.div>

      <motion.div variants={slideIn('right','tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[330px] '>
        <EarthCanvas/>
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact")