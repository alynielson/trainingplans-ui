import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import arrowleftthick from '../icons/arrow-left-thick.png';
import arrowrightthick from '../icons/arrow-right-thick.png';
import { months } from '../constants';
import './monthViewHeader.css';
import CheckboxDropdown from './checkboxDropdown';

const MonthViewHeader = (props) => {
    return (
        <div className="title" id="monthViewHeader">
            <div className="header">
                <Button color="white" onClick={props.decrementMonth}>
                    <Icon>
                        <img src={arrowleftthick} alt="left arrow" />
                    </Icon>
                </Button>
                <div className="monthName">
                    {months[props.month]}
                </div>
                <Button color="white" onClick={props.incrementMonth}>
                <Icon>
                    <img src={arrowrightthick} alt="right arrow"/>
                </Icon>
                </Button>
                {props.year}
            </div>
            <div className="headerOptions">
                <CheckboxDropdown />
            </div>
        </div>
    );
}

export default MonthViewHeader;