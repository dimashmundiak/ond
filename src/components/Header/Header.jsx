import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-brand">
                    Розрахунок забруднення атмосфери викидів одиночного джерела
                </div>
            </div>
        )
    }
}

export { Header };