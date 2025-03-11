import React,{useState} from 'react';
import {  Mail, ShieldCheck, LogOut } from "lucide-react";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
const SecuritySettings = () => {
    const [securityEmail, setSecurityEmail] = useState("");

    return (
        <div className="w-full mx-auto p-6 max-w-screen-xl">
            <h2 className="text-2xl font-bold">Security Settings</h2>
            <div className={`bg-white shadow-md rounded-lg p-6`}>
                <div className={`mt-4 space-y-4`}>
                    <div>
                        <label className="block text-sm font-medium">Two-step verification</label>
                        <p className="text-sm text-gray-600">Enhance your account security by enabling two-step verification.</p>
                        <div className="flex items-center gap-2 border rounded-md px-2 py-1 mt-2">
                            <Mail size={18} />
                            <Input placeholder="Enter your email" value={securityEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecurityEmail(e.target.value)} className="border-none" />
                        </div>
                        <Button variant="outline" className="mt-2 flex items-center gap-2">
                            <ShieldCheck size={18} /> Update
                        </Button>
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <label className="block text-sm font-medium">Log out of all devices</label>
                        <p className="text-sm text-gray-600">Log out of all devices you are currently logged into.</p>
                        <Button variant="outline" className="mt-2 flex items-center gap-2">
                            <LogOut size={18} /> Log out everywhere
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecuritySettings;