import Song from './Song';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function SongList() {
    const [songs, setSongs] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:8080/songs')
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => console.error('Error fetching songs:', error));
    }, []);

    return (
        <div className="song-list">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Album</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <Song key={song.id} {...song} />
                    ))}
                </tbody>
            </Table>
      </div>
    );
  };
  
  export default SongList;