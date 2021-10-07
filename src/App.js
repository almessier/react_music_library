import React , { Component } from 'react';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';

class App extends Component {

    render(){
        return (
            <div className='container'>
                <MusicTable />
                <SongForm />
            </div>
        )
    };
};

export default App;
