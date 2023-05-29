'use client'

import React, { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [query, setQuery] = useState<string>('')
    const router = useRouter()

    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        setQuery('')
        router.push(`/${query}`)
    }

    return (
        <form className='w-50 flex justify-center md:justify-between'>
        <input 
            onChange={(e) => setQuery(e.target.value)} 
            type="text" 
            className='bg-white p-2 w-80 text-xl text-black rounded-xl' 
        />
        <button onClick={handleClick}>Go</button>
        </form>
    )
}
