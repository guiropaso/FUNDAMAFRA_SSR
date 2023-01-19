import {BsFacebook, BsInstagram} from 'react-icons/bs'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='md:flex my-10 flex-col'>
          <div className='mb-5'>
            <Image className="m-auto" src='/images/fundamafra-logoweb.png ' alt='FUNDAMAFRA logo' width='133' height='225' />
          </div>
          <div className='flex flex-row justify-center space-x-4 text-3xl items-center'>
            <div>
              <a className='text-mainBlue hover:text-royal' href="#">
                <BsFacebook />
              </a>
            </div>
            <div>
              <a className='text-mainBlue hover:text-royal' href="#">
                <BsInstagram />
              </a>
            </div>
          </div>
          <div>
            <p className='text-zinc-500 mt-5 text-sm text-center'>El Salvador 2023</p>
          </div>
      </div>
    </footer>
  )
}
