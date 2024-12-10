import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav id='Menu'>
            <ul id='Menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;