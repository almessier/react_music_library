import React from 'react';
import './MusicTable.css'
import Button from 'react-bootstrap/Button';

const MusicTable = (props) => {
    return (
        <React.Fragment>
        <div className='card bg-dark'>
            <h1>List of Songs</h1>
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
                            <td className='delete-button'>
                                <Button variant='secondary' onClick={event => props.deleteSong(song.id)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </React.Fragment>
    )
}
        
export default MusicTable;