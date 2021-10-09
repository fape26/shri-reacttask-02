import React from 'react';
import { Cog, Play } from '../svgAndIcons/Icons';

export const Button = ({ cssClass, content, height , svg, type, btnClick, disabled}) => {
    return (
        <button disabled={disabled} onClick={btnClick} style={{ height: height}} type={type} className={'btn' + (cssClass ? ' ' + cssClass : '')}>
            {svg === 'cog' ? <Cog/> : svg === 'play' ? <Play/> : ''}
            <span id={svg} style={svg && content ? {marginLeft : '5px'} : {marginLeft : '0px'}}>{content}</span> 
        </button>
    )
}