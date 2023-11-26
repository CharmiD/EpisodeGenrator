import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "./components/Header/Header";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GenerateEpisodeHome from "./components/GenerateEpisode/GenerateEpisodeHome";
import GenerateShowHome from "./components/GenerateShow/GenerateShowHome";
import PopularShowsHome from './components/PopularShows/PopularShowsHome';
import SimilarShowsHome from './components/SimilarShows/SimilarShowsHome';
import GenerateEpisode from './components/GenerateEpisode/GenearateEpisode';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<GenerateEpisodeHome />} />
          <Route path="/generate-show" element={<GenerateShowHome />} />
          <Route path="/popular-shows" element={<PopularShowsHome />} />
          <Route path="/similar-shows" element={<SimilarShowsHome />} />

          <Route path="/show/:slug" element={<GenerateEpisode />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
