import React from 'react';
import './dropdown.scss';

const Dropdown = (props) => {
    const buttonColorClass=props.color ? `--${props.color}-outside`: "";
    const colorClass=props.color ? `--${props.color}-highlight` : "";
    const buttonClass=`${buttonColorClass} --white-with-border`;
    return (
        <div className="dropdown-test">
            <button className={buttonClass}>
                {props.buttonText}
            </button>
            <div className="dropdown-content-test">
                {props.values.map((t) => {
                    return (
                    <div
                        key={t.id} 
                        className={props.selectedValue === t.value ? `selected ${colorClass}` : colorClass}
                        value={t.value}
                        onClick={() => props.changeSelected(t.value)}
                    >
                        {t.text}
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Dropdown;