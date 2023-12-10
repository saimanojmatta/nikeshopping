import {headerLogo} from '../assets/images'
import{hamburger} from '../assets/icons'
import{navLinks} from '../constants/index'

const Nav = () => {
  
  return (
    
    <header className='padding-x py-8
          absolute  z-10 w-full'>
        <nav className='flex justify-between items-center
        max-container'>
            <a href="/">
                <img
                 src={headerLogo}
                 alt='logo'
                 width={129}
                 height={29}
                 className='m-0 w-[129px] h-[29px]'
                 />
            </a>
            
            <ul className={`flex-1 lg:flex lg:justify-center items-center gap-16  max-lg:hidden  ${open ? 'top-48':'top-[-490px]'} `}>
             {navLinks.map((item)=>{
              return(
                <li key={item.label} >
                  <a 
                  href={item.href}
                  className='font-montserrat
                  leading-normal text-lg text-slate-gray'>
                  {item.label}
                  </a>
                </li>
              )
             })}
            </ul>
             <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24  '>
              <a href="/">Sign in</a>
              <span>/</span>
              <a href='/'>Explore Now</a>
             </div>
             <div className=' hidden max-lg:block'>
                <img src={hamburger} alt="Hamburger" width={25}height={25}
                />  
             </div> 
        </nav>
    </header>
  )
}
export default Nav