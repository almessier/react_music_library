import React, { Component } from 'react';
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

    componentDidMount() {
        this.getSongs();
    }

    getSongs = async () => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
        }
        catch (ex) {
            console.log('Error in getSongs API call', ex);
        }
    }

    deleteSong = async (song_id) => {
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${song_id}/`);
            this.getSongs();
        }
        catch (ex) {
            console.log('Error in deleteSong API call', ex);
        }
    }

    render(){
        return (
            <div className='container'>
                <MusicTable deleteSong={this.deleteSong} songs={this.state.songs}/>
                <SongForm getSongs={this.getSongs} createSong={this.createSong} />
            </div>
        )
    };
};

export default App;
