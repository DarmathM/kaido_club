import Nav from "./Nav";
import Hero from "./Hero";
import { Showroom } from "./Showroom";
import { Gallery } from "./Gallery";
import { Sidebar } from "./components/SideBar";
import { useState } from "react";



function App() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
        <Sidebar isOpen={isOpen} onClose={()=> setisOpen(false)}/>
        <Nav onMenuClick={()=> setisOpen(true)}/>
        
        <Hero />
        <Showroom />
        <Gallery />

    </>
  );
}

export default App;
