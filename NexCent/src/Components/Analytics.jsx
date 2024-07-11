import React from 'react'

function Analytics() {
  const analyticsInfo = [
    {
      id:1,
      value:"2,245,341",
      title:"Members",
      path: "group.png"
    },
    {
      id:2,
      value:"46,350",
      title:"Clubs",
      path: "club_2.png"
    },
    {
      id:3,
      value:"10,000",
      title:"Events",
      path: "click.png"
    },
    {
      id:4,
      value:"2,000,002",
      title:"Payments",
      path: "creditCard.png"
    },
  ]
  return (
    <>
      {analyticsInfo.map((info)=>
     
      
      <div key={info.id} className='flex gap-2  md:mx-6  my-4'>
        <img className='max-w-[32px] md:max-w-[48px] ' src={info.path} alt="" />
        <div className=''>
            <p className='text-[#4D4D4D] font-bold text-lg md:text-xl'>{info.value}</p>
        <p className='text-gray-500'>{info.title}</p>
        </div>
      </div>
     
      )}
    
      </>
  )
}

export default Analytics