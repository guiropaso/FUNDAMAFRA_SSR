import Image from 'next/image'
import {FaPhoneAlt,FaMailBulk,FaMapMarkerAlt} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import ContactForm from '@/components/ContactForm'
import { useEffect } from 'react'
import Observer from '@/utils/useObserver'



export default function contacto() {
  
  useEffect(() => {
  
    const hiddenElements = document.querySelectorAll('.ocultos')
    Observer(hiddenElements)
  
  },[])

  return (
    <>
      <section id='contacto-intro'>
        <div>
          <div className='container mx-auto text-center py-40 ocultos'>
            <h2 className='text-5xl font-bold text-white'>¿Tienes alguna pregunta?</h2>
            <p className='text-lg mt-12 text-white max-w-sm md:max-w-xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptatem laudantium dolores dolor et amet quia vero similique quisquam ea.</p>
          </div>
          <div className='relative'>
            <div className="curves">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section id='contact-form' className='mt-10'>
        <div className='container pb-20 space-y-20 md:space-y-0 mx-auto flex flex-col md:flex-row justify-around items-center'>
          <div>
            <Image id='contacto-img' className='relative -mt-36 ocultos' src="/images/contacto.png" alt="contacto" width='550' height='340' />
            <h3 className='text-3xl py-5 border-b-2 border-slate-300 text-center md:text-left'>Encuéntranos</h3>
            <div className='flex flex-col space-y-10 mt-10 w-4/6 lg:w-2/4 mx-auto'>
              <div className='flex flex-row justify-between items-center'>
                <IconContext.Provider value={{className:'text-5xl text-white box-content mr-5 bg-mainJam rounded-full p-4'}}>
                  <FaPhoneAlt/>
                </IconContext.Provider>
                <p className='font-bold ocultos'>+(503)7167-8151</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
              <IconContext.Provider value={{className:'text-5xl text-white box-content mr-5 bg-mainJam rounded-full p-4'}}>
                <FaMailBulk />
              </IconContext.Provider>
                <p className='font-bold ocultos'>info@fundamafra.org</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
              <IconContext.Provider value={{className:'text-5xl text-white box-content mr-5 bg-mainJam rounded-full p-4'}}>
                <FaMapMarkerAlt />
              </IconContext.Provider>
                <p className='font-bold ocultos'>+(503)7167-8151</p>
              </div>
            </div>

          </div>
          <div id='formdiv' className='ocultos'>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
