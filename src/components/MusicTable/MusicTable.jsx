import React from 'react';

const MusicTable = (props) => {
        return (
            <table>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            {props.songs.map(song => {
                return (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td><button onClick={event => props.deleteSong(song.id)}>Delete</button></td>
                    </tr>
                )
            })}
            </tbody>
            </table>
        )
}

export default MusicTable;