'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Header, Sidebar } from "@/components/molecules";
import { GrView } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";
import { SecuritySettings, UserSettings } from '@/components/organisms';
import clsx from "clsx";

const Page = () => {
    const [tab, setTab] = useState("Settings");

    const tabs = [
        { name: "Overview", icon: <GrView size={21} /> },
        { name: "Settings", icon: <CiSettings size={21} /> },
        { name: "Security", icon: <MdLockOutline size={21} /> }
    ];

    return (
        <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header title="Dashboard" name="Ivan" />
                <div className="flex h-[calc(100vh-75px)]">
                    {/* Sidebar Navigation */}
                    <div className="flex flex-col items-center pt-4 px-2 gap-2 border-r border-gray-300">
                        {tabs.map(({ name, icon }) => (
                            <Button
                                key={name}
                                variant="outline"
                                onClick={() => setTab(name)}
                                className={clsx(
                                    "flex items-center justify-start gap-4 w-48 px-4 py-2 text-[15px] font-normal border rounded-none transition",
                                    "border-gray-400 bg-gray-200 text-[#1C274C] hover:bg-[#1C274C] hover:text-white",
                                    tab === name && "bg-[#1C274C] text-white"
                                )}
                            >
                                {icon} {name}
                            </Button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1">
                        {tab === 'Settings' && <UserSettings />}
                        {tab === 'Overview' && <div>Overview</div>}
                        {tab === 'Security' && <SecuritySettings />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
