import React from 'react';
import History from './History';
import Start from './Start';

const Main = () => {
    const storage = localStorage.getItem('settings');
    return !!storage ? <History/> : <Start/>
}

export default Main;