
import Header from './components/Header'
import Process from './components/Process'
import Clients from './components/Clients'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'




const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Process/>
      <Services/>
      <Clients/>
      <Plans/>
      <Contact/>
       <Footer/> 

    </div>
  )
}

export default App