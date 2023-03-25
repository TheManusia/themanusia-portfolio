import React from "react";
import {About} from "./components/About";
import {Skill} from "./components/Skill";
import {Navbar} from "./components/Navbar";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main className="relative overflow-y-scroll no-scrollbar">
                <About/>
                <Skill/>
                <Education/>
                <Experience/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;