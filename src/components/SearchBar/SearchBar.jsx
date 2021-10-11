import React, { Component } from 'react';
import MusicTable from '../MusicTable/MusicTable';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search : '',
            category: 'title',
        };
    }

    filterSongs = () => {
        let results = [];
        let search = this.state.search;
        if (this.state.category === 'title') {
            results = this.props.songs.filter(song => song.title.toLowerCase() === search.toLowerCase())
        } else if (this.state.category === 'album') {
            results = this.props.songs.filter(song => song.album.toLowerCase() === search.toLowerCase())
        } else if (this.state.category === 'artist') {
            results = this.props.songs.filter(song => song.artist.toLowerCase() === search.toLowerCase())
        } else if (this.state.category === 'genre') {
            results = this.props.songs.filter(song => song.genre.toLowerCase() === search.toLowerCase())
        } else if (this.state.category === 'release_date') {
            results = this.props.songs.filter(song => song.release_date === search)
        }
        return results
    }

    clearFilter = () => {
        this.props.getSongs();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let filteredSongs = this.filterSongs();
        this.props.updateSongList(filteredSongs);
    }

    render() {
        return (
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor='category'>Choose a filter:</label>
                <select name='category' value={this.state.category} onChange={this.handleChange}>
                    <option value='title'>Title</option>
                    <option value='album'>Album</option>
                    <option value='artist'>Artist</option>
                    <option value='genre'>Genre</option>
                    <option value='release_date'>Release Date</option>
                </select>
            </form>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Search:</label>
                    <input name='search' onChange={this.handleChange} value={this.state.search} />
                </div>
                <div>
                    <button type='submit'>Filter Songs</button>
                </div>
                <div>
                    <button onClick={this.clearFilter}>Clear Filters</button>
                </div>
            </form>
            </React.Fragment>
        );
    }
}

export default SearchBar;