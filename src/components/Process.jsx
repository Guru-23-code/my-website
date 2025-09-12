import { motion } from "motion/react"

const Process = () => {
  return (

    <div

      className='container mx-auto w-full bg-transparent overflow-hidden' id='Process'>
      <h1 className='text-6xl px-4 text-white text-center md:text-left mb-5'>Our
        <span className='text-purple-500'> process</span></h1>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='md:flex p-5 gap-3'>

        {/* ----------------FIRST BOX------------------------------ */}

        <div className='md:w-1/3 border border-gray-700 rounded px-3 pt-3 pb-10 hover:border-purple-500'>

          <div className='border border-gray-700 rounded mb-5 p-8'>

            <div className='border border-gray-700 rounded p-4 text-white flex justify-around'>
              <div className=' text-gray-500 hover:text-purple-500 '>Subscription</div>
            </div>

            <div className='border border-gray-700 rounded flex justify-around mt-5 p-4'>
              <button className=' hover:text-purple-500 hover:border-purple-500 rounded-full border border-gray-500 text-gray-500 px-4 py-1'>Basic</button>
              <button className='hover:text-purple-500 hover:border-purple-500 rounded-full border border-gray-500  text-gray-500 px-4 py-1'>Pro</button>
              <button className='hover:text-purple-500 hover:border-purple-500 rounded-full border border-gray-500  text-gray-500 px-4 py-1'>Custom</button>

            </div>

          </div>

          <h1 className='text-2xl text-purple-500 pt-6'>01. <span className='text-white'>Purchase</span></h1>
          <p className='text-gray-500'>Choose your preffered plan to start and cancel or pause at anytime as you like. So you're as flexible as your business needs.</p>
        </div>

        {/* -----------------------------SECOND BOX-------------------------------------- */}
        <div className='md:w-1/3 border border-gray-700 rounded px-3 pt-3 pb-10 overflow-x-hidden hover:border-purple-500'>

          <div className='border border-gray-700 rounded p-4 mb-4'>

            <div className='flex justify-around w-full '>
              <img src="git.svg" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50% hover:border-purple-500' />
              <img src="slackk.svg" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50%  hover:border-purple-500' />
              <img src="chat.svg" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50%  hover:border-purple-500' />
            </div>
          </div>
          <div className='flex justify-around w-full border border-gray-700 rounded p-4  mb-2'>
            <img src="zapier.png" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50%  hover:border-purple-500' />
            <img src="mj.svg" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50%  hover:border-purple-500' />
            <img src="notion.png" className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900 to-50%  hover:border-purple-500' />
          </div>

          <h1 className='text-2xl text-purple-500 pt-6'>02. <span className='text-white'>Request</span></h1>
          <p className='text-gray-500'>Start Requesting the functions you need. Your developers
            are right there to transform your ideas into reality.
          </p>
        </div>

        {/* ----------------------------------THIRD BOX---------------------------------------- */}
        <div className='md:w-1/3 border border-gray-700 rounded   px-3 pt-3 pb-10 hover:border-purple-500'>

          <div className='border border-gray-700 p-5  rounded'>

            <h2 className='text-gray-500 '>
              <marquee behavior="" direction="down ">
                FeaturedSection 0 from "web builders" ;<br />
                const <br />
                Header <br />
                Div
                Herosection <br />
                Break; <br />
                Featured section <br />
                Pricing <br />
              </marquee>
            </h2>
          </div>

          <h1 className='text-2xl text-purple-500 pt-10'>03. <span className='text-white'>Build</span></h1>
          <p className='text-gray-500'>Our developers swiftly begin building yout Custom website. <br />
            Prioritizing speed without compromising on Quality.
          </p>
        </div>
      </motion.div>

      {/* -----------------FOURTH BOX---------------------------- */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='md:flex gap-3 p-5'>
        <div className='md:w-1/2 border border-gray-700 rounded mb-5 md:mb-0
   px-3 pt-3 pb-10 hover:border-purple-500'>

          <div className='border border-gray-700 p-10 rounded text-gray-500'>
            Speed
            <div className='border border-gray-700 m-2 p-2 rounded-full bg-gradient-to-r from-purple-500 to-50%'></div>
            Security
            <div className='border border-gray-700 m-2 p-2 rounded-full  bg-gradient-to-r from-50% to-purple-500' ></div>
            Accuracy
            <div className='border border-gray-700 m-2 p-2 rounded-full bg-gradient-to-r from-purple-500 to-50%'></div>
          </div>

          <h1 className='text-2xl text-purple-500  pt-20'>04. <span className='text-white'>Test & optimize</span></h1>
          <p className='text-gray-500'>You either approve or request revisions , We're dedicated to refining
            builds untill you're fully satisfied. We Make websites that optimizes like a rocket
          </p>
        </div>

        {/* ---------------------FIFTH BOX--------------------------------------- */}

        <div className='md:w-1/2 border border-gray-700 rounded mb-5 md:mb-0 
   px-3 pt-3 pb-10 hover:border-purple-500'>
          <div className='border border-gray-700 pt-10 px-5 rounded'>
            <img src="earth.webp" alt="" className='mb-0  ' style={{ width: 430, }} />

          </div>
          <h1 className='text-2xl text-purple-500 pb-0  pt-20'>05. <span className='text-white'>Become an industry  leader</span></h1>
          <p className='text-gray-500'> Continue requesting as many revisions or updates as
            you wish and transform your business into an worldwide industry leader.
          </p>
        </div>
      </motion.div>





    </div>
  )
}

export default Process