import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Section from './components/Section';
import { fetchTopAlbums } from './components/api';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Section title="Top Albums" fetchRes={fetchTopAlbums} limit={14}/>
        <Section title="New Albums" fetchRes={fetchTopAlbums} limit={7}/>
       
      
        
      </header>
    </div>
  );
}

export default App;
