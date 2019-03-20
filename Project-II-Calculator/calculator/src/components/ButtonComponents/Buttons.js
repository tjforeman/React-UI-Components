import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'
import ActionButton from './ActionButton'

const Buttons = () =>{
    return(
        <div className='button-container'>
        <ActionButton buttonStyle="big" text="clear"/>
        <NumberButton buttonStyle="symbol" text="/"/>
        <NumberButton buttonStyle="small" text="7"/>
        <NumberButton buttonStyle="small" text="8"/>
        <NumberButton buttonStyle="small" text="9"/>
        <NumberButton buttonStyle="symbol" text="X"/>
        <NumberButton buttonStyle="small" text="4"/>
        <NumberButton buttonStyle="small" text="5"/>
        <NumberButton buttonStyle="small" text="6"/>
        <NumberButton buttonStyle="symbol" text="-"/>
        <NumberButton buttonStyle="small" text="1"/>
        <NumberButton buttonStyle="small" text="2"/>
        <NumberButton buttonStyle="small" text="3"/>
        <NumberButton buttonStyle="symbol" text="+"/>
        <ActionButton buttonStyle="big" text="0"/>
        <NumberButton buttonStyle="symbol" text="="/>
        </div>
    )
}
export default Buttons;