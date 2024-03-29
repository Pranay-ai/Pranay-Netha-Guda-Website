import { createPortal } from "react-dom"
export default function Footer() {
    return createPortal (
        <div className="Footer">
            <p>Copyright 2024 Guda Pranay Netha</p>
        </div>, document.getElementById("footer")
    )
}