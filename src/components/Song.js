function Song({ id, title, artist, genre, album, year, removeSong }) {
    return (
        <tr>
            <td>{title}</td>
            <td>{artist}</td>
            <td>{genre}</td>
            <td>{album}</td>
            <td>{year}</td>
            <td>
                <button className="btn btn-danger" onClick={() => removeSong(id)}>Remove Song</button>
            </td>
        </tr>
    )
}

export default Song;