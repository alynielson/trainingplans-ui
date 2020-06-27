import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import arrowleftthick from '../icons/arrow-left-thick.png';
import arrowrightthick from '../icons/arrow-right-thick.png';
import { months } from '../constants';

const MonthViewHeader = (props) => {
    return (
        <Heading>
                <Button color="white" onClick={props.decrementMonth}>
                    <Icon>
                        <img src={arrowleftthick} alt="left arrow" />
                    </Icon>
                </Button>
                {months[props.month]}
                <Button color="white" onClick={props.incrementMonth}>
                <Icon>
                    <img src={arrowrightthick} alt="right arrow"/>
                </Icon>
                </Button>
                {props.year}
        </Heading>
    );
}

export default MonthViewHeader;