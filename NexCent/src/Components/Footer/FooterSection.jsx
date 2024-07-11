import React from 'react'

function FooterSection({footerinfo : {heading,t1,t2,t3,t4,t5}, searchBox}) {
    
  return (
    <div className='mt-20 pl-4'>
        <h4 className='font-bold text-2xl mb-6'>{heading} </h4>
          <div className='space-y-3 text-gray-100 max-w-32  flex flex-col '>
  
   

    <a href='#' className='hover:border-b-2'> {t1}</a>
              <a href='#' className='hover:border-b-2'>{t2}</a>
              <a href='#' className='hover:border-b-2'>{t3}</a>
              <a href='#' className='hover:border-b-2'>{t4}</a>
              <a href='#' className='hover:border-b-2'>{t5}</a>
        </div>
    </div>
  )
}

export default FooterSection