import SBDLogo from './assets/SBDLogo.svg'
import DMJLogo from './assets/DMJLogo.svg'
import OSLogo from './assets/OSLogo.svg'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>  
      <div id="sbd" className="h-[100%] w-[100vw] bg-[#4e5057] text-white text-3xl flex flex-col jutify-center">
        <div className="h-auto w-[95vw] m-auto  rounded-xl flex  items-center justify-left py-5 md:flex-row pt-20">
          <img src={SBDLogo} className="h-64 w-64 m-auto" />
          <div className="h-auto w-auto p-5 item-center justify-left">
            <h1 className="text-5xl m-4 font-bold flex-col">Sistem Basis Data</h1>
            <div className="bg-black rounded-3xl">
              <h1 className="text-3xl m-4 text-white pt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
              <h1 className="text-3xl m-4 text-white pb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
            </div>
          </div>
        </div>
        <br></br>
        <div  id="dmj" className=" h-auto w-[95vw] m-auto  rounded-xl flex  items-center justify-left py-5 md:flex-row pt-40">
          <div className="h-auto w-auto p-5 item-center justify-left">
            <h1 className="text-5xl m-4 font-bold flex-col">Desain Manajemen Jaringan</h1>
            <div className="bg-black rounded-3xl">
              <h1 className="text-3xl m-4 text-white pt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
              <h1 className="text-3xl m-4 text-white pb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
            </div>
          </div>
          <img src={DMJLogo} className="h-64 w-64 m-auto" />
        </div>
        <br></br>
        <div id="os" className="h-auto w-[95vw] m-auto  rounded-xl flex  items-center justify-left py-5 md:flex-row pt-40">
          <img src={OSLogo} className="h-64 w-64 m-auto" />
          <div className="h-auto w-auto p-5 item-center justify-left">
            <h1 className="text-5xl m-4 font-bold flex-col">Sistem Operasi</h1>
            <div className="bg-black rounded-3xl">
              <h1 className="text-3xl m-4 text-white pt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
              <h1 className="text-3xl m-4 text-white pb-3">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</h1>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
    
  )
}