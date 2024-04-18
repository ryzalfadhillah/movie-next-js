"use client"
import { IconLogout, IconMoon, IconUser } from "@assets/icons";
import { dataMenu } from "@utils/data/dataMenu";
import ListMenu from "@components/ListMenu";
import BottomMenu from "@components/BottomMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Menu() {

    const pathname = usePathname();

    return (
        <div className={`${pathname === "/login" ? "hidden":"md:mr-60"}`}>
            {/* Web */}
            <ul className="bg-white h-screen px-3 py-6 w-60 fixed max-md:hidden">
                {/* Profile */}
                <li className="mb-10 m-2 p-3">
                    <div className="justify-between flex flex-row items-center w-fit">
                        <Link href={"/user"} className="bg-[#789461] w-fit mr-3 p-1 rounded-full justify-between flex flex-row items-center">
                            <IconUser />
                        </Link>
                        <p className="text-[#404040]">Biko Maryono</p>
                    </div>
                </li>

                {/* Menu items  */}
                {
                    dataMenu.map((item, index) => (
                        <ListMenu 
                            index={index}
                            key={index}
                            item={item}
                            pathname= {pathname}
                        />
                    ))
                }

                {/* Logout */}
                <li className="absolute bottom-0 mb-10">
                    <div className="flex flex-row justify-between items-center w-48">
                        <Link href="/login" className="bg-[#789461] rounded-lg flex flex-row justify-between items-center p-2 hover:scale-110">
                            <IconLogout className="mr-2" />
                            <p className="text-white">Logout</p>
                        </Link>
                        <button>
                            <IconMoon />
                        </button>
                    </div>
                </li>
            </ul>

            {/* Mobile */}
            <ul className="flex bg-white w-screen px-3 fixed md:hidden bottom-0 z-10">
                {/* Menu items  */}
                {
                    dataMenu.map((item, index) => (
                        <BottomMenu
                            index={index}
                            key={index}
                            item={item}
                            pathname= {pathname}
                        />
                    ))
                }
            </ul>
        </div>
    );
}
