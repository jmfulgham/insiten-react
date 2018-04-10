import React from 'react';
import './companies.css';
import Company from './company';

//Company component - if and else in the render method
//if and else will have the input or it will display the data
//input MDN docs- React examples
// toggle on each com


export default class Companies extends React.Component{
  constructor(props){
    super(props);
    
    this.state= {toggle:null,
                text: 'Edit'  }
  }
  
//handleEdit is only receiving company here
  
  createList(company){
    return <Company deleteItem={() => this.props.deleteItem(company)} handleEdit={(company, newData) => this.props.handleEdit(company, newData)} key={company["Company Code"]} status={company["Status"]} name={company["Company Name"]} code={company["Company Code"]} info={company["Company Information"]} contacts={company["Key Contacts"]} performance={company["Financial Performance"]}/>
  }
  //map over companyEntries
  //each entry will be passed into Company component
  
  render(){
    let companyList = this.props.companyList;
    let listItems = companyList.map((company) => this.createList(company)); 
    return(<div className="theList">
           {listItems}
           </div>
           );
  }
}