import React, { Component } from 'react';
import axios from 'axios';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: '',
            likes: 0
        };
    }

    createSong = async () => {
        let song = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            release_date: this.state.release_date,
            likes: 0
        }
        try{
            await axios.post('http://127.0.0.1:8000/music/', song);
            this.props.getSongs();
        }
        catch(ex) {
            console.log('Error in createSong API call', ex);
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createSong();
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Title:</label>
                    <input name='title' onChange={this.handleChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <label>Album:</label>
                    <input name='album' onChange={this.handleChange} value={this.state.album} />
                </div>
                <br />
                <div>
                    <label>Artist:</label>
                    <input name='artist' onChange={this.handleChange} value={this.state.artist} />
                </div>
                <br />
                <div>
                    <label>Genre:</label>
                    <input name='genre' onChange={this.handleChange} value={this.state.genre} />
                </div>
                <br />
                <div>
                    <label>Release Date:</label>
                    <input name='release_date' onChange={this.handleChange} value={this.state.release_date} />
                </div>
                <br />
                <div>
                    <button type='submit'>Create Song</button>
                </div>
            </form>
        );
    }
}

export default SongForm;