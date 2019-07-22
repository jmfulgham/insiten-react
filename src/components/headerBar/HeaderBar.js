import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import './headerBar.css';
import Toolbar from '@material-ui/core/Toolbar';

export default class HeaderBar extends Component {
    constructor(props){
        super(props)
    }

    render(){
    return (
        <div>
        <AppBar position='static' style={{flexGrow: 1}} color="none" elevation={0}>
        <Toolbar>
            <img src={this.props.img} alt="Insiten React App" className="logo" />
            </Toolbar>
            </AppBar>
        </div>
    );
}
}
