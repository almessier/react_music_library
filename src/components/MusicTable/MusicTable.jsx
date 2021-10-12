import React from 'react';
import Button from 'react-bootstrap/Button';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <React.Fragment>
        <div className='table-responsive'>
            <div className='card bg-dark'>
                <h2 className='list-header'>List of Songs</h2>
                <table className='table table-striped table-dark'>
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th className='delete-col' />
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
        </div>
        </React.Fragment>
    )
}
        
export default MusicTable;