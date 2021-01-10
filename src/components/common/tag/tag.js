import React from 'react';
import './tag.scss';
import closeicon from '../../../icons/close-black-18dp.svg';

const Tag = (props) => {
    const customClass = props.customClass ? `tag-test ${props.customClass}` : "tag-test";
    return (
        <span className="tag-group-test">
            <div
                className={`${customClass} --${props.color}`}
                onClick={() => props.onClick ? props.onClick(props.value): null}>
                {props.value}
            </div>
            { props.remove ?
            <div
                className={`tag-test remove-test --${props.color}`}
                color={props.color}
                onClick={() => props.onRemove(props.value)}>
                <img src={closeicon} alt="remove"/>
            </div> 
            : null }
        </span>
    );
}

export default Tag;