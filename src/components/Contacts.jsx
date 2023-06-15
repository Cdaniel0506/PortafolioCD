import React from 'react'
import "./styles/Contacts.css"


const Contacts = () => {

    return (
        <div className="contacts">
            <section id="contacts">
                <h1 className='title'>Contact Me</h1>
                <h3 className='text2'>You can contact me by this means</h3>

                <div className="contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <i className='icon bx bxs-envelope' ></i>
                            <h4>Email</h4>
                            <h5>carlos2000.cdb@gmail.com</h5>
                        </article>
                        <article className="contact_option">
                            <i className='icon bx bxl-linkedin-square'></i>
                            <h4>Linkedin</h4>
                            <h5>Carlos Daniel Balanta</h5>
                            <a href="https://www.linkedin.com/in/carlos-daniel-balanta-herrera-81861725b/" target="_blank">Set a message</a>
                        </article>
                        <article className="contact_option">
                            <i className='icon bx bxl-instagram-alt' ></i>
                            <h4>Instagram</h4>
                            <h5>c_daniel</h5>
                        </article>
                    </div>
                    <div className='contacts_img'>
                        <img src="/img/astro3.png" alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contacts
