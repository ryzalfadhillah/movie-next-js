import { LogoBerijalan } from '@assets/logo'
import { LoginForm } from '@components/Form'
import React from 'react'

export const metadata = {
    title: 'Login'
}

export default function Login() {
    return (
        <>
        {/* mobile */}
        <div className="lg:hidden">
            <div className="mt-[-1100px] flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden">
            <div className="min-w-screen flex h-[1265px] w-[1265px] items-end justify-center rounded-b-full bg-[#789461] p-10">
                <LogoBerijalan />
            </div>
            <div className="mb-10 mt-14 w-full px-10">
                <LoginForm />
            </div>
            </div>
        </div>

        {/* web */}
        <div className="max-lg:hidden">
            <div className="flex h-screen items-center justify-center space-x-40 overflow-hidden">
            <div className="grow">
                <div className="flex w-full justify-center">
                <div className="max-mx-10 w-2/3">
                    <LoginForm />
                </div>
                </div>
            </div>
            <div className="flex h-[1400px] w-1/2 items-center justify-center rounded-l-full bg-[#789461]">
                <LogoBerijalan />
            </div>
            </div>
        </div>
    </>
    )
}
