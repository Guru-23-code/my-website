import { motion } from "motion/react"

const Plans = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container mx-auto mt-5 p-6 w-full flex-col justify-center' id='Plans'>
      <h1 className='text-white text-4xl md:text-6xl text-center'><span className='text-purple-500'>Plans
      </span> to suit your needs</h1>
      {/* -----------------------------------------------CONTAINER--------------------------------------------- */}
      <div className='border border-gray-700 hover:border-purple-500 p-5 rounded-2xl mt-5
       bg-gradient-to-t from-violet-900  md:mx-100 m-0 '>

        <div className='flex my-3  justify-around '>
          <button className=' border border-gray-600 rounded-full
           px-6 py-1 text-gray-500 hover:border-gray-300 hover:text-gray-50
            hover:bg-gray-800'>TIER 1</button>
          <button className=' border border-gray-600 rounded-full
           px-6 py-1 text-gray-500 hover:border-gray-300 hover:text-gray-300 
            hover:bg-gray-800'>TIER 2</button>
          <button className=' border border-gray-600 rounded-full
           px-6 py-1 text-gray-500 hover:border-gray-300 hover:text-gray-300 
            hover:bg-gray-800'>TIER 3</button>
          <button className=' border border-gray-600 rounded-full
           px-6 py-1 text-gray-500 hover:border-gray-300 hover:text-gray-300 
            hover:bg-gray-800'>TIER 4</button>
        </div>

        <div className='flex flex-col md:flex-row gap-2  text-gray-400'>
          <div className='border border-gray-500 
           hover:border-purple-300 hover:text-purple-100 rounded-2xl p-2 md:w-1/2  flex gap-3'>
            <input type="radio" name="" id="" />
            Monthly
          </div>
          <div className='border border-gray-500 rounded-2xl 
          hover:border-purple-300 hover:text-purple-100 p-2 md:w-1/2 flex gap-3'>
            <input type="radio" name="" id="" />
            Yearly (Save 40%)</div>
        </div>


        <div className='text-gray-300 flex justify-between px-1 pt-5'>
          <h2>OVER - USER EXPERIENCE</h2>
          <h2>GOOD</h2>
        </div>
        <div className='border border-gray-400 p-3 w-4/5 md:w-full
         rounded-full mt-2  bg-gradient-to-r from-purple-500 to-50%'></div>

        <div className='flex gap-20 md:gap-50 mt-5 text-gray-200 '>
          <div className='mt-5 '>
            <div className='flex mb-3'>
              <img src='right_arrow.svg' className='pr-3' />
              Basic Design</div>
            <div className='flex mb-3'><img src='right_arrow.svg' className='pr-3' />
              Multi Page Website</div>
            <div className='flex mb-3'><img src='right_arrow.svg' className='pr-3' />
              Data Production</div>
            <div className='flex mb-5'><img src='right_arrow.svg' className='pr-3' />
              Unlimited Revisions</div>
          </div>
          <div className='mt-5 ml-'>
            <div className='flex mb-3'><img src='right_arrow.svg' className='pr-3' />
              AI powered tools</div>
            <div className='flex mb-3'><img src='right_arrow.svg' className='pr-3' />
              Basic SEO Optimized</div>
            <div className='flex mb-3'><img src='right_arrow.svg' className='pr-3' />
              1-3 Day Delivery</div>
            <div className='flex mb-5'><img src='right_arrow.svg' className='pr-3' />
              Monthly Perfomance Summaries</div>
          </div>
        </div>

        <div className='flex gap-9 justify-center mx-auto conatiner w-75'>
          <img src="PJ1.jpg" alt="" className='w-1/3 md:w-40 rounded-xl
   hover:transition-transform duration-300 hover:scale-150 opacity-75 hover:opacity-100 ' />
          <img src="pj2.webp" alt="" className='w-1/3 md:w-40 rounded-xl
   hover:transition-transform duration-300 hover:scale-150 opacity-75 hover:opacity-100 ' />
          <img src="PJ3.png" alt="" className='w-1/3 md:w-40 rounded-xl
   hover:transition-transform duration-300 hover:scale-150 opacity-75 hover:opacity-100' />
        </div>

        <div className='mt-5 flex justify-between'>

          <h1 className='text-3xl text-purple-100'>$299 <br /> <span className='text-xl text-purple-500'>just $29 per month</span></h1>
          <button className='bg-gray-900 h-10 mt-7 px-4 rounded-full
   text-gray-400 shadow-2xl hover:transition-transform duration-300 hover:scale-125 hover:text-gray-200 '>Get Started</button>

        </div>

      </div>
      {/* -------container div------- */}

    </motion.div>
  )
}

export default Plans




