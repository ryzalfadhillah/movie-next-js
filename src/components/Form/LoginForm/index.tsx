"use client"
import React, { useState } from 'react';
import { IconEye, IconEyeSlash } from '@assets/icons';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { encryptAES } from '@utils/crypto';
import satellite from '@services/satellite';
import { useRouter } from 'next/navigation';
import apiLogin from '@services/api/apiLogin';
import { setStorage } from '@store/storage';

interface FormLogin {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup
        .string()
        .email("Format Email tidak sesuai")
        .required("Email harus di isi")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Format Email tidak sesuai"),
    password: yup
        .string()
        .required("Password harus diisi"),
});

const LoginForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<FormLogin>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema),
        mode: "onChange", // kapan ketika validasi itu akan dipanggil 
    });
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        watch
    } = form;

    const watchEmail  = watch("email")

    const onSubmited = (data: FormLogin) => {
        const body = {
            email: encryptAES(data.email),
            password: encryptAES(data.password)
        }

        apiLogin(body)
        .then((res) => {
            setStorage("user", res.data)
            router.push("/")
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmited)}>
            <div className="mb-6 flex flex-col gap-1 w-[-full">
                <label className="text-sm text-[#0A0A0A] font-semibold">NPK</label>
                <input 
                    type="text" 
                    placeholder="NPK"
                    className="h-10 rounded-md border border-[#C2C2C2] px-3 py-[10px]"
                    {...register("email")}
                />
                <p className="text-red-700 text-sm mt-1">{errors.email?.message}</p>
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full relative">
                <label className="text-sm text-[#0A0A0A] font-semibold">Password</label>
                <div className="relative">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Password"
                        className="h-10 rounded-md border border-[#C2C2C2] px-3 py-[10px] w-full"
                        {...register("password")}
                    />
                    <div 
                        className={`absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ${errors.password?.message && 'mb-6'}
`}                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IconEye /> : <IconEyeSlash />}
                    </div>
                    <p className="text-red-700 text-sm mt-1">{errors.password?.message}</p>
                </div>
            </div>
            <div className="mb-6 flex items-center gap-2">                
                <input 
                    type="checkbox" 
                    placeholder="Password"
                    className="h-5 w-5 rounded-md border border-[#C2C2C2] bg-gray-50"
                />
                <label className="text-sm">Remember Me</label>
            </div>
            <button
                type="submit"
                className="bg-[#789461] text-white w-full h-10 rounded-[32px]"
            >
                Login
            </button>
        </form>
        </>
    );
}

export default LoginForm;
