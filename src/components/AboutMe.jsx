import React from 'react'
import "./styles/aboutMe.css"

const AboutMe = () => {
    return (
        <div>
            <section className="aboutMe" id="aboutMe">
                <div className="aboutMe_container">
                    <h1>About Me</h1>

                    <div className="aboutMe_container_img">
                        <div className="aboutMe_img">
                            <img src="./img/perfil-2.png" alt="" />
                        </div>
                    </div>
                    
                    <p><span>Hi, I'm Carlos Daniel Balanta H.</span>Junior Front-End Developer: with basic knowledge of websites and web applications, programming languages such as HTML, CSS and JavaScript.</p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe