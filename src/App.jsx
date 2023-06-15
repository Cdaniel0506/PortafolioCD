
import './App.css'
import AboutMe from './components/AboutMe'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
      
      
    </div>
  )
}

export default App
