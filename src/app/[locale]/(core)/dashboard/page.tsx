'use client'
import React, {useState} from 'react';

import {
    Header,
    Sidebar
} from "@/app/components/molecules";
import {Button} from "@/app/components/atoms";
import {AppCard} from "@/app/components/molecules/AppCard";
import {PopupAppEdit} from "@/app/components/organisms";

const Page = () => {
    const initialApps = [
        { id: 0, name: 'New app 1', description: "test-1 apps-wa141qsa21"},
        { id: 1, name: 'New app 2', description: "test-2 apps-wqrty35rete3" },
        { id: 2, name: 'New app 3', description: "test-3 apps-7346252rt"}
    ];
    const [isPopupOpenCreate, setIsPopupOpenCreate] = useState(false);
    const openPopupCreate = () => setIsPopupOpenCreate(true);
    const closePopupCreate = () => setIsPopupOpenCreate(false);
    return (
       <>

        <div className="flex flex-row h-screen w-screen items-start justify-start">
            <Sidebar />
            <div className="flex flex-col">
                <Header title="Dashboard" name="Ivan" />
                <div className="px-[36px] pt-[24px] pb-[48px]">
               <div className="flex flex-row gap-x-[36px] items-center">
                    <h4 className="text-2xl text-[#1C274C] font-extrabold font-inter">Application</h4>
                    <button className="btn-primary bg-[#F6F6F6] h-[45px] w-[150px] font-bold border-[1px] border-gray-300 text-[#1C274C]" onClick={openPopupCreate}>+ Create an App</button>
               </div>
                    <div className="flex flex-row flex-wrap gap-y-[36px] mt-[36px]">
                    {initialApps.map((app, index) => (
                     <div className="app-card p-4 flex flex-row items-center" key={index}>
                         <AppCard name={app.name} title={app.description} />
                     </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
           {isPopupOpenCreate && (

               <div
                   className="fixed inset-0 bg-black opacity-50 z-40"
                   onClick={closePopupCreate}
               />
           )}


           <PopupAppEdit
               isOpen={isPopupOpenCreate}
               onClose={closePopupCreate}

               isEditing={false}
           />
           </>
    );
};

export default Page;