import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './navigation-bar.css';
import '../responsive.css';
import Toolbar from '@material-ui/core/Toolbar';

export default function NavigationBar(props) {
    const links = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    ));

    return (
        <div>
        <AppBar position='static' style={[{flex: 'grow', color: '#FFFFFF'}]} color="primary">
        <Toolbar>
            <img src={props.img} alt="Insiten React App" className="logo" />
            <nav role="navigation" className="col-12">
                <ul>
                    {links}
                </ul>
            </nav>
            </Toolbar>
            </AppBar>
        </div>
    );
}
