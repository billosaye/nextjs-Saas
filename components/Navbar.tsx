import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'

const navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image 
            src="/images/logo.svg" 
            alt='logo' 
            width={46} 
            height={44}
            />           
        </div>
      </Link>
      <div className='flex items-center gap-8'></div>
           <NavItems />
           <button className='bg-primary text-white px-4 py-2 rounded-md'>Register</button>
    </nav>
  )
}

export default navbar