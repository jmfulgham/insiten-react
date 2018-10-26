import React from 'react';
import './companies.css';
import Company from './company';



export default class Companies extends React.Component{
  constructor(props){
    super(props);
    
    this.state= {toggle:null,
                text: 'Edit'  }
  }
  

  
  createList(company){
    return <Company deleteItem={() => this.props.deleteItem(company)} handleEdit={(company, newData) => this.props.handleEdit(company, newData)} key={company["Company Code"]} status={company["Status"]} name={company["Company Name"]} code={company["Company Code"]} info={company["Company Information"]} contacts={company["Key Contacts"]} performance={company["Financial Performance"]}/>
  }
 
  
  render(){
    let companyList = this.props.companyList;
    let listItems = companyList.map((company) => this.createList(company)); 
    return(<div className="theList">
           {listItems}
           </div>
           );
  }
}
