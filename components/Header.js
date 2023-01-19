import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image'


export default function Header() {
  let hambutton, mobileNav

  useEffect(() => {
    hambutton = document.getElementById('menu-btn')
    mobileNav = document.getElementById('menu')
    hambutton.addEventListener('click',() => handleClick())
  },[])

  function handleClick() {
    hambutton.classList.toggle('open')
    mobileNav.classList.toggle('flex')
    mobileNav.classList.toggle('hidden')
  }


  return (
    <>
      <nav className='relative max-w-sm md:container mx-auto py-6 '>
        {/* Container */}
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Image
              src="/images/fundamafra-logoweb.png" // Route of the image file
              height={225} // Desired size with correct aspect ratio
              width={133} // Desired size with correct aspect ratio
              alt="FUNDAMAFRA logo"
            />
          </div>
          {/* Pages */}
          <div className='hidden space-x-12 font-semibold md:flex'>
            <Link className='hover:text-mainJam' href="/">Inicio</Link>
            <Link className='hover:text-mainJam' href="/proyectos">Proyectos</Link>
            <Link className='hover:text-mainJam' href="/contacto">Contacto</Link>
          </div>
          {/* CTA */}
          <a className='p-2 px-6 hidden text-white font-medium bg-purple rounded-full hover:bg-mainJam md:block' href="#">Dona</a>
          <button id="menu-btn" className='block md:hidden focus:outline-none'>
            <span className='hamburguer-top'></span>
            <span className='hamburguer-middle'></span>
            <span className='hamburguer-bottom'></span>
          </button>
        </div>
        {/* Hamburguer Menu */}
        <div className='md:hidden'>
          <div id='menu' className='absolute hidden flex-col items-center mt-10 font-semibold left-20 right-20 drop-shadow-md divide-y'>
            <Link className='w-full text-center leading-10 rounded-t bg-white' onClick={handleClick} href="/">Inicio</Link>
            <Link className='w-full text-center leading-10 bg-white' onClick={handleClick} href="/proyectos">Proyectos</Link>
            <Link className='w-full text-center leading-10 bg-white' onClick={handleClick} href="/contacto">Contacto</Link>
            <Link className='w-full text-center leading-10 rounded-b bg-indigo-600 text-white' onClick={handleClick} href="/">Dona ahora</Link>

          </div>
        </div>
      </nav>
    </>
  )
}
