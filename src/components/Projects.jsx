import React from 'react'
import "./styles/Projects.css"

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container_txt">
        <h1 className="title">Projects</h1>
        <h5 className="tex">My Recent Work</h5>
      </div>
      

      {/*Card en donde se mostrarn la impagen del portafolio con botones de acceso a ellos  */}
      <div className="card">
        <div className="face front">
          <img src="/img/app1.png" alt="" />
          <div className="Num_Card">
            <h2>1</h2>
          </div>
          <h3>Flags of the world app</h3>
        </div>
        <div className="face back">
          <h3>Flags of the world app</h3>
          <p>App to query flags of all countries from an api rest</p>
          <div class="item_btn">
            <a href="https://github.com/Cdaniel0506/CardMap.git" className='btn btn-danger'>GitHub</a>
            <a href="https://majestic-duckanoo-9c6328.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src="/img/app2.png" alt="" />
          <div className="Num_Card">
            <h2>2</h2>
          </div>
          <h3>Phrases app</h3>
        </div>
        <div className="face back">
          <h3>Phrases app</h3>
          <p>Phrases app with their random authors consumed from an ApiRest</p>
          <div class="item_btn">
          <a href="https://github.com/Cdaniel0506/Entregable_Tarjeta_React.git" className='btn btn-danger'>GitHub</a>
            <a href="https://warm-quokka-d6d49a.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src="/img/app3.png" alt="" />
          <div className="Num_Card">
            <h2>3</h2>
          </div>
          <h3>Pokemon app</h3>
        </div>
        <div className="face back">
          <h3>Pokemon app</h3>
          <p>Pokemon app where each pokemon is shown with their respective abilities, these pokemons are brought from an ApiRest</p>
          <div class="item_btn">
            <a href="https://github.com/Cdaniel0506/Pokedex.git" className='btn btn-danger'>GitHub</a>
            <a href="https://elaborate-biscotti-0027c0.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src="/img/app4.png" alt="" />
          <div className="Num_Card">
            <h2>4</h2>
          </div>
          <h3>First challenge</h3>
        </div>
        <div className="face back">
          <h3>First challenge</h3>
          <p>Challenge done from Frontend Mentor</p>
          <div class="item_btn">
            <a href="https://github.com/Cdaniel0506/Tailwind_First.git" className='btn btn-danger'>GitHub</a>
            <a href="https://dreamy-cobbler-89c5b5.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src="/img/app5.png" alt="" />
          <div className="Num_Card">
            <h2>5</h2>
          </div>
          <h3>Rick And Morty App</h3>
        </div>
        <div className="face back">
          <h3>Rick And Morty App</h3>
          <p>Rick And Morty App that shows the characters of the series</p>
          <div class="item_btn">
            <a href="https://github.com/Cdaniel0506/CardTheRickAndMorty.git" className='btn btn-danger'>GitHub</a>
            <a href="https://taupe-strudel-2bb7b7.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src="/img/app6.png" alt="" />
          <div className="Num_Card">
            <h2>6</h2>
          </div>
          <h3>Crud of users</h3>
        </div>
        <div className="face back">
          <h3>Crud of users</h3>
          <p>Crud of users</p>
          <div class="item_btn">
            <a href="https://github.com/Cdaniel0506/AcdmChoresCarrito.git" className='btn btn-danger'>GitHub</a>
            <a href="https://bejewelled-semifreddo-579a9c.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects