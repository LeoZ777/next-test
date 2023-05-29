import React from 'react'
import Search from './Search'

export default function Navbar() {
  return (
    <div className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
      Navbar
      <Search />
    </div>
  )
}
