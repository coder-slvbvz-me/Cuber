"use client"
import { useState } from "react";
import { Upload, Mail, Lock, Trash } from "lucide-react";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export default function UserSettings() {
    const [firstName, setFirstName] = useState("Ivan");
    const [lastName, setLastName] = useState("UDEX");
    const [email, setEmail] = useState("ivan@udex.app");

    return (
        <div className="w-full mx-auto p-6 max-w-screen-xl">
            <h2 className="text-2xl font-bold">Account Settings</h2>
            <div className={`bg-white shadow-md rounded-lg p-6`}>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <Upload size={20}/>
                    </div>
                    <Button variant="outline">Upload new picture</Button>
                </div>
                <div className={`mt-4 space-y-4`}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">First name</label>
                            <Input value={firstName}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last name</label>
                            <Input value={lastName}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Contact email</label>
                        <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                            <Mail size={18}/>
                            <Input value={email}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                   className="border-none"/>
                        </div>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Lock size={18}/> Change password
                    </Button>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-sm text-red-600">Before deleting your account, you will first need to delete
                            all your applications!</p>
                        <Button variant="destructive" className="mt-2 flex items-center gap-2">
                            <Trash size={18}/> Delete account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
