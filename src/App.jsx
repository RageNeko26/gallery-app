import { Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import ConceptPage from "./pages/ConceptPage"
import Navbar from "./components/Navbar"
import ExtraMenu from "./components/ExtraMenu"
import IlustrationPage from "./pages/IlustrationPage"
/*
Todo:
1. Fix responsive (Done)
2. Navbar Desktop (Done)
2. Router

 */

function App() {
    const location = useLocation()

     // Location state
     const [currentLocation, setCurrentLocation] = useState(location)

    // Style state
    const [transition, setTransition] = useState("fadeInRoute")
   
    // Styling state (is mess up as hell!!)
    const [hamburger, setHumberger] = useState("block mx-4 transition ease-in-out my-2 px-6 h-0.5 bg-slate-600")
  	const [styleMenu, setStyleMenu] = useState("overflow-hidden flex flex-col gap-y-16 h-0 justify-center items-center lg:hidden")
  	const [styleLink, setStyleLink] = useState("transition ease-in duration-300 text-2xl font-bold opacity-0 lg:hidden");
  	const [visibilityContent, setVisibilityContent] = useState(true);

    const toggleMenu = () => {
	    if(hamburger.includes("cross")) {
	        setHumberger(previous => {
	          return previous.replace("cross", " ")
	        })
	        setStyleMenu(previous => {
	          return previous.replace("h-screen", "h-0")
	        })
	        setStyleLink(previous => {
	          return previous.concat(" ", "opacity-0")
	        })
	        setVisibilityContent(true);
	    } else {
	        setHumberger(previous => {
	         return previous.concat(" ", "cross")
	        })
	        setStyleMenu(previous => {
	          return previous.replace("h-0", "h-screen")
	        })
	        setStyleLink(previous => {
	          return previous.replace("opacity-0", " ")
	        })
	        setVisibilityContent(false)
	    }
    
  }

    useEffect(() => {
        if(location !== currentLocation) {
          setTransition("fadeOutRoute")
          setHumberger(previous => {
	          return previous.replace("cross", " ")
	        })
	        setStyleMenu(previous => {
	          return previous.replace("h-screen", "h-0")
	        })
	        setStyleLink(previous => {
	          return previous.concat(" ", "opacity-0")
	        })
	        setVisibilityContent(true)
        }

        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
          if(e.matches) {
            setVisibilityContent(true);
          }
        })


    }, [location, currentLocation])

    return (
      <div className="font-main">
       <Navbar handler={toggleMenu} hamburger={hamburger}/>
       <ExtraMenu styleMenu={styleMenu} styleLink={styleLink}/>
       <div className={transition} onAnimationEnd={() => {
        if(transition == "fadeOutRoute") {
            setTransition("fadeInRoute")
            setCurrentLocation(location)
        }
       }}>
        
        <Routes>
            <Route index element={<HomePage visibility={visibilityContent}/>} />
            <Route path="/concept" element={<ConceptPage />} />
            <Route path="/ilustration" element={<IlustrationPage />} />

        </Routes>
       </div>
       </div>
        )
 
}

export default App;

