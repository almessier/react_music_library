import React , { Component } from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    }

    async componentDidMount() {
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

    createSong = (song) => {
        let newSongs = this.state.songs;
        newSongs.push(song);
        this.setState({
            songs: newSongs
        })
    }

    render(){
        return (
            <div className='container'>
                <MusicTable deleteSong={this.deleteSong} songs={this.state.songs}/>
                <SongForm createSong={this.createSong} />
            </div>
        )
    };
};

export default App;
