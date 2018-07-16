import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

const buttons = [
    {
        text: 'Pokedex',
        action: () => console.log("pressed pokedex button"),
    },
    {
        text: 'TCG Database',
        action: () => console.log("pressed TCG button"),
    }
];

class Nav extends Component {
    render() {
        
        return (
            <div className="pokedex">
                <button>Pokedex</button>
                <button>TCG Database</button>
                <button>Tomo's pokequiz</button>
            </div>
        );
    }
}

export default Nav;