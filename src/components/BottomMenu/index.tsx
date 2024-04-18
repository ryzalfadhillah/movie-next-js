import Link from 'next/link';
import React, { useState } from 'react';
import { menuInterface } from '@interfaces/menuInterface';

export default function BottomMenu({
    item,
    index,
    pathname
}: Readonly<{
    item: menuInterface;
    index: number;
    pathname: string;
}>) {
    const [hoverStatus, setHoverStatus] = useState<{ [key: string]: boolean }>({});

    const handleMouseEnter = () => {
        setHoverStatus({ ...hoverStatus, [item.path]: true });
    };

    const handleMouseLeave = () => {
        setHoverStatus({ ...hoverStatus, [item.path]: false });
    };

    return (
        <li
            key={index}
            className={`w-screen py-4 rounded-md cursor-pointer text-sm}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={item.path} className="flex flex-col gap-2 justify-center items-center font-bold">
                <item.icon color={hoverStatus[item.path] || pathname === item.path ? "#789461" : "#404040"} />
                <p className={hoverStatus[item.path] || pathname === item.path ? "text-[#789461]" : ""}>{item.name}</p>
            </Link>
        </li>
    );
}
