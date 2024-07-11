import React from 'react'

function Card() {
    const div2 = [
        {
            id: 1,
            title: "Membership Organisations",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: "group.png"
        },
        {
            id: 2,
            title: "National Associations",
            description: "Our membership   management software provides full automation of membership renewals and payments",
            icon: "national.png"
        },
        {
            id: 3,
            title: "Club And Groups",
            description: "Our membership management software provides full automation of membership renewals and payments",
            icon: "club.png"
        }
    ]
  return (
    <>
    {div2.map((card)=>
    <div key={card.id} className='max-w-[300px] space-y-2 mt-4 flex flex-col  items-center' >
        <img src={card.icon} className='w-[65px]' alt="" />
          <p className='text-3xl text-[#4D4D4D] font-bold text-center'>{card.title}</p>
        <p className='mx-5 text-center text-gray-500 '>{card.description}</p>
    </div>
    )}
    </>
  )
}

export default Card