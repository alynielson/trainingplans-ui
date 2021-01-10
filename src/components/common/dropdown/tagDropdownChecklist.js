import React from 'react';
import './dropdown.scss';
import Tag from '../tag/tag';

const TagDropdownChecklist = (props) => {
    return (
        <div className="dropdown-test">
                <Tag
                    value={props.tagText}
                    color={props.tagColor}
                    remove={props.remove}
                />
            <div className="dropdown-content-test">
                    {props.values.map((t, i) => {
                        return (
                            <div key={i} className="dropdown-checkbox-container-test">
                                <input type="checkbox" checked={t.selected} 
                                    name={t.value}
                                    value={t.value}
                                    id={t.id}
                                    onChange={t.selected 
                                        ? () => props.deselectValue(t.value) 
                                        : () => props.selectValue(t.value)}/>
                                <label htmlFor={t.value}>{t.value}</label>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default TagDropdownChecklist;