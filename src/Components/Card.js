import React from'react';
import './style.css';

const Card =({name, country, id, CurTeam, Description}) => {
    return (
        <div className='flip-box tc bg-light-red dib br3 pa3 ma2 bw2 shadow-5'>
            <div className='flip-box-inner'>
                <div className='flip-box-front'>
                    <div className='back'>
                        <img alt='messi' src={'player'+ id +'.png'} width='200px' height='250px'/>  
                    </div>
                    <div>
                        <h2>{name}</h2>
                        <p>{country}</p>
                        <p>{CurTeam}</p>
                    </div>     
                </div>
                <div className='flip-box-back'>
                    <h1>{Description}</h1>
                </div>
            
            </div> 
        </div> 
    );
}

export default Card;