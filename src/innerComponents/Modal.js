import React, { useCallback, useState, useMemo } from 'react';
import { Button } from './Button';
import { Input } from './Input';

const Modal = (props) => {
    const [commitHash, setCommitHash] = useState('');


    const onChange = useCallback(e => setCommitHash(e.target.value), [])

    if (!props.showModal) {
        return null;
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>New build</h2>
                    <p>Enter the commit which you want to build</p>
                </div>
                <Input onChange={onChange} value={commitHash} marginBottom='20px' name='commit' placeholder='Commit hash'></Input>
                <div className="btns-pair">
                    <Button type='submit' cssClass="yellow" content='Run build'></Button>
                    <Button btnClick={props.onClose} type='button' cssClass="white" content="Cancel"></Button>
                </div>
            </div>
        </div>
    )
}

export default Modal;