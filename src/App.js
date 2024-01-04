import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollup/ScrollUp.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
