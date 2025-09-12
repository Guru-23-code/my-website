import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className=' min-h-screen w-full mb-4 bg-cover bg-center flex items-center' id='Home'
    style={{backgroundImage:"url(/backg.jpg)"}}>
     <Navbar/>
     <motion.div
     initial={{opacity:0,y:100}}
     transition={{duration:1.5}}
     whileInView={{opacity:1,y:0}}
     viewport={{once:true}}
     
     className='container mx-auto h-50 w-80% mb-30 px-10 md:pt-10 text-center border-white'>
        <h1 className='text-white text-8xl'>Driving growth with <span
         className='text-purple-500'>sites</span>.</h1>
        <p className='text-center w-80 md:w-full text-white md:pt-8 py-5 pl-20 md:p-0'>
            We crafting amazing websites for amazing companies</p>
        <div className='flex justify-center gap-5 text-white md:pt-10' >
            <a className=' border  border-gray-400 rounded px-4 py-2
             bg-gradient-to-t from-purple-900 to-50%  hover:transition-transform duration-300 hover:scale-125 ' href="#Process">Our process</a>
            <a className='border  border-gray-400 rounded px-4 py-2
             bg-gradient-to-t from-purple-900 to-50% hover:transition-transform duration-300 hover:scale-125 ' href="#Contact">Get in touch</a>
        </div>
     </motion.div>
    </div>
  )
}

export default Header