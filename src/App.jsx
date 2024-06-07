import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="h-full bg-gradient-to-r  from-purple-300 to-indigo-300">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}
