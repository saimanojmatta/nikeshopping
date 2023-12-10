import {Hero,Popularproducts,Subscribe,Specialoffer, Services,Footer, Superquality,Customerreviews} from './sections'
import Nav from './components/Nav'

const App=()=>{
  return(
    <>
   
     <main className='relative'>
      <Nav/>
      <section className='xl:padding-l 
      wide:padding-r padding-b'>
        <Hero/>
      </section>
     <section className='padding'>
       < Popularproducts/>  
      </section> 
      <section className='padding'>
        <Superquality/>
      </section>   
      <section className='padding-x py-10'>
        <Services/>
      </section> 
      <section className='padding'>
        <Specialoffer/>
      </section> 
      <section className=' bg-pale-blue padding'>
       <Customerreviews/>
      </section> 
      <section className='padding-x sm:py-32 py-16 w-full'>
       < Subscribe/>
      </section> 
      <section className=' bg-black padding-x padding-t pb-8'>
       < Footer/>
      </section> 
     </main>
    </>
  )
 
}
export default App