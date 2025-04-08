import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { achievements } from '../constants'
import { SectionWrapper } from './hoc'
import { textVariant } from '../utils/motion'

const AchievementCard = ({ achievement }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={achievement.date} // If your data has a date field, otherwise remove this
    iconStyle={{ background: '#6A5ACD' }} // You can customize this based on your preference
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={achievement.pic} // If you have icons for each achievement, otherwise you can remove this line
          alt={achievement.title}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{achievement.title}</h3>
      <p className='text-secondary font-semibold text-[16px]' style={{ margin: 0 }}>
        {achievement.place} - {achievement.position}
      </p>
      <p className='text-secondary font-semibold text-[16px] mt-10'>
        {achievement.description}
      </p>
    </div>
  </VerticalTimelineElement>
)

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Achievements</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Achievements,"")
