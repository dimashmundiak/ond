import React from 'react';
import './Wrapper.css';

import { Cost } from '../Cost';
import { Concentration } from '../Concentration';

function Wrapper() {
    return (
        <div className="layout-wrapper">
            <div className="wrapper-item">
                <Cost />
            </div>
            <div className="wrapper-item">
                <Concentration />
            </div>
        </div>
    )
}

export { Wrapper };