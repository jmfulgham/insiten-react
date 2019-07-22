import React from 'react';
import './companies.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyInfo: this.props,
            toggle: false};
    }


    // handleToggle( company, newData){
    //
    //   this.setState(prevState =>({
    //     toggle: !prevState.toggle}));
    //   if( this.state.toggle === true){
    //   this.handleNewItem(company, newData)
    // }
    //   else {return}
    // }


    render() {
        return(<div>
            <Card>
            <CardContent>
                <Typography variant='title'>
                    {this.state.companyInfo["Company Name"]}
                </Typography>
            </CardContent>
            </Card></div>)
    }
}
