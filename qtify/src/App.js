import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Section from './components/Section';
import { fetchTopAlbums, fetchNewAlbums } from './components/api';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Hero/>
        <Section title="Top Albums" fetchRes={fetchTopAlbums} />
        
        <Section title="New Albums" fetchRes={fetchNewAlbums} />
       
      
        
      </header>
    </div>
  );
}

export default App;
