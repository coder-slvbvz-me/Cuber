'use client'
import { useState } from "react";
import { Button } from "@/app/components/atoms";
import {Moon, Sun, Folder, ArrowLeft} from "lucide-react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight, gruvboxDark } from "@codesandbox/sandpack-themes";
import Link from "next/link";

export default function CodeEditor() {
    const [theme, setTheme] = useState("light");
    const [files] = useState({
        "/index.tsx": {
            code: "console.log('Hello, world!');",
            active: true,
        },
    });

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <div className={`min-h-screen p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
            <div className="flex justify-between items-center mb-4">
                <Link href="/pages/dashboard"><Button className="flex items-center gap-2">
                    <ArrowLeft size={20} />
                </Button></Link>
                <Button onClick={toggleTheme} className="flex items-center gap-2">
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />} Toggle Theme
                </Button>
            </div>
            <div className="flex gap-4">

                    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-4 w-1/4">
                    <div className="p-2">
                        <h2 className="text-lg font-semibold mb-2">Files</h2>
                        <ul>
                            {Object.keys(files).map((file) => (
                                <li key={file} className="cursor-pointer flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                                    <Folder size={16} /> {file}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-4 w-3/4">
                    <div className="p-2">
                        <Sandpack
                            template="react"
                            theme={theme === "dark" ? gruvboxDark : githubLight}
                            files={files}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
