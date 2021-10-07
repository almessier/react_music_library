import React from 'react';
import axios from 'axios';

class MusicTable extends React.Component {
    state = {
        songs: []
    }

    componentDidMount() {
        this.getSongs();
    }

    async getSongs() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
        }
        catch (ex) {
            console.log('Error in API call');
        }
    }

    async deleteSong(song) {
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`);
            this.getSongs();
        }
        catch (ex) {
            console.log('Error in API call');
        }
    }

    render() {
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
            {this.state.songs.map(song => {
                return (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td><button onClick={(event) => this.deleteSong(song)}>Delete</button></td>
                    </tr>
                )
            })}
            </tbody>
            </table>
        )
    }
}

export default MusicTable;