import React from 'react'

const UserCard = ({ num1, num2, num3 }) => (
  <div className='flex flex-row mb-4'>
    <div className=''>
      <img src={`people-0${num1}.png`} alt='people' className='w-[24px] h-[24px] object-contain rounded-full absolute z-30' />
      <img src={`people-0${num2}.png`} alt='people' className='w-[24px] h-[24px] object-contain rounded-full ml-[10px] absolute z-20' />
      <img src={`people-0${num3}.png`} alt='people' className='w-[24px] h-[24px] object-contain rounded-full ml-[20px] absolute z-10' />
    </div>
    <div className='ml-12'>
      <p className='text-white text-[12px]'>+264 has joined</p>
    </div>
  </div>
)

export default UserCard
