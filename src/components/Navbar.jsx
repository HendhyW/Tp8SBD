// import Logo from "../assets/logo.svg";

// export function Navbar(){
//     return(
//         <nav className="bg-black text-white flex justify-between p-4">
//             <div className="container flex items-center justify-between">
//                 <img src={Logo} className=""/>
                
//             </div>

//         </nav>
//     )
// }

import Logo from "../assets/logo.svg";

export default function Navbar() {
    return (
        <nav className="bg-black text-white p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
            <div className="flex items-center transform transition duration-400 hover:scale-105">
                <img href="#" src={Logo} className="h-12 w-12 " />    
                <span href="#" className="ml-4 text-xl font-semibold ">Network Laboratory</span>
            </div>
            <ul className="flex space-x-4 text-white text-xl">
                <a href="#" className="text-white hover:text-[#525869] hover:scale-105">Home</a>
                <a href="#sbd" className="text-white hover:text-[#525869] hover:scale-105">SBD</a>
                <a href="#dmj" className="text-white hover:text-[#525869] hover:scale-105">DMJ</a>
                <a href="#os" className="text-white hover:text-[#525869] hover:scale-105">OS</a>    
            </ul>
        </nav>
    );
}
