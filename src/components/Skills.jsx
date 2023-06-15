import React from 'react'
import "./styles/Skills.css"

const Skills = () => {
    return (

        <section className="skills" id="skills">
            <h1 className="skills_title">Skills</h1>

            <div className="skills_container">
                <div className="skills_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>HTML</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>CSS</h4>
                                <small className="text_light">Experience</small>
                            </div>
                            
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>React</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="skills_backend">
                <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>MCQL</h4>
                                <small className="text_light">Experience</small>
                            </div>                            
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>Null</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>null</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <i className='bx bx-desktop'></i>
                            <div>
                                <h4>null</h4>
                                <small className="text_light">Experience</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Skills