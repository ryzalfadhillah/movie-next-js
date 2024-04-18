import IconSearch from '@assets/icons/iconSearch'
import React from 'react'

interface SearchBarProps extends React.HTMLProps<HTMLFormElement>{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
    onSubmit,
    placeholder = "Search user",
    ...props
}: Readonly<SearchBarProps>
) {
    return (
        <form 
            onSubmit={onSubmit} 
            action="" 
            className='flex items-center justify-center w-full mt-7 '
            {...props}
        >
                <input type="text" placeholder={placeholder} className='rounded-xl px-7 py-2 flex-1'/>
                <button type='submit' className='bg-[#BFF4FD] px-5 py-3 rounded-xl ml-4'>
                    <IconSearch />
                </button>
        </form>
    )
}
