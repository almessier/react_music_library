import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './SearchBar.css'

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
            <div className='card bg-dark card-pad'>
                <h5 className='filter-header'>Filter Songs</h5>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label className='filter-label' htmlFor='category'>Choose a filter:</label>
                    <select className='filter-select' name='category' value={this.state.category} onChange={this.handleChange}>
                        <option value='title'>Title</option>
                        <option value='album'>Album</option>
                        <option value='artist'>Artist</option>
                        <option value='genre'>Genre</option>
                        <option value='release_date'>Release Date</option>
                    </select>
                </form>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className='row search-row'>
                        <label>Search</label>
                        <input className='form-control' name='search' onChange={this.handleChange} value={this.state.search} />
                    </div>
                    <div className='row filter'>
                        <div>
                            <Button className='filter-button form-control' type='submit'>Apply Filter</Button>
                            <Button className='filter-button form-control' onClick={this.clearFilter}>Clear Filters</Button>
                        </div>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;