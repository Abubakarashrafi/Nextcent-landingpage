import React from 'react'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin } from "react-icons/ti";
import FooterSection from './FooterSection';
function Footer() {
    const footerinfo_1 = {
        heading: "Company",
        t1: "About us",
        t2: "Blog",
        t3: "Contact us",
        t4: "Pricing",
        t5: "Testimonials"
    }
    const footerinfo_2 = {
        heading: "Support",
        t1: "Help center",
        t2: "Terms of service",
        t3: "Legal",
        t4: "Privacy policy",
        t5: "Status"
    }
    const footerinfo_3 = {
        heading: "Stay up to date"
    }
  return (
    <footer>
          <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] bg-[#263238] min-h-[320px] text-white '>
                

              <div className='mt-20 mx-auto'>

        <div className='flex items-center  '>
        <img className='w-10 h-7' src="footerLogo.png" alt="" />
        <p className='text-white font-bold text-2xl'>Nextcent</p>
        </div>
        <div className=' space-y-2 mt-10'>

                  <p>Copyright © 2024 NexCent ltd.</p>
                  <p>All rights reserved</p>
        </div>
                  <div className='flex mt-10 gap-6 '>
                      <TiSocialFacebook  className='bg-[#4D4D4D] text-3xl px-px rounded-full  cursor-pointer'/>
                      <TiSocialTwitter className='bg-[#4D4D4D] text-3xl px-1 rounded-full cursor-pointer'/>
                      <TiSocialYoutube className='bg-[#4D4D4D] text-3xl px-[5px] rounded-full cursor-pointer'/>
                      <TiSocialLinkedin className='bg-[#4D4D4D] text-3xl px-[2px] rounded-full cursor-pointer'/>
        </div>
        </div>
        
    

        <div><FooterSection footerinfo={footerinfo_1} /></div>
              <div><FooterSection footerinfo={footerinfo_2}/></div>
              
                </div>
        
    
    </footer>
  )
}

export default Footer