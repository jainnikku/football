import React from 'react';
import Card from './Card';
const CardList = ({players}) => {
    const cardComponent = players.map((user,i) => {
        return (
            <Card 
                key={i} 
                id={players[i].id} 
                name={players[i].name} 
                country={players[i].country} 
                CurTeam={players[i].CurTeam}
                Description={players[i].Description}
            />
        );
    });
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;