import React from 'react'
import "./styles/Banner.css"


const Banner = () => {
    return (
        <div>
            
            <section className="banner" id="home">

                <section>
                    <div className="banner_conter">
                        <h1 className="banner_p">Welcome to my portfolio</h1>
                    </div>
                </section>

                <section>

                    <div className="banner_img" >
                        <img src="/img/astro.png" alt="" />
                    </div>

                    <div className="text">
                        <h3 className="text_one">Hi</h3>
                        <h4 className="text_two">I'am a frontend developed</h4>
                        <span className="text_three">I dedicate myself to the design and development of frontend</span>

                    </div>
                </section>

            </section>

        </div>
    )
}

export default Banner