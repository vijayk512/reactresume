import React from "react"

function Education() {
    return(
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Northwestern Polytechnic University</h3>
                        <div className="subheading mb-3">Master's of Science</div>
                        <div>Computer Science</div>
                        <p>GPA: 4.0</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">August 2015 - December 2016</span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">University of Pune</h3>
                        <div className="subheading mb-3">Computer Engineering</div>
                        <p>GPA: 3.57</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">August 2009 - May 2010</span></div>
                </div>
            </div>
        </section>

    )
}

export default Education