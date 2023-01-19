import Link from 'next/link'
import Image from 'next/image'
import { BiHomeHeart, BiDollarCircle, BiDonateHeart, BiGroup } from 'react-icons/bi';

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section id='hp-banner' className='bg-blend-multiply'>
        <div className='container mx-auto flex flex-col space-y-12 py-36 text-center'>
          <h2 className='text-3xl max-w-sm text-white mx-auto md:text-5xl md:mx-0 md:max-w-xl md:text-left'>Construyamos una sociedad donde todas las familias se sientan seguras, fuertes y felices.</h2>
          <p className='text-xl max-w-sm text-white mx-auto md:mx-0 md:max-w-lg md:text-left'>Nuestra fundación busca poder apoyar de una manera integral a  todas las familias salvadoreñas.
          ¡Ayúdanos a poder llegar a más hogares!</p>
        </div>
      </section>

      {/* Numbers Section */}
      <section id='hp-numbers'>
        <div className='my-20'>
          <h2 className='text-center font-bold text-5xl text-royal md:text-6xl'>Proyecciones</h2>
        </div>
        <div className='container mx-auto flex flex-col space-y-10 justify-between mb-20 md:flex-row md:space-y-0'>
          <div className='flex flex-col items-center md:space-y-2'>
            <BiHomeHeart className='text-6xl'/>
            <span className='text-4xl font-bold text-purple'>100</span>
            <span className='font-semibold text-lg'>Hogares atendidos</span>
          </div>
          <div className='flex flex-col items-center md:space-y-2'>
            <BiDollarCircle className='text-6xl'/>
            <span className='text-4xl font-bold text-purple'>$100k</span>
            <span className='font-semibold text-lg'>En fondos recaudados</span>
          </div>
          <div className='flex flex-col items-center md:space-y-2'>
            <BiDonateHeart className='text-6xl'/>
            <span className='text-4xl font-bold text-purple'>5</span>
            <span className='font-semibold text-lg'>Proyectos ejecutados</span>
          </div>
          <div className='flex flex-col items-center md:space-y-2'>
            <BiGroup className='text-6xl'/>
            <span className='text-4xl font-bold text-purple'>+100</span>
            <span className='font-semibold text-lg'>Colaboradores</span>
          </div>
        </div>
      </section>

      {/* Take Action Section */}
      <section id='hp-involucrate'>
        <div className='my-20'>
          <h2 className='text-center font-bold text-5xl text-royal md:text-6xl'>Involúcrate</h2>
        </div>

        {/* Flex Container */}
        <div className='max-w-sm md:container flex space-y-12 mx-auto flex-col justify-center items-center'>
          {/* First Grid Container */}
          <div className='md:grid grid-cols-6 max-w-5xl self-start'>
            <div className='col-start-1 col-end-5 row-start-1 row-end-2'>
              <Image className='w-full' src="/images/voluntarios.jpg" alt='Voluntariado' width='640' height='427' />
            </div>
            <div className='col-start-4 col-end-7 bg-purple row-start-1 row-end-2 md:my-8 p-5'>
              <h3 className='text-3xl text-white md:mt-20 mb-10'>Voluntariado</h3>
              <p className='text-white'>Siempre buscamos manos fraternas que nos ayuden a cambiar la realidad de las familias salvadoreñas para ejecutar una variedad de proyectos desde asistir con programas de educación hasta desarrollar sus propias ideas de cambio en la sociedad.</p>
            </div>
          </div>
          {/* Second Grid Container */}
          <div className='md:grid grid-cols-6 max-w-5xl self-end'>
            <div className='col-start-3 col-end-7 row-start-1 row-end-2'>
              <Image className='w-full' src="/images/pasantias.jpg" alt='Pasantías' width='640' height='427' />
            </div>
            <div className='col-start-1 col-end-4 bg-royal row-start-1 row-end-2 md:my-8 p-5'>
              <h3 className='text-3xl text-white md:mt-20 mb-10 text-right'>Pasantías y oportunidades laborales</h3>
              <p className='text-right text-white'>Una pasantía en FUNDAMAFRA es una experiencia única, parte de trabajar de cerca con nuestro staff y voluntarios, nuestros interinos pueden completar un proyecto de su propia creación.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}