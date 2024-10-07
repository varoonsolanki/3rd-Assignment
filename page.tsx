import Link from 'next/link'
import React from 'react'
 
const  Home = () => {
  return (
  <>
  <div className='bg-amber-400 text-3xl'>Home Page</div>
  <h1 className='text-3xl text-center'>Wellcome To home</h1>
   <Link href="./components/about"><button className='bg-blue-200'>About</button></Link> <br />
   <Link href="./components/contact"><button className='bg-sky-500'>Contact</button></Link> <br />
   <Link href="./components/navbar"><button className='bg-lime-500'>Navbar</button></Link><br />
   <Link href="./components/footer"><button className='bg-indigo-400'>footer</button></Link>
   
  </>
  )
}

export default  Home