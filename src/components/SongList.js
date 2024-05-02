import Table from 'react-bootstrap/Table';

import Song from './Song';

function SongList({ songs, removeSong }) {

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
                        <Song key={song.id} {...song} removeSong={removeSong} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SongList;