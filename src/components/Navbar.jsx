import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    
    return (
        <nav className="bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
            <div className="flex items-center transform transition duration-400 hover:scale-105" onClick={() => navigate("/")}>
                <img src={Logo} className="h-12 w-12 " />    
                <span className="ml-4 text-xl font-semibold ">Network Laboratory</span>
            </div>
            <ul className="flex space-x-4 text-white text-xl">
                <a href="#" className="text-white hover:text-[#525869] hover:scale-105" onClick={() => navigate("/")}>Home</a>
                <a href="#sbd" className="text-white hover:text-[#525869] hover:scale-105" onClick={() => navigate("/sbd")}>SBD</a>
                <a href="#dmj" className="text-white hover:text-[#525869] hover:scale-105" onClick={() => navigate("/dmj")}>DMJ</a>
                <a href="#os" className="text-white hover:text-[#525869] hover:scale-105" onClick={() => navigate("/os")}>OS</a>    
            </ul>
        </nav>
    );
}
