import React, { useState, useEffect } from 'react';
import './App.css';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addSong } from './services/songServices';
import { fetchSongs } from './services/songServices';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs()
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const handleAddSong = async (newSong) => {
    try {
      await addSong(newSong);
      const updatedSongs = await fetchSongs();
      setSongs(updatedSongs);
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="app">
      <h1>Add a new song</h1>
      <SongForm addSong={handleAddSong} />
      <h1>Songs</h1>
      <SongList songs={songs} />
    </div>
  );
}

export default App;