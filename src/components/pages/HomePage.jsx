import SBDLogo from '../../assets/SBDLogo.svg'
import DMJLogo from '../../assets/DMJLogo.svg'
import OSLogo from '../../assets/OSLogo.svg'
import Navbar from '../../components/Navbar'
import { CarouselNetlab } from '../carousel.jsx'

export default function HomePage() {
    const slides = [
        { image: SBDLogo, text: "Sistem Basis Data" },
        { image: DMJLogo, text: "Desain Manajemen Jaringan" },
        { image: OSLogo, text: "Sistem Operasi" }
    ];

    return (
        <div className="bg-[#FFFFFF] text-white h-screen w-screen">
        <Navbar/>  
        <div className="w-[100%] h-[100%] m-auto pt-11">
        <CarouselNetlab slides={slides}/>
        </div>
    </div>
    
    )
}
