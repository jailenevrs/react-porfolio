import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";


function App(){
    return <div className="App" >
        <Router>
            <Navbar/>
            <div>  </div>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path = "/AboutMe" element = {<AboutMe />} />
                <Route path = "/Portfolio" element = {<Portfolio />} />
                <Route path = "/Contact" element = {<Contact />} />
                <Route path = "/Resume" element = {<Resume/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>
}


export default App;