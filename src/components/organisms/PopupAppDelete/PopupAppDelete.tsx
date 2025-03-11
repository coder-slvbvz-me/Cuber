'use client';

import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PopupAppEditProps } from "@/types";

const PopupAppDelete = ({ isOpen, onClose, Name }:PopupAppEditProps) => {
    const [inputValue, setInputValue] = useState("");
    const appName = Name || "new-app-2-lahlpm";

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-md bg-white  p-6 rounded-lg shadow-xl">
                        <div className="flex justify-between items-center">
                            <Dialog.Title className="text-lg font-bold text-gray-900 ">Are you sure?</Dialog.Title>
                            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 ">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <p className="bg-red-100 text-red-700 p-2 rounded text-sm">Unexpected bad things will happen if you don&#39;t read this!</p>
                            <p className="mt-4 text-gray-700  text-sm">
                                This action <strong>CANNOT</strong> be undone. This will permanently delete the <strong className="text-black ">{appName}</strong> file, wiki, issues and comments, and remove all collaborator associations.
                            </p>
                            <label className="block mt-4 text-sm font-medium text-gray-700 ">Please type in the name of the application to confirm.</label>
                            <Input
                                value={inputValue}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  "
                            />
                            <Button
                                disabled={inputValue !== appName}
                                className="w-full mt-4 bg-red-600 text-white py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition"
                            >
                                I understand, delete this application
                            </Button>
                            <Button onClick={onClose} className="w-full mt-2 text-gray-600  py-2 rounded-md hover:bg-gray-100  transition">
                                Discard
                            </Button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
};

export default PopupAppDelete;
