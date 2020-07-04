import React from 'react';
import 'react-bulma-components/lib/components/dropdown';
import { allActivityTypes } from '../constants';
import { Checkbox } from 'react-bulma-components/lib/components/form';

const ActivityDropdown = (props) => {
    const selectedWorkoutTypes = props.activityTypes;
    const unselectedWorkoutTypes = allActivityTypes.filter(x => !selectedWorkoutTypes.includes(x));
    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger" role="presentation">
                <button class="button" tabindex="0">
                    <span>Test</span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <div class="dropdown-item" role="presentation">
                        <Checkbox />
                        Test
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivityDropdown;