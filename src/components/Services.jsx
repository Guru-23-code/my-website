import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
     transition={{duration:1.5}}
     whileInView={{opacity:1,y:0}}
     viewport={{once:true}}
    className='container mx-auto p-5 text-white'id='Services'>
         <h1 className='text-6xl px-4 text-white text-center md:text-left mb-5'>Other 
         <span className='text-purple-500'> services</span></h1>

      <div className=' p-5 gap-5 rounded flex flex-col md:flex-row'>
        
{/* --------------------------------------SERVICE 1---------------------------------------------------         */}
           <div className='border border-gray-700 p-5 flex  flex-col justify-around
           hover:border-purple-500   rounded md:w-1/3'>

           <div className='border border-gray-700 px-4 py-2 flex items-center justify-around   rounded'>
            <div className='border border-gray-700 rounded p-2'>
                <img src="framer.png" alt="" className='w-10' />
            </div>
            <div>
                <p className=' text-purple-500 pl-3'>Framer</p>
           <p className='text-gray-400 pl-3'>New contact from submission </p>
            </div>
            <div >
                <img src="diagarrow.png" alt="" className='w-8' />
            </div>
            
           </div> 
           <div className=' border border-gray-700 rounded-full w-8  p-3 ml-34 md:ml-50'>

            <img src="downarrow.png" alt="" className='' />
               
           </div>
           <div className='border border-gray-700 p-5 flex justify-around px-4 py-2  rounded'>
            <div className='border border-gray-700 rounded p-1'>
                <img src="git.svg" alt="" className='w-12' />
            </div>
            <div>
                <p className=' text-purple-500 pl-3'>Aritable</p>
           <p className='text-gray-400 pl-3'>Add data's to the table faster </p>
            </div>
            <div>
                <img src="diagarrow.png" alt="" className='w-8 mt-3'  />
            </div>
            
           </div>
            <div className='border border-gray-700 rounded-full w-8  p-3 ml-34 md:ml-50'>

            <img src="downarrow.png" alt="" className='w-' />
               
           </div>
           <div className='border border-gray-700 p-5 flex justify-around px-4 py-2  rounded'>
            <div className='border border-gray-700 rounded p-1'>
                <img src="chat.svg" alt="" className='w-12' />
            </div>
            <div>
                <p className=' text-purple-500 pl-3'>OpenAI</p>
           <p className='text-gray-400 pl-3'>Write personalised message </p>
            </div>
            <div>
                <img src="diagarrow.png" alt="" className='w-8 mt-3'  />
            </div>
           </div>
            <h1 className='text-3xl text-white pb-0  pt-20'>Workflow automations</h1>
        <p className='text-gray-500'> We automate your website by connecting you! favourite
            applications. Boosting efficiency and enhancing productivity
        </p>
           </div>

{/* -----------------------------------SERVICE 2--------------------------------------------------------- */}

           <div className='border border-gray-700 hover:border-purple-500 p-5 rounded md:w-1/3'>

           <div className='border border-gray-700 rounded p-4  flex flex-col gap-2'>
            <div className='border border-gray-700 flex justify-end gap-5  p-3 '>
                <div className='flex flex-col'>
                    <p className='text-purple-500 ml-24 '>Paul M</p>
             <p className='text-gray-400'>Summarize this report</p>
                </div>
                <div className='border border-gray-700 rounded p-1'>
                    <img src="face.jpg" alt="" className='w-12' />
                </div>
            </div>
            <div className='border border-gray-700 p-3 flex  gap-5'>
                <div className='border border-gray-700 rounded p-1 bg-gradient-to-t from-purple-900'>
                    <h1 className=' text-xl px-3 py-1'> AI</h1>
                    </div>
                <div className='flex flex-col'>
                    <p className='text-purple-500  '>Ai assistant</p>
             <p className='text-gray-400'>Sure, here's a summary!</p>
                </div>
                <div></div>
            </div>
            <div className='border border-gray-700 rounded-xl px-5 py-2 flex my-4  items-center justify-between  '>
             <img src="happy.png" alt="" className='w-8 opacity-50' />
            <img src="send.png" alt="" className='opacity-70' />
            </div>
           </div>
            <h1 className='text-3xl text-white pb-0  pt-20'>Chatbot development</h1>
        <p className='text-gray-500'> We develop advanced chatbot that are reactive understandable
            resources. and are capable of to solving extremely complicated queries.
        </p>
           
           </div>
{/* -------------------------------------SERVICE 3----------------------------------------------------------------- */}

           <div className='border border-gray-700 hover:border-purple-500 p-5 rounded md:w-1/3'>
                <div className='border border-gray-700 rounded relative '>
                    <div className='border border-gray-700 rounded-2xl bg-gradient-to-t from-purple-900 to-80% text-white
                      absolute left-50 mt-7 w-20 px-5 py-1 '>+15%</div>
                     <img src="waves.png" alt="" className='h-75 w-full' />
                </div>
                <h1 className='text-3xl text-white pb-0  pt-20'>Business consulting</h1>
        <p className='text-gray-500'> Using our expertise, we dive deep into your business and consult you on how a new website could enhance your operations
        </p>
           </div>
           
      </div>
    </motion.div>
  )
}

export default Services