import React from 'react';
import { useSelector } from 'react-redux';
import History from './History';
import Start from './Start';

const Main = () => {
    const settings = useSelector((state) => state.settings);
    return Object.keys(settings).length ? <History/> : <Start/>;
}

export default Main;