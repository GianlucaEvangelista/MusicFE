import Table from 'react-bootstrap/Table';

function Song({ id, title, artist, genre, album, year }) {
    return (
            <tr>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{genre}</td>
                <td>{album}</td>
                <td>{year}</td>
            </tr>
    )
}

  export default Song;