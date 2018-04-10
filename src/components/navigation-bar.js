import React from 'react';

import './navigation-bar.css';
import '../responsive.css';

export default function NavigationBar(props) {
    const links = props.links.map((link, index) => (
        <li key={index}>
            <a href={link.href}>
                {link.text}
            </a>
        </li>
    ));

    return (
        <div className="row">
            <img src={props.img} alt="Insiten React App" className="logo" />
            <nav role="navigation" className="col-12">
                <ul>
                    {links}
                </ul>
            </nav>
        </div>
    );
}
