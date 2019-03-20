import React from 'react';
import './Card.css';
import Cardbanner from './CardBanner';
import CardContent from './CardContent'
const CardContainer = () =>{
    return (
        <div className='card-container'>
        <Cardbanner />
        <CardContent />
        </div>
    )
}
export default CardContainer