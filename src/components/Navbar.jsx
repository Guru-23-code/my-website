
import { useEffect, useState } from 'react'



const Navbar = () => {
    const [Shownav, setshownav] = useState(false);

    useEffect(() => {
        if (Shownav) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }

    }, [Shownav])

    return (
        <div className='absolute top-0 left-0 w-full z-10 bg-transparent overflow-visible '>
            <div className='flex justify-between px-6 py-4  '>
                <img className='' src="logo.svg" alt="" />
                <ul className='hidden  md:flex gap-20 text-gray-300'>
                    <a className='hover:text-white  ' href="#Home">Home</a>
                    <a className='hover:text-white ' href="#Services">Services</a>
                    <a className='hover:text-white' href="#Process">Process</a>
                    <a className='hover:text-white' href="#Review">Reviews</a>
                    <a className='hover:text-white' href="#Plans">Plans</a>
                    <a className='hover:text-white ' href="#Contact">Contact</a>
                </ul>
                <button className='hidden md:block hover:text-black hover:bg-white
               text-gray-200 bg-transparent border border-gray-200
            px-2 rounded'>REMIX</button>
                <img onClick={() => setshownav(true)} src="menu_icon.svg" className='md:hidden w-8' alt="" />

            </div>
            {/* ----------------Mobile-Nav------------------ */}
            <div className={`md:hidden ${Shownav ? 'fixed w-full' : 'w-0 h-0'}  right-0  top-0 bottom-0
 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6'>
                    <img onClick={() => setshownav(false)} src="cross_icon.svg" alt="" className='w-6 cursor-pointer' />
                </div>

                <ul className='flex flex-col items-center gap-2 mt-5 
    mx-5 text-lg font-medium '>
                    <a onClick={() => setshownav(false)} href="#Home" className='px-4 py-2 rounded-ful 
        inline-block'>Home</a>
                    <a onClick={() => setshownav(false)} href="#Services" className='px-4 py-2 rounded-ful 
        inline-block'>Services</a>
                    <a onClick={() => setshownav(false)} href="#Process" className='px-4 py-2 rounded-ful 
        inline-block'>Process</a>
                    <a onClick={() => setshownav(false)} href="#Review" className='px-4 py-2 rounded-ful 
        inline-block'>Review</a>
                    <a onClick={() => setshownav(false)} href="#Plans" className='px-4 py-2 rounded-ful 
        inline-block'>Plans</a>
                    <a onClick={() => setshownav(false)} href="#Contact" className='px-4 py-2 rounded-ful 
        inline-block'>Contact</a>

                </ul>
            </div>




        </div>
    )
}

export default Navbar