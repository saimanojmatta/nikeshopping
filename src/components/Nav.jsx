import {headerLogo} from '../assets/images'
import{hamburger,intomark} from '../assets/icons'
import{navLinks} from '../constants/index'
import { useState } from 'react'

const Nav = () => {

  const[toggle,settoggle]=useState(false)
  
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
            <div className='md:hidden flex flex-1 items-center justify-end '>
              <img className='w-[28px] h-[28px] object-contain'
               src={toggle? intomark:hamburger}
               alt='hamburger' onClick={()=>settoggle(!toggle)} />
               <div className={`${!toggle?'hidden':'flex p-6 bg-coral-red  z-10 duration-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl '}`}>
                <ul className=' list-none flex flex-col flex-1 items-start justify-end'>
                  {navLinks.map((item)=>{
                    return(
                      <li  className='mb-4 font-normal cursor-pointer '
                      key={item.label}>
                        <a  className =''href={item.href}>
                          {item.label}
                          </a>
                      </li>
                    )
                  })}

                </ul>

               </div>
            </div>
              
        </nav>
    </header>
  )
}
export default Nav