'use client'
import React, { useState } from "react";
import {Input,Button} from "@/app/components/atoms"
import { X } from "lucide-react";
import { PopupAppEditProps } from "@/types";

const PopupAppEdit = ( { isOpen, onClose,Name,isEditing }:PopupAppEditProps) => {
    const [appName, setAppName] = useState(Name);

    const save = () => {
        console.log("Saved App Name:", appName);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" >
            <div className="max-w-md w-full bg-white  p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                    {isEditing==true && (<h2 className="text-xl font-bold"> Edit your app</h2>)}
                    {isEditing==false && (<h2 className="text-xl font-bold"> Create your app</h2>)}
                        <X onClick={onClose} size={20} />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 ">App name</label>
                    <Input
                        value={appName}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAppName(e.target.value)}
                        className="mt-1 w-full p-2 "
                    />
                </div>
                <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                        {isEditing==true && <Button className="bg-yellow-400 hover:bg-yellow-600" onClick={save}>Edit </Button>}
                       {isEditing==false && <Button className="bg-green-400 hover:bg-green-600" onClick={save}>Create</Button>}
                </div>
            </div>
        </div>
    );
};

export default PopupAppEdit;