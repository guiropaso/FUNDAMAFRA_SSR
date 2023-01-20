import {BsFacebook, BsInstagram} from 'react-icons/bs'
import Image from 'next/image'
import Logo from '@/public/images/fundamafra-logoweb.png'

export default function Footer() {
  return (
    <footer>
      <div className='md:flex my-10 flex-col'>
          <div className='mb-5 w-3/5 max-w-xs md:w-2/5 md:max-w-sm mx-auto'>
            <Image className="mx-auto w-3/5 md:w-2/4" src={Logo} alt='FUNDAMAFRA logo'/>
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
