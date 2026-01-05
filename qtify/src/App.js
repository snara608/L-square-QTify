import './App.css';
import './components/navbar';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Section from './components/Section';
import { fetchTopAlbums, fetchNewAlbums } from './components/api';
import Songs from './components/Songs';



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
<hr style={{ border: "1px solid #34C94B", margin: "40px 0" }} />
      {/* Adding the new Songs section here */}
      <Songs title="Songs" />
       
      
        
      </header>
    </div>
  );
}

export default App;
