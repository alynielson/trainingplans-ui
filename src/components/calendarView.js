import React from 'react';
import { connect } from "react-redux";
import MonthView from "./monthView";
import { getCalendarViewState } from 'app/selectors';
import Button from 'react-bulma-components/lib/components/button';
import Icon from 'react-bulma-components/lib/components/icon';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import arrowleftthick from '../icons/arrow-left-thick.png';
import arrowrightthick from '../icons/arrow-right-thick.png';
import { months } from '../constants';
import { increaseMonthViewing, decreaseMonthViewing } from 'app/actions';

const CalendarView = ({calendarView, increaseMonthViewing, decreaseMonthViewing}) => {
    return (
        <div>
            <Container fluid>
            <Heading>
                <Button color="white" onClick={decreaseMonthViewing}>
                    <Icon>
                        <img src={arrowleftthick} alt="left arrow" />
                    </Icon>
                </Button>
                {months[calendarView.month]}
                <Button color="white" onClick={increaseMonthViewing}>
                <Icon>
                    <img src={arrowrightthick} alt="right arrow"/>
                </Icon>
                </Button>
                {calendarView.year}
            </Heading>
            <MonthView />
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    const calendarView = getCalendarViewState(state);
    return { 
        increaseMonthViewing,
        decreaseMonthViewing,
        calendarView  
    };
}

export default connect(mapStateToProps, { increaseMonthViewing, decreaseMonthViewing })(CalendarView);