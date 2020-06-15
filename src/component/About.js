import React from "react"

function About() {
    return(
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">Vijay <span className="text-primary">Panwar</span></h1>
                <div className="subheading mb-5">14544 Newport Ave, Unit 1 Tustin CA - 92780 - <a
                    href="mailto:vijayk512@email.com">vijayk512@email.com</a></div>
                <p className="lead mb-1">
                    I am well Focused, Goal-Oriented, Equipped with Powerful Communication and very well disciplined
                    person with high fully Committed to contribute towards the new generation in Software Industry.
                </p>
                <ul className="mb-5">
                    <li>
                        Experienced Software Developer with CI, CD, deployment and immense knowledge of process
                        improvement methodologies, and problem solving techniques with the ability to act independently
                        and in team to analyze situations, recommend ideas and build consensus for solutions.
                    </li>
                    <li>
                        I hold a Masters in Computer Science and Bachelors in Computer Engineering. My professional
                        experience include web development, software engineering, programming in web page, resolved the
                        bugs, requirement gathering.
                    </li>
                </ul>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/vijay-panwar-8b6b6751/"><i
                        className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/vijayk512"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>

    )
}

export default About