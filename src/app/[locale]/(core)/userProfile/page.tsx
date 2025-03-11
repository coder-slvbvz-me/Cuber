'use client'

import React, {useState} from 'react';
import {Button} from "@mui/material"
import {
    Header,
    Sidebar
} from "@/app/components/molecules";
import {GrView} from "react-icons/gr";
import {CiSettings} from "react-icons/ci";
import {MdLockOutline} from "react-icons/md";
import {SecuritySettings, UserSettings} from '@/app/components/organisms';

const Page = () => {
    const [tab, setTab] = useState("Settings");
    return (
        <div className="flex flex-row h-screen w-screen items-start justify-start">
            <Sidebar />
            <div className="flex flex-col ">
                <Header title="Dashboard" name="Ivan" />
               <div className='flex flex-row  '>
                   <div
                       className='flex flex-col pt-4 ml-2 pr-2 gap-y-2 border-r-2 border-[#E6E6E6] h-[calc(100vh-75px)]'>
                       <Button variant='outlined' sx={{
                           color: "#1C274C",
                           borderRadius: '0',
                           border: '1px solid #a9a9a9',
                           backgroundColor: "#efefef",
                           textTransform: 'none',
                           width: '200px',
                           fontWeight: 'bold',
                           fontSize: '16px',
                           justifyContent: 'flex-start',
                           '&:hover': {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},
                           },
                           ...(tab === 'Overview' && {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},})
                       }} startIcon={<GrView size={21}/>} onClick={() => setTab('Overview')}>Overview</Button>
                       <Button variant='outlined' sx={{
                           color: "#1C274C",
                           borderColor: "#a9a9a9",
                           backgroundColor: "#efefef",
                           borderRadius: '0',
                           textTransform: 'none',
                           width: '200px',
                           fontWeight: 'bold',
                           fontSize: '16px',
                           justifyContent: 'flex-start',
                           '&:hover': {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},
                           },
                           ...(tab === 'Settings' && {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},})
                       }} startIcon={<CiSettings size={21}/> } onClick={() => setTab('Settings')}>Settings</Button>
                       <Button variant='outlined' sx={{
                           color: "#1C274C",
                           borderColor: "#a9a9a9",
                           borderRadius: '0',
                           backgroundColor: "#efefef",
                           textTransform: 'none',
                           width: '200px',
                           fontWeight: 'bold',
                           fontSize: '16px',
                           justifyContent: 'flex-start',
                           '&:hover': {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},
                           },
                           ...(tab === 'Security' && {
                               backgroundColor: "#1C274C",
                               color: "#ffffff",
                               svg: {color: "#ffffff"},
                           })
                       }} startIcon={<MdLockOutline size={21}/>} onClick={() => setTab('Security')}>Security</Button>
                   </div>
                   <div>
                       {tab === 'Settings' ? (
                           <UserSettings />
                       ) : tab === 'Overview' ? (
                           <div>Overview</div>
                       ) : tab==='Security' ? (
                           <SecuritySettings/>
                       ):null}
                   </div>
               </div>



            </div>
        </div>
    );
};

export default Page;