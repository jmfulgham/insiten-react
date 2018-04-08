import React from 'react';


export default class Companies extends React.Component{
  constructor(props){
    super(props);
    
    this.state= {toggle:null,
                text: 'Edit'}
  }
  
  handleToggle(company){
   console.log('we are editing this section ', company); 
    this.setState({toggle: this.state.toggle === company ? null : company ,
                  text: this.state.text == 'Edit' ? 'Save' : 'Edit'});
}

  createList(company){
    return (<section className={company["Company Code"]} key={company["Company Code"]}><h3 contentEditable={this.state.toggle === company["Company Code"]} >{company["Company Name"]}</h3><br /><ul>
            <li contentEditable={this.state.toggle === company["Company Code"]} >Status: {company["Status"]}</li><br />
            <li contentEditable={this.state.toggle === company["Company Code"]} >Company Information: {company["Company Information"]}</li><br />
            <li contentEditable={this.state.toggle === company["Company Code"]} >Key Contacts: {company["Key Contacts"]}</li><br />
            <li contentEditable={this.state.toggle === company["Company Code"]} >Financial Performance: {company["Financial Performance"]}</li>
            </ul>
            <button key={'edit'+company["Company Code"]} onClick={(e)=>  this.handleToggle(company["Company Code"])}>{this.state.text}</button>
            <button key={'delete'+company["Company Code"]} onClick={() => this.props.deleteItem(company)}>Delete</button>
            </section>
            )
  }
  
  render(){
    let companyEntries = this.props.entries;
    let listItems = companyEntries.map((company) => this.createList(company)); 
    return(<div className="theList">
           {listItems}
           </div>
           );
  }
}