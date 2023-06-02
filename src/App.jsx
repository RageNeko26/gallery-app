import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Concept from "./components/Concept"
/*
Todo:
1. Fix responsive (Done)
2. Navbar Desktop (Done)
2. Router

 */

function App() {
  return (
       <Routes>
           <Route index element={<HomePage />} />
           <Route path="/concept" element={<Concept />} />
       </Routes>
    )
 
}

export default App;

