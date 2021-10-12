import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './SongForm.css'

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
        let song = this.state
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
            <React.Fragment>
            <div className='card bg-dark card-pad'>
                <h5 className='create-header'>Create a Song</h5>
                <form className='form' onSubmit={(event) => this.handleSubmit(event)}>
                    <div className='row'>
                        <label className='label'>Title</label>
                        <input className='form-control' name='title' onChange={this.handleChange} value={this.state.title} />
                    </div>
                    <div className='row'>
                        <label className='label'>Album</label>
                        <input className='form-control' name='album' onChange={this.handleChange} value={this.state.album} />
                    </div>
                    <div className='row'>
                        <label className='label'>Artist</label>
                        <input className='form-control' name='artist' onChange={this.handleChange} value={this.state.artist} />
                    </div>
                    <div className='row'>
                        <label className='label'>Genre</label>
                        <input className='form-control' name='genre' onChange={this.handleChange} value={this.state.genre} />
                    </div>
                    <div className='row'>
                        <label className='label'>Release Date</label>
                        <input className='form-control' name='release_date' type='date' onChange={this.handleChange} value={this.state.release_date} />
                    </div>
                    <div className='row create-button'>
                        <Button type='submit'>Create Song</Button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default SongForm;