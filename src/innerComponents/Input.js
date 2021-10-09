import React, { useMemo, useCallback } from 'react';
import { Delete } from '../svgAndIcons/Icons';

export const Input = ({ labelName, placeholder, required, name, onChange, value , marginBottom}) => {
  
    // const dispatch = useDispatch();
 
    const handleDeleteClick = useCallback(e => {
        e.preventDefault();
        // dispatch(keepInputValues({[e.target.name]: ''}))
        onChange({ target: { value: '', name }});
    }, [name])

    return (
    <>
        <label>{labelName} {(required ? <span> *</span> : '')}</label>
        <div style={useMemo(() => ({marginBottom: marginBottom}), [])} className='input-section'>
            <input name={name} type='text' value={value} required={required} placeholder={placeholder}
            onChange={onChange}></input>
            <button type="button" hidden={!value} onClick={handleDeleteClick}>
                <Delete></Delete>
            </button>
        </div>
    </>
    );
}