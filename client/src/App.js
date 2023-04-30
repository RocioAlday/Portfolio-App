
import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
