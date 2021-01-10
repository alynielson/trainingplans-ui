import React from 'react';
import './dropdown.scss';
import Tag from '../tag/tag';

const Dropdown = (props) => {
    const noMargin = props.noMargin === true ? true : false;
    const useTag = props.useTag === true ? true : false;
    const highlightColorClass=props.highlightColor ? `--dropdown-${props.highlightColor}` : "";
    const buttonColorClass=props.mainColor ? `--${props.mainColor}-outside`: "";
    const buttonClass=`${buttonColorClass} --white-with-border`;
    return (
        <div className={`${noMargin ? "--no-margin " : ""}dropdown-test`}>
            {useTag ? 
            <Tag
                onClick={props.clickTag}
                value={props.buttonText}
                color={props.mainColor}
                remove={props.removeTag}
                onRemove={props.onRemoveTag}
            />
            :
            <button className={buttonClass}>
                {props.buttonText}
            </button>
            }
            {props.values ? <div className="dropdown-content-test">
                {props.values.map((t) => {
                    return (
                    <div
                        key={t.id} 
                        className={props.selectedValue === t.value ? `selected ${highlightColorClass}` : highlightColorClass}
                        value={t.value}
                        onClick={() => props.changeSelected(t.value)}
                    >
                        {t.text}
                    </div>
                    )
                })}
            </div> : null}
        </div>
    );
}

export default Dropdown;