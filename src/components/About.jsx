import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    < >
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} 
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled developer with experience in Javascript, Typescript, python and expertise in fameworks like React,react native,Node js, Django. i'm a quick learner and colaborate closely with clients to create efficient,scalable and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,id)=>(
          <Tilt className='sm:w-[250px] w-full' key={id} >
            <motion.div variants={fadeIn("right","spring",0.5*id,0.75)} 
            className='w-fill green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div options={{
                max:45,
                scale:1,
                speed:450
              }}
              className='bg-tertiary rounded-[20px] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <img src={service.icon} alt='iconImg' className='w-16 h-16 object-contain' />
                <h3 className='text-white text=[20px]'>{service.title} </h3>
              </div> 
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')