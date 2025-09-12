import React from 'react'
import { motion } from "motion/react"

const Footer = () => {
  return (
    <div className='container   ' id='Footer'>
        <motion.h1
         initial={{opacity:0,x:200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
         className='text-white text-6xl m-5  my-5 overflow-hidden '>Let's talk.  eric
        <span className='text-purple-500'>@</span>webmaker.us</motion.h1>
         <div className=' px-10 py-5 bg-gray-900 flex justify-between '>
            <div className=' text-white flex flex-col'>
                <a href="#" className='text-purple-500'>2025</a>
                <a href="#">eric@webmaker.us</a>
                <a href="#">+1 (813) 724 2684</a>
                <a href="#">Local time <span className='text-purple-500'>11:38:04 AM</span></a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
               
                
            </div>
            <div className=' text-white flex flex-col'>
                <a href='#Process' className='text-white'>Process</a>
                <a href="#Services" className='text-purple-500'>Services</a>
                <a href="#">Vault</a>
                <a href="#Plans">Pricing</a>
                <a href="#Contact"  className='text-purple-500'>Contact</a>
                <a href='#'>FAQ</a>
                <a href="#">404</a>
            </div>
            <div className=' text-white flex flex-col'>
                <a href="#">X.com</a>
                <a href="#" className='text-purple-500'>Discord</a>
                <a href="#">Email</a>
                <a href="#">Youtube</a>
            </div>
           

         </div>
    </div>
  )
}

export default Footer