import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './components/pages/HomePage.jsx'
import SBDpage from "./components/pages/SBDpage.jsx"
import DMJpage from "./components/pages/DMJPage.jsx";
import OSpage from "./components/pages/OSPage.jsx";

export default function App() {
  return (
      <div classname="w-screen h-screen">
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/sbd" element={<SBDpage />} />

          <Route path="/dmj" element={<DMJpage />} />

          <Route path="/os" element={<OSpage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
