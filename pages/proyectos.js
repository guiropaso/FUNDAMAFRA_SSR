import Link from 'next/link'
import Image from 'next/image'
import {FaMedal, FaChild, FaBook, FaBlackTie, FaChalkboardTeacher} from 'react-icons/fa'

export default function Proyectos() {
  return (
    <>
      <section id='proyectos-banner' className='bg-blend-multiply'>
        <div className='container mx-auto flex flex-col py-36 justify-center items-center'>
          <h2 className='text-5xl text-center font-bold text-pink-500'>AYÚDANOS <span className='text-5xl font-bold text-white'> A CUMPLIR SUEÑOS</span> </h2>
          <p className='text-white mt-2 font-bold text-lg max-w-lg '>Conoce nuestros proyectos</p>
          <p className='text-white mt-5 text-lg px-2 max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem praesentium cum rerum rem libero incidunt, natus, aperiam consequuntur eius necessitatibus hic veniam neque quam dicta odit aliquid quas qui!</p>
        </div>
      </section>

      <section id='proyectos-enfoque'>
        <h3 className='text-center my-20 font-bold text-3xl text-royal'>NUESTRO <span className='text-center my-20 font-bold text-3xl text-mainJam'>ENFOQUE</span></h3>
        <div className='container mx-auto flex flex-col justify-around items-center md:flex-row'>
          <div className='space-y-6 max-w-sm md:max-w-none'>
            <div className='flex justify-center space-x-5 bg-slate-100 items-center flex-row p-5 rounded-md'>
              <div className='text-mainJam'>
                <FaMedal className='text-6xl'/>
              </div>
              <div className='max-w-md'>
                <h4 className='text-3xl mb-5 text-royal'>Aprendizaje Efectivo</h4>
                <p className='text-lg text-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
            <div className='flex justify-center space-x-5 bg-royal text-white items-center flex-row p-5 rounded-md'>
              <div>
                <FaChild className='text-6xl'/>
              </div>
              <div className='max-w-md text-white'>
                <h4 className='text-3xl mb-5'>Niñez y juventud</h4>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
            <div className='flex justify-center space-x-5 bg-slate-100 items-center flex-row p-5 rounded-md'>
              <div className='text-mainJam'>
                <FaBook className='text-6xl'/>
              </div>
              <div className='max-w-md'>
                <h4 className='text-3xl mb-5 text-royal'>Enseñanzas Aplicables</h4>
                <p className='text-lg text-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam quia suscipit. Ratione, ullam!</p>
              </div>
            </div>
          </div>
          <div>
            <Image className='mx-auto mt-10 w-3/4 md:w-full md:mt-0' src="/images/manos.png" alt="manos" width='344' height='350' />
          </div>
        </div>
      </section>

      <section id='proyectos-apadrina' className='bg-mainJam border-b-8 border-royal'>
        <div className='container mx-auto text-center text-white mt-20 py-5'>
          <h4 className='font-bold text-3xl'>WE MAKE A LIVING BY WHAT WE GET. WE MAKE A LIFE BY WHAT WE GIVE.</h4>
          <h5 className='text-sm'>WINSTON S. CHURCHILL</h5>
        </div>
      </section>

      <section id='proyectos-proyectos'>
        <div className='container mx-auto my-20'>
          <h3 className='text-center my-20 font-bold text-3xl text-royal'>PROYECTOS <span className='text-center my-20 font-bold text-3xl text-mainJam'>A EJECUTAR</span></h3>
        </div>
        <div className='container mx-auto flex flex-col space-y-20 justify-center items-center'>
          {/* First Grid Element */}
          <div className='flex flex-col justify-center md:grid grid-cols-7 grid-rows-2 self-end'>
            <div className='col-start-1 max-w-sm col-end-4 row-start-1 my-12 mx-auto row-end-3 z-20 bg-slate-100 p-10 order-3 md:order-none'>
              <FaBook className='text-6xl mb-10 text-mainBlue'/>
              <p className='mb-10'>Enseñanza del MÉTODO DE APRENDIZAJE PERCEPTIVO-DISCRIMINATIVO dirigido a niños y jóvenes con síndrome de Down como base preparatoria para un futuro y exitoso programa de lectura y escritura según el método de enseñanza de María Victoria Troncoso y María Mercedes del Cerro (España).</p>
              <span className='text-sm block font-bold'>A Recaudar</span>
              <span className='text-3xl font-bold text-green-500'>$25,000</span>
            </div>
            <div className='col-start-3 col-end-8 row start-1 row-end-2 order-1 md:order-none'>
              <Image src="/images/p1.jpg" alt="books" width='640' height='286' />
            </div>
            <div className='col-start-4 col-end-8 row start-2 row-end-3 order-2 md:order-none md:m-5'>
              <h3 className='font-bold text-center md:text-left mt-4 md:mt-0 text-3xl mb-4'>Aprendiendo a mi ritmo</h3>
              <div className='text-center md:text-left'>
                <Link className='bg-mainJam rounded-md hover:bg-purple text-white font-bold px-3 py-2' href="/contacto">Patrocinar</Link>
              </div>
            </div>
          </div>
          {/* Second Grid Element */}
          <div className='flex flex-col justify-center md:grid grid-cols-7 grid-rows-2 self-center'>
            <div className='col-start-1 max-w-sm col-end-4 row-start-1 my-12 mx-auto row-end-3 z-20 bg-slate-100 p-10 order-3 md:order-none'>
              <FaBlackTie className='text-6xl mb-10 text-mainBlue'/>
              <p className='mb-10'>Involucramiento de jóvenes del área de bachillerato en la experimentación de primera mano del trabajo realizado por profesionales provenientes de sectores relevantes del área profesional, con el objetivo que el futuro graduado pueda tomar una mejor decisión respecto a su futuro profesional.</p>
              <span className='text-sm block font-bold'>A Recaudar</span>
              <span className='text-3xl font-bold text-green-500'>$19,000</span>
            </div>
            <div className='col-start-3 col-end-8 row start-1 row-end-2 order-1 md:order-none'>
              <Image src="/images/p2.jpg" alt="computer" width='640' height='286'/>
            </div>
            <div className='col-start-4 col-end-8 row start-2 row-end-3 order-2 md:order-none md:m-5'>
              <h3 className='font-bold text-center md:text-left mt-4 md:mt-0 text-3xl mb-4'>Una ventana a mi futuro</h3>
              <div className='text-center md:text-left'>
                <Link className='bg-mainJam rounded-md hover:bg-purple text-white font-bold px-3 py-2' href="/contacto">Patrocinar</Link>
              </div>
            </div>
          </div>
          {/* Third Grid Element */}
          <div className='flex flex-col justify-center md:grid grid-cols-7 grid-rows-2 self-end'>
            <div className='col-start-1 max-w-sm col-end-4 row-start-1 my-12 mx-auto row-end-3 z-20 bg-slate-100 p-10 order-3 md:order-none'>
              <FaChalkboardTeacher className='text-6xl mb-10 text-mainBlue'/>
              <p className='mb-10'>Impartición de talleres didácticos dirigido a padres, madres o cuidadores pertenecientes a comunidades en contextos de riesgo, con el objetivo de brindar herramientas de educación para cambiar la crianza tradicional autoritaria por una crianza positiva.</p>
              <span className='text-sm block font-bold'>A Recaudar</span>
              <span className='text-3xl font-bold text-green-500'>$33,000</span>
            </div>
            <div className='col-start-3 col-end-8 row start-1 row-end-2 order-1 md:order-none'>
              <Image src="/images/p3.jpg" alt="classroom" width='640' height='286' />
            </div>
            <div className='col-start-4 col-end-8 row start-2 row-end-3 order-2 md:order-none md:m-5'>
              <h3 className='font-bold text-center md:text-left mt-4 md:mt-0 text-3xl mb-4'>Eduquemos en positivo</h3>
              <div className='text-center md:text-left'>
                <Link className='bg-mainJam rounded-md hover:bg-purple text-white font-bold px-3 py-2' href="/contacto">Patrocinar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
