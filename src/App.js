import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { Team } from './components/team';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Team/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
