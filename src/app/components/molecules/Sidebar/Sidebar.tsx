'use client'
import React from 'react';
import {MainLogo, UserProfile,DashboardIcon} from "@/app/components/svg";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const Sidebar = () => {
    const PageName = usePathname().split('/')[2];
    console.log(PageName)
    return (
        <div className="sidebar h-screen border-r-2 border-[#E6E6E6] ">
            <MainLogo className="m-[19px]"/>
            <div className="border-b-2  border-[#E6E6E6]"></div>
            {PageName === 'dashboard' ? (
                <Link href="/pages/dashboard"><div className="py-[10px] px-[19px] hover:cursor-pointer bg-[#E6E6E6] hover:bg-[#E6E6E6]"><DashboardIcon color={"#1C274C"}/></div></Link>
            ) : (
                <Link href="/pages/dashboard"><div className="py-[10px] px-[19px] hover:cursor-pointer hover:bg-[#E6E6E6]"><DashboardIcon color={"#1C274C"}/></div></Link>
            )}
            {PageName === 'userProfile' ? (
                <Link href="/pages/userProfile"><div className="py-[10px] px-[19px] hover:cursor-pointer bg-[#E6E6E6] hover:bg-[#E6E6E6]"><UserProfile/></div></Link>
            ) : (
                <Link href="/pages/userProfile"><div className="py-[10px] px-[19px] hover:cursor-pointer hover:bg-[#E6E6E6]"><UserProfile/></div></Link>
            )}



        </div>

    );
};

export default Sidebar;