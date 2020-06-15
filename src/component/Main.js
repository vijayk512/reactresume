import React from "react"

import About from "./About"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Interest from "./Interest";
import Awards from "./Awards";

function Main() {
    return(
        <div className="container-fluid p-0">
            <About />
            <hr className="m-0"/>
            <Experience />
            <hr className="m-0"/>
            <Education />
            <hr className="m-0"/>
            <Skills />
            <hr className="m-0"/>
            <Interest />
            <hr className="m-0"/>
            <Awards />

        </div>
    )
}

export default Main