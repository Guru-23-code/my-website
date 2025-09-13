import { motion } from "motion/react"

const Clients = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto px-6' id='Review'>
            <h1 className='text-white text-6xl'>What our
                <span className='text-purple-500'> clients </span>say</h1>

            <div

                className='flex flex-col md:flex md:flex-row mt-5 gap-3 '>

                {/* ---------------------------------FIRST CARD------------------------------ */}

                <div className='border border-gray-700 md:w-1/3 hover:border-purple-500 rounded-2xl p-10 '>
                    <h1 className=' text-gray-300 text-3xl'>
                        "We're delighted with our website subscription <br />
                        from Webmaker's"
                    </h1>
                    <p className='text-gray-500 mt-4'>
                        The website their team made for us is revolutionizing our business. Now , we're more than ever.
                    </p>

                   <div className='w-1/2 mt-3 flex  px-1 md:px-5 '>
                        <img src="xx1.jpg" alt="" className='w-12' style={{ borderRadius: 50 }} />
                        <img src="profile_img_1.png" alt="" className='w-12'
                            style={{ position: "relative", right: 15 }} />

                        <div className='w-1/2'>
                            <h1 className='text-white '> Peter Davis</h1>
                            <p className='text-purple-800 text-sm '>CEO-Asianet</p></div>
                    </div>

                </div>

                {/* -----------------------------------SECOND CARD--------------------------------------------- */}

                <div className='border border-gray-700 md:w-1/3 hover:border-purple-500 rounded-2xl p-10 '>
                    <h1 className=' text-gray-300 text-3xl'>
                        The Builder's website has been used throught the worldwide by 54%
                    </h1>
                    <p className='text-gray-500 mt-4'>
                        Web services are mostly based on the customers satisfaction and people's choice.

                    </p>

                    <div className='w-1/2 mt-3 flex  px-1 md:px-5 '>
                        <img src="xx2.jpg" alt="" className='w-12' style={{ borderRadius: 50 }} />
                        <img src="profile_img_2.png" alt="" className='w-12'
                            style={{ position: "relative", right: 15 }} />

                        <div className='w-1/2'>
                            <h1 className='text-white '> Daniel</h1>
                            <p className='text-purple-800 text-sm '>CMD-Decade</p></div>
                    </div>

                </div>

                {/* -------------------------------------------THIRD CARD------------------------------------------------ */}

                <div className='border border-gray-700 md:w-1/3 hover:border-purple-500 rounded-2xl p-10 '>
                    <h1 className=' text-gray-300 text-3xl'>
                        webmaker's chatbox is an game-changer,
                        absolutely amazing!
                    </h1>
                    <p className='text-gray-500 mt-4'>
                        WebBuilder's chatbox is an absolute game-changer for our
                        customer service,
                        absolutely amazing !
                    </p>

                    <div className='w-1/2 mt-3 flex  px-1 md:px-5 '>
                        <img src="xx3.jpg" alt="" className='w-12' style={{ borderRadius: 50 }} />
                        <img src="profile_img_3.png" alt="" className='w-12'
                            style={{ position: "relative", right: 15 }} />

                        <div className='w-1/2'>
                            <h1 className='text-white '> Micheal</h1>
                            <p className='text-purple-800 text-sm '>DPS-Giant</p></div>
                    </div>

                </div>
            </div>

        </motion.div>
    )
}

export default Clients