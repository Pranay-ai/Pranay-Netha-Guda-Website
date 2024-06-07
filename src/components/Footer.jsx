import { createPortal } from "react-dom"
export default function Footer() {
    return createPortal (
        <div className="w-full h-fit py-3 px-4 bg-gradient-to-r from-purple-300 via-slate-200 to-indigo-300 ">
            <p className="text-md font-mono">Copyright 2024 Guda Pranay Netha</p>
        </div>, document.getElementById("footer")
    )
}