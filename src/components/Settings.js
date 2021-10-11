import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '../innerComponents/Button';
import { useHistory } from 'react-router';
import { Input } from '../innerComponents/Input';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import {saveSettings, keepInputValues, resetInputValues} from '../redux/action';


const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Settings = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    // const [inputs, setInputs] = useState ({
    //     git: '',
    //     command: '',
    //     branch: '',
    //     timer: ''
    // });
    const inputs = useSelector(({temporary}) => temporary);

    const handleSubmit = useCallback(e => {
        setIsLoading(true)
        e.preventDefault();

        const validateValues = (values) => {
            let errors = {}
            errors.is = false;
            if (values.git.split('/').length !== 2) {
                errors.reponame = "Please enter valid repository name";
                errors.is = true;
            }
            if (values.command.indexOf('npm', 0) === -1) {
                errors.command = "Command should start with \"npm\"";
                errors.is = true;
            }
            setErrors(errors)
            return errors;
        }

        if (validateValues(inputs).is) {
            setIsLoading(false);
            console.error('mistakes were made');
        } else {
            console.log('ok');
            dispatch(saveSettings(inputs));
            setTimeout(function() {
                console.error('Server Error');
                dispatch(resetInputValues());
                setIsLoading(false);
                history.push('/')
                return {response: false}
            }, rand(1000, 5000));
        }
    }, [inputs])

    const onChange = useCallback((e) =>{
        // setInputs({
        //     ...inputs,
        //     [e.target.name]: e.target.value
        // })
        dispatch(keepInputValues({[e.target.name]: e.target.value}));
    }, [inputs])

    const handleCancel = useCallback(() => {
        history.push('/')
    }, [])

    return (
        <>
        <div className="header">
            <h2>School CI server</h2>
        </div>
        <form onSubmit={handleSubmit} className="settings-container"> 
            <h3>Settings</h3>
            <p>Configure repository connection and synchronization settings.</p>
            <Input value={inputs.git} onChange={onChange} name='git' labelName='GitHub repository' required={true}
            placeholder='user-name/repo-name'></Input>
            {errors.reponame && <span className="error">{errors.reponame}</span>}
            <Input value={inputs.command} onChange={onChange} name='command' labelName='Build command' required={true} 
            placeholder='command-name'></Input>
            {errors.command && <span className="error">{errors.command}</span>}
            <Input value={inputs.branch} onChange={onChange} name='branch' labelName='Main branch' 
            placeholder='branch-name'></Input>
            <p>Synchronize every
            <input value={inputs.timer} onChange={onChange} name='timer' className="timer" type='number'></input> minutes</p>
            <div style={useMemo(() => ({marginTop: '20px'}), [])} className="btns-pair">
                <Button disabled={isLoading} type='submit' cssClass="yellow" content='Save'></Button>
                <Button disabled={isLoading} btnClick={handleCancel} type='button' cssClass="default" content="Cancel"></Button>
            </div>
        </form>
        <Footer></Footer>
    </>
    )
}

export default Settings;