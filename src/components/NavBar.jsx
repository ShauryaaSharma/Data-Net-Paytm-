import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center w-full text-white bg-transparent px-4 py-3 md:px-6 md:py-4'>
        {/* Logo Section */}
        <div className='mb-3 md:mb-0 flex items-center'>
            <Link to="/" className='text-3xl sm:text-4xl font-semibold rounded-full px-4 py-2'>
              <h2>Data Net</h2>
            </Link>
        </div>

        {/* Navigation Links */}
        <div className='w-full md:w-1/2 lg:w-1/4'>
            <ul className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0'>
                <li>
                    <Link to="/contacts" className='text-xl sm:text-2xl rounded-full px-4 py-2 block text-center' id='contact'>
                      Contacts
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='text-xl sm:text-2xl rounded-full px-4 py-2 block text-center' id='about'>
                      About
                    </Link>
                </li>
                <li>
                    <Link to="/creating-team" className='text-xl sm:text-2xl rounded-full px-4 py-2 block text-center' id='cr'>
                      Creating Team
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
