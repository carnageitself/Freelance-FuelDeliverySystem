import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
//import Certificate from './components/Certificate';

function App() {
  return (
    <div className="App">
     <Main/>
     <Banner/>
     <Skills/>
     <Projects/>
     {/*<Certificate/>*/}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
