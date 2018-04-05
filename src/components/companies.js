import React from 'react';

export default class Companies extends React.Component{
  createList(company){
    return (<section key={company["Company Code"]}><h3>{company["Company Name"]}</h3><br /><ul>
            <li>Status: {company["Status"]}</li><br />
            <li>Company Information: {company["Company Information"]}</li><br />
            <li>Key Contacts: {company["Key Contacts"]}</li><br />
            <li>Financial Performance: {company["Financial Performance"]}</li>
            </ul>
            <button key={'edit'+company["Company Code"]}>Edit</button>
            <button key={'delete'+company["Company Code"]}>Delete</button>
            </section>
            )
  }
  render(){
    let companyEntries = this.props.entries;
    let listItems = companyEntries.map(this.createList);
    return(<div className="theList">
           {listItems}
           </div>
           );
  }
}