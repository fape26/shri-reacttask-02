import React, { useCallback, useState } from 'react';
import { Button } from '../innerComponents/Button';
import HistoryItem from '../innerComponents/HistoryItem';
import Footer from './Footer';
import { useHistory } from 'react-router';
import Modal from '../innerComponents/Modal';
import Header from './Header';

const data = [
    {
        "hash": "#1368",
        "commit": "add documentation for postgres scaler",
        "branch": "master",
        "branchId": "952e5567",
        "user": "Philip Kirkorov",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "ok"
    },
    {
        "hash": "#1364",
        "commit": "Super cool UI kit for making websites that look like games",
        "branch": "super-cool-ui-kit",
        "branchId": "b4636ab",
        "user": "Vadim Makeev",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "neok"
    },
    {
        "hash": "#1365",
        "commit": "Merge branch 'master' of github.com:jaywcjlove/awesome",
        "branch": "master",
        "branchId": "952e5567",
        "user": "Philip Kirkorov",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "fail"
    },
    {
        "hash": "#1345",
        "commit": "upgrade typescript to 3.8",
        "branch": "master",
        "branchId": "b4636ab",
        "user": "Philip Kirkorov",
        "date": "21 янв, 12:06",
        "time": "1 ч 20 мин",
        "status": "fail"
    },
    {
        "hash": "#1355",
        "commit": "Merge branch 'master' of github.com:jaywcjlove/awesome",
        "branch": "master",
        "branchId": "9c9f0b9",
        "user": "Philip Kirkorov",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "ok"
    },
    {
        "hash": "#1344",
        "commit": "Merge branch 'master' of github.com:jaywcjlove/awesome",
        "branch": "master",
        "branchId": "b4636ab",
        "user": "Philip Kirkorov",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "ok"
    },
    {
        "hash": "#1355",
        "commit": "Merge branch 'master' of github.com:jaywcjlove/awesome",
        "branch": "master",
        "branchId": "9c9f0b9",
        "user": "Philip Kirkorov",
        "date": "21 янв, 03:06",
        "time": "1 ч 20 мин",
        "status": "ok"
    },
    {
        "hash": "#1345",
        "commit": "upgrade typescript to 3.8",
        "branch": "master",
        "branchId": "b4636ab",
        "user": "Philip Kirkorov",
        "date": "21 янв, 12:06",
        "time": "1 ч 20 мин",
        "status": "fail"
    }
]

const History = () => {
    
    const history = useHistory();
    const [showModal, setShowModal] = useState(false)

    const handleOpenSettings = useCallback(() => {
        history.push('/settings')
    }, [])

    return (
        <>
            <Header headerContent='philip1967/my-aw esome-repo-with-long-long-long-repo-name' addCss='history'>
                <div className="btns-svg">
                    <Button btnClick={useCallback(() => setShowModal(true), [])} cssClass="default" content='Run build' height='28px' svg='play'></Button>
                    <Button btnClick={handleOpenSettings} cssClass="default" height='28px' svg='cog'></Button>
                </div>
            </Header>
            <div className="main-history">
                <div className="history-list">
                    {data.map((item, index) => (
                        <HistoryItem key={index} item={item}/>
                    ))}
                </div>
                <div className="btns-pair">
                    <Button cssClass="default" content="Show more" height="28px"></Button>
                </div>
            </div>
            <Modal onClose={useCallback(() => setShowModal(false), [])} showModal={showModal}></Modal>
            <Footer></Footer>
        </>
    )
}

export default History;