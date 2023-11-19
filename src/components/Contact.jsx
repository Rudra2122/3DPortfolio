import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//template_9gq1ilm    template id
//service_25hc78k     service id
//4vGwQ0w9dHQ4cP1SR   public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_25hc78k',
      'template_9gq1ilm',
      {
        from_name: form.name,
        to_name: 'Rudra',
        from_email: form.email,
        to_email: 'rudra02122002@gmail.com',
        message: form.message,
      },
      '4vGwQ0w9dHQ4cP1SR'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went Wrong')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl order-2 xl:order-1">
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name}
              onChange={handleChange} placeholder="What's your Good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email}
              onChange={handleChange} placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message}
              onChange={handleChange} placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none 
          w-fit text-white font-bold shadow-md shadow-primary rounded-xl ">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className="flex-[0.85] relative order-1 xl:order-2">
        <div className=" top-0 left-0 right-0 bottom-0 z-[-1] "></div>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")