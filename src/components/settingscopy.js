import React, { useState, useCallback } from 'react';
import { Button } from '../innerComponents/Button';
// import { Input } from '../innerComponents/Input';
import { Delete } from '../svgAndIcons/Icons';



const Settings = () => {
    // const [isSubmitted, setIsSubmited] = useState(false)
    const [show, setShow] = useState();
    const [values, setValues] = useState({
        user: '',
        command: '',
        branch: '',
        time: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        // setIsSubmited(true)
    }

    const handleChange = useCallback(e => { 
        const {name, value} = e.target
        setShow(!!e.target.value);
        setValues({
            ...values,
            [name]: value
        })
    }, []);

    const handleDeleteClick = useCallback(e => {
        const {name} = e.target
        setValues({
            [name]: ''
        })
        e.preventDefault();
        setShow(false);
    }, [])



    return (
        <>
        <div className="header">
            <h2>School CI server</h2>
        </div>
        <form onSubmit={handleSubmit} className="settings-container">                                                 {/*css for settings block */}
            <h3>Settings</h3>
            <p>Configure repository connection and synchronization settings.</p>
            <label>GitHub repository<span> *</span></label>
            <div className='input-section'>
                <input type='text' name='user' value={values.user} required 
                placeholder='user-name/repo-name' onChange={handleChange}></input>
                <button type="button" hidden={!show} onClick={handleDeleteClick}>
                    <Delete></Delete>
                </button>
            </div>
            <label>Build command<span> *</span></label>
            <div className='input-section'>
                <input type='text' name='command' value={values.command} required
                placeholder='command-name' onChange={handleChange}></input>
                <button type="button" hidden={!show} onClick={handleDeleteClick}>
                    <Delete></Delete>
                </button>
            </div>
            <label>Main branch</label>
            <div className='input-section'>
                <input type='text' name='branch' value={values.branch}
                placeholder='branch-name' onChange={handleChange}></input>
                <button type="button" hidden={!show} onClick={handleDeleteClick}>
                    <Delete></Delete>
                </button>
            </div>
            <p>Synchronize every</p>
            <input type='number' name='time' value={values.time}
                placeholder='branch-name' onChange={handleChange}></input>
            <div className="btns-pair">
                <Button type='submit' cssClass="yellow" content='Save'></Button>
                <Button cssClass="default" content="Cancel"></Button>
            </div>
        </form>
    </>
    )
}

export default Settings;