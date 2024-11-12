import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import WelcomePage from './components/WelcomePage';
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomePage/>
      <About/>
      <Speakers/>
      <Program/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

export default App;