import ContainerProvider from '@components/ContainerProvider';
import Menu from '@components/Menu';
import React from 'react'

export default function Container({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-row bg-[#F5F5F5] min-h-screen'>
            <ContainerProvider>
                <Menu />
                <div className='flex-1 max-md:mb-10'>{children}</div>
            </ContainerProvider>
        </div>
    )
}
