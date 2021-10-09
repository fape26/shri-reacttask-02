import React from 'react';
import { Cross, Ok, Hold, Commit, User, Clock, Calendar } from '../svgAndIcons/Icons';


const HistoryItem = ({item}) => {

    return (
    <div className='item-wrapper'>
        <div className='item-info'>
            {item.status === 'ok' ? <Ok/> : item.status === 'neok' ? <Hold/> : <Cross/>}
            <div className='flex-pair'>
                <div className='hashnum' style={{color: item.status === 'ok' ? '#00B341' : item.status === 'neok' ? '#FF9A00' : '#FF3333'}}>{item.hash}</div>
                <div className='descr'>{item.commit}</div>
            </div>
            <div className='flex-pair'>
                <div className='branch'><Commit/>{item.branch}<span> {item.branchId}</span></div>
                <div className='author'><User/>{item.user}</div>
            </div>
        </div>
        
        <div className='time-keeper'>
            <div><Calendar/>{item.date}</div>
            <div><Clock/>{item.time}</div>
        </div>
    </div>
    )
}

export default HistoryItem;