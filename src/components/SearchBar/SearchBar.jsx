import React, { Component } from 'react';
import MusicTable from '../MusicTable/MusicTable';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search : ''
        };
    }

    filter = () => {
        let search = this.state.search;

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.filter();
    }

    render() {
        return (
            <React.Fragment>
            <label for='filter'>Choose a filter:</label>
            <select name='filter' id='filter'>
                <option value='title'>Title</option>
                <option value='album'>Album</option>
                <option value='artist'>Artist</option>
                <option value='genre'>Genre</option>
                <option value='release_date'>Release Date</option>
            </select>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Search:</label>
                    <input name='search' onChange={this.handleChange} value={this.state.search} />
                </div>
            </form>
            </React.Fragment>
        );
    }
}

export default SearchBar;