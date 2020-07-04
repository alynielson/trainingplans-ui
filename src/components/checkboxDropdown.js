import { Checkbox } from 'react-bulma-components/lib/components/form';
import React from 'react';
// import Dropdown from 'react-bulma-components/lib/components/dropdown';
import '../node_modules/bulma/sass/components/dropdown.sass';

const CheckboxDropdown = (props) => {
    return (
        <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <Checkbox />
                    <span>Hover me</span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                    <div class="dropdown-item">
                        Test
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckboxDropdown;