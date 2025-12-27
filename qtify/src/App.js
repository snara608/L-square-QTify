import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Hero from './components/hero';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
      
        
      </header>
    </div>
  );
}

export default App;
