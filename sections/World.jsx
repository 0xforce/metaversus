'use client';

import { motion } from 'framer-motion'

import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TypingText, TitleText, UserCard } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText 
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles='text-center'
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-01.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className=' absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-02.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src='people-03.png'
            alt='people'
            className='w-full h-full'
          />
        </div>
        <div className='hidden lg:block absolute top-[45%] left-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]'>
          <img 
            src='map-card-1.png'
            alt='card'
            className='w-full h-full'
          />
          <div className='absolute z-10 bottom-5 px-[15px]' >
            <UserCard num1='1' num2='2' num3='3' />
            <h2 className=' text-white font-bold'>The Upside Down</h2>
          </div>
        </div>
        <div className='absolute top-[10%] right-[30%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]'>
          <img 
            src='map-card-2.png'
            alt='card'
            className='w-full h-full rounded-[24px]'
          />
          <div className='absolute z-10 bottom-5 px-[15px]' >
            <UserCard num1='3' num2='1' num3='2' />
            <h2 className=' text-white font-bold'>Hawkins Labs</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
