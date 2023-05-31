import { useState } from "react";
import Navbar from "./components/Navbar";
import ExtraMenu from "./components/ExtraMenu";
import Concept from "./components/Concept";
import './App.css';

function App() {
  const [hamburger, setHumberger] = useState("block mx-4 transition ease-in-out my-2 px-6 h-1 bg-slate-600")
  const [styleMenu, setStyleMenu] = useState("overflow-hidden flex flex-col gap-y-16 h-0 justify-center items-center")
  const [styleLink, setStyleLink] = useState("transition ease-in duration-300 text-2xl font-bold opacity-0 ");

  const toggleMenu = () => {
    if(hamburger.includes("cross")) {
        setHumberger("block mx-4 transition ease-in-out my-2 px-6 h-1 bg-slate-600")
        setStyleMenu("overflow-hidden flex  flex-col gap-y-16 h-0 justify-center items-center")
        setStyleLink("transition ease-in duration-300 text-2xl font-bold opacity-0")
    } else {
        setHumberger("block mx-4 transition ease-in-out my-2 px-6 h-1 bg-slate-600 cross")
        setStyleMenu("overflow-hidden flex flex-col gap-y-16 h-screen justify-center items-center")
        setStyleLink("transition ease-in duration-300 text-2xl font-bold")
    }
    
  }

  return (
    <div className="font-main overflow-hidden">
      {/* Navbar */}
     <Navbar handler={toggleMenu} hamburger={hamburger}/>
     <ExtraMenu styleMenu={styleMenu} styleLink={styleLink}/>
     {/* Main content */}
     <div>
        <Concept />
     </div>
    </div>
  )
}

export default App;

