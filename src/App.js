import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';
import SearchBar from './components/SearchBar/SearchBar';
import SongForm from './components/SongForm/SongForm';
import Footer from './components/Footer/Footer';

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

    deleteSong = async (songId) => {
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${songId}/`);
            this.getSongs();
        }
        catch (ex) {
            console.log('Error in deleteSong API call', ex);
        }
    }

    updateSongList = (songs) => {
        this.setState({
            songs: songs
        });
    }

    render(){
        return (
            <div className='container-md'>
                <div className='row'>
                    <Header />
                    <div className='col-md-8'>
                        <MusicTable deleteSong={this.deleteSong} songs={this.state.songs} />
                    </div>
                    <div className='col-md-4'>
                        <SearchBar getSongs={this.getSongs} songs={this.state.songs} updateSongList={this.updateSongList} />
                        <SongForm getSongs={this.getSongs} createSong={this.createSong} />
                    </div>
                    <Footer />
                </div>
            </div>
        )
    };
};

export default App;
