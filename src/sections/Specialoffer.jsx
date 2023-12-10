import {offer} from '../assets/images'
import {arrowRight} from '../assets/icons'
import Button from '../components/Button'

const Specialoffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer} alt="shoe promotion" width={773} height={687}  className='object-contain w-full '/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
           Offer
        </h2>
        <p className='mt-4 info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.

        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight}/>
          <Button label='Learn more'
             textColor='text-slate-gray'
             borderColor='border-slate-gray'
             backgroundColor='bg-white'
          
          />
         
        </div>
      </div>
    </section>
  )
}
export default Specialoffer
