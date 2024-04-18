import Link from 'next/link';
import React, { useState } from 'react';
import { menuInterface } from '@interfaces/menuInterface';

export default function ListMenu({
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
            className={`flex min-w-32 my-3 p-1 rounded-md cursor-pointer ${hoverStatus[item.path] || pathname === item.path ? 'bg-[#F8EDFA]' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={item.path} className="flex gap-2 justify-center items-center font-bold">
                <item.icon color={hoverStatus[item.path] || pathname === item.path ? "#789461" : "#404040"} />
                <p className={hoverStatus[item.path] || pathname === item.path ? "text-[#789461]" : ""}>{item.name}</p>
            </Link>
        </li>
    );
}
