import { services } from "../constants"
import Servicecard from "../components/Servicecard"
const Services = () => {
  return (
    <section className=' max-container flex justify-center flex-wrap gap-9'>
      {services.map((service)=>{
        return(
          <Servicecard key={service.label}{...service}/>
        )
      })}

    </section>
  )
}
export default Services