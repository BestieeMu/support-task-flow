import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const org = [
    {
        title: 'IT support',
        id: "hbebbefbefu"
    },
    {
        title: 'Facility',
        id: "nireifneriferi"
    },
    {
        title: 'Inventory',
        id: "nwniwninw"
    },
    {
        title: 'Software Development',
        id: "hbebbjrk-rorro-efbefu"
    },
 
  
]
const Page = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center  min-h-screen'>
<div className='flex flex-col items-center gap-3'>
    <h2 className='text-3xl font-medium mt-20'>All The Orgarnization</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus expedita magnam?</p>
</div>

<div className=' flex flex-wrap px-3 mt-20 gap-5 max-w-[55%] place-content-cente '>
{
    org.map(({title,id}) => (
        <>
        <div className='border-2 border-[#4B4EFC] cursor-pointer w-[150px] text-center rounded bg-white shadow-md flex items-center justify-center p-2 h-[100px]' key={id}>
            {title}
        </div>
        </>
    ))
}
<div className='border-2 border-[#4B4EFC] cursor-pointer w-[150px] text-center rounded bg-white shadow-md flex items-center justify-center p-2 h-[100px]'>
           <span className='text-3xl'><AiOutlinePlus /></span>
        </div>
</div>
      </div>
    </>
  )
}

export default Page
