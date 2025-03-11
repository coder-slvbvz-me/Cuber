'use client'
import React, { useState } from 'react';
import { BsPencil } from "react-icons/bs";
import { DashboardIcon } from "@/components/svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiArrowArcRight } from "react-icons/pi";
import Link from "next/link";
import {PopupAppDelete,PopupAppEdit} from "@/components/organisms";
type Props = {
    title: string;
    name: string;
};

const AppCard = ({ title, name }: Props) => {
    const [isPopupOpenEdit, setIsPopupOpenEdit] = useState(false);
    const [isPopupOpenDelete, setIsPopupOpenDelete] = useState(false);

    const openPopupEdit = () => setIsPopupOpenEdit(true);
    const openPopupDelete = () => setIsPopupOpenDelete(true);

    const closePopupEdit = () => setIsPopupOpenEdit(false);
    const closePopupDelete = () => setIsPopupOpenDelete(false);


    return (
        <>
            <div  className="app-card pl-4 flex h-fit flex-row items-center justify-between gap-x-[25px] border-2 border-[#E6E6E6] hover:border-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500">
                <DashboardIcon className="h-[50px] w-[50px] text-gray-500" color={'#6e6e6e'} />
                <div className="flex flex-col gap-y-[10px]">
                    <h5 className="text-[18px] text-gray-500 font-semibold">{name}</h5>
                    <h5 className="text-[14px] text-gray-400">{title}</h5>
                </div>
                <div className="flex flex-col w-fit items-center justify-between">

                    <div className="border-1 border-gray-300 p-2" onClick={openPopupEdit}>
                        <BsPencil className="text-[20px] text-gray-400 hover:text-green-500" />
                    </div>
                    <div className="border-1 border-gray-300 p-2" onClick={openPopupDelete}>
                        <RiDeleteBin6Line className="text-[20px] text-gray-400 hover:text-[#FF0000]" />
                    </div>
                    <Link href="/pages/editor">
                        <div className="border-1 border-gray-300 p-2">
                            <PiArrowArcRight className="text-[20px] text-gray-400 hover:text-[#1C274C]" />
                        </div>
                    </Link>
                </div>
            </div>


            {isPopupOpenEdit && (

                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={closePopupEdit}
                />
            )}


            <PopupAppEdit
                isOpen={isPopupOpenEdit}
                onClose={closePopupEdit}
                Name={name}
                isEditing={true}
            />
            {isPopupOpenDelete && (

                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={closePopupEdit}
                />
            )}
            <PopupAppDelete isOpen={isPopupOpenDelete} onClose={closePopupDelete} Name={name} />
        </>
    );
};

export default AppCard;
