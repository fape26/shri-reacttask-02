import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '../innerComponents/Button';
import { Logo } from '../svgAndIcons/Icons';
import Footer from './Footer';
import Header from './Header';


const Start = () => {
    const history = useHistory();

    const handleOpenSettings = (e) => {
        history.push('/settings')
    }

    return (
    <>
        <Header headerContent='School CI server'>
            <Button btnClick={handleOpenSettings} cssClass="default" content='Settings' height='28px' svg='cog'></Button>
        </Header>
        <div className="main-start">
            <Logo></Logo>
            <p>Configure repository connection and synchronization settings</p>
            <Button btnClick={handleOpenSettings} cssClass="yellow" content='Open settings'></Button>
        </div>
        <Footer></Footer>
    </>
    );
}

export default Start;