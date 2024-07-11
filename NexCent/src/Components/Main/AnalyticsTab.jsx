import React from 'react'
import Analytics from '../Analytics'
import Tab from './Tab'

function Analyticstab() {
 
  const tab_1 =
  {
    img: "mstand.png",
    title: "The unseen of spending three years at Pixelgrade",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda deleniti quae esse quidem quis modi aut ipsam voluptate soluta?"
  }
  const tab_2 = {
    img: "image.png",
    title: "How to design your site footer like we did",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur quos, iure perferendis ratione ipsam placeat quisquam omnis soluta eos ad illum facere quidem in possimus error, vero, blanditiis quas.",
  }
  return (
    <>
      <section>
        <Tab tabInfo={tab_1}/>
      </section>
          <section className='md:flex  items-center w-full mt-10 bg-[#eff2f8] min-h-[250px]'>
        <div className='md:w-1/2  md:pl-6  '>
        <div className='m-2 pt-2 md:pt-0 text-center md:text-left md:w-[80%] md:m-auto space-y-3 '>

                  <h4 className='text-3xl md:text-4xl md:max-w-md font-medium text-[#4D4D4D]'>Helping a local <span className='text-primary'>business reinvent itself</span></h4>
        <p className=''>We reached here with our hard work and dedication</p>
        </div>
        </div>
        <div className='flex justify-center mb-3 '>
            {/* 2nd elemt */}
        <div>
            <div className="grid grid-cols-2">

            <Analytics/>
           
            </div>
        
        </div>

   
        </div>
    </section>
    <section>
      <Tab tabInfo={tab_2} imgWidth={true}/>
    </section>
    

    
    </>
  )
}

export default Analyticstab