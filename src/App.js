import React , { Component } from 'react';
import './App.css';
import MusicTable from './components/MusicTable/MusicTable';

class App extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className='container'>
                <MusicTable />
            </div>
        )
    };
};

export default App;
