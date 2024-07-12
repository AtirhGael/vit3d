import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const Experience = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>What i have done so far</p>
      <h2 className={`${styles.sectionHeadText}`}> Work experience. </h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((item,id)=>(
          <VerticalTimelineElement key={id}
          contentStyle={{ background:'#1d1836',color:'#fff'}}
          contentArrowStyle={{ borderRight:'7px solid #232631' }}
          date={item.date}
          iconStyle={{ background:item.iconBg}}
          icon={
          <div className= 'flex w-full h-full justify-center items-center'>
            {/* <img src={item.icon} alt={item.company_name} className='w-[60%] h-[60%] object-contain '/> */}
          </div>}
          >
            <div>
              <h3 className='text-white text-[24px]'>{item.title}</h3>
              <p className='text-secondary text-[16px] font-semibold'>{item.company_name}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {item.points.map((items,id)=>(
                <li key={id}>
                  {items}
                </li>
              ))}
            </ul>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
   </>
  )
}

export default SectionWrapper(Experience,'work') 