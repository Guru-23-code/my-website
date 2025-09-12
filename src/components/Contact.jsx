import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
     transition={{duration:1.5}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
    className='container px-6 md:my- mb-5 ' id='Contact'>
      <h1 className='text-white text-6xl mr-5 my-5'>Get in
        <span className='text-purple-500'> touch </span></h1>


        <div className='flex flex-col md:flex-row md:justify-around md:mx-20'>

     <div className=' p-2 mb-3 md:w-1/2 md:mt-6 hidden md:block hover:border-purple-500 '>

      <p className='text-gray-600'>Office</p>
      <h1 className='text-gray-300 '>Tampa, Florida</h1>
      <h1 className='text-gray-300 mb-3'>United States</h1>
      <input type="text" className='border border-gray-600 border-x-0
       border-b-0 w-80 hover:focus-visible:none' />

      <p className='text-gray-600'>Email</p>
      <h1 className='text-gray-300 text-2xl md:text-3xl mb-3 '>eric@webmaker.us</h1>
      <input type="text" className='border border-gray-600 border-x-0 border-b-0 w-80' />
      <p className='text-gray-600'>Phone</p>
      <h1 className='text-gray-300 text-2xl mb-3 md:text-3xl '>+1 (813) 724 2684</h1>
      <input type="text" className='border border-gray-600 border-x-0 border-b-0 w-80' />

     </div>

     <div className='p-2 mb-3 md:w-1/2  '>

     <div className='grid grid-row-2 md:grid-cols-2 text-gray-300 gap-3 md:m-3'>
      <div>
       <p>First Name</p>
       <p><input type="text" placeholder='Eric' className='border border-gray-600 rounded w-full p-1 md:p-2' /></p>
      </div>
      <div>
        <p>Last Name</p>
       <p><input type="text" placeholder='MaxDonald' className='border border-gray-600 rounded w-full p-1 md:p-2' /></p>
      </div>
      <div>
       <p>Email</p>
       <p><input type="text" placeholder='eric@webmaker.us' className='border border-gray-600 rounded w-full p-1 md:p-2' /></p>
      </div>
      <div>
        <p>Phone</p>
       <p><input type="text" placeholder='+1 (813) 724 2684' className='border border-gray-600 rounded w-full p-1 md:p-2' /></p>
      </div>

     </div>
     <div className='md:mx-3 '>
      <p className='text-gray-300 mt-3'>Message </p>
    <textarea  className='border border-gray-600 w-full  md:h-30 h-30
     resize-none mt-3 rounded text-gray-500'></textarea>
      <button type='submit' className='border border-gray-600 px-8 py-2
      text-gray-300 mt-3 rounded-xl bg-gray-800 hover:border-gray-300'>Submit</button> 
     </div>
     </div>
   
     
        </div>

    </motion.div>


  )
}

export default Contact