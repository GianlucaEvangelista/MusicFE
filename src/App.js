import './App.css';
import SongList from './components/SongList.js';
import SongForm from './components/SongForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <h1>Add a new song</h1>
      <SongForm />
      <h1>Songs</h1>
      <SongList />
    </div>
  );
}

export default App;
