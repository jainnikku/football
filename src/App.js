import React, {Component} from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/searchBox';
import Scroll from './Components/scroll';
import {players} from './Components/player';

class App extends Component {
    constructor() {
        super();
        this.state = {
            players: players,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {players, searchField} = this.state;
        const filterPlayers = players.filter(player =>{
            return player.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return (
            <div className='tc'>
                <h1>Football Players</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                     <CardList players={filterPlayers}/>
                </Scroll>
                
            </div>
        );
    }
       
    
}

export default App;