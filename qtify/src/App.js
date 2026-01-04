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
        {/* Top Albums - Always Grid */}
<Section title="Top Albums" fetchRes={fetchTopAlbums} />

{/* New Albums - Toggles between Carousel and Grid */}
<Section title="New Albums" fetchRes={fetchNewAlbums} type="newAlbums" />
       
      
        
      </header>
    </div>
  );
}

export default App;
