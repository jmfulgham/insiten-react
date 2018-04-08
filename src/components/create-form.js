import React from 'react';
import '../responsive.css';
import Companies from './companies';


export default class CreateForm extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);

    this.state = {
      companyList:
      [ {
        "Company Code": "ABC",
        "Company Name": "ABC REIT",
        "Status": "Researching",
        "Company Information": "ABC REIT specializes in commercial real estate properties. Their specialties include property and land sales, leasing, and tax liens.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "2017YE Portfolio Holdings: $52.7mm, 2017YE Revenue: $82.3mm, 2017YE Expenses: $13.1mm, Percentage of liquid assets: 17.85%"
    },

    {
        "Company Code": "OFT",
        "Company Name": "One Financial Trust",
        "Status": "Approved",
        "Company Information": "One Financial Trust is a small credit union.",
        "Key Contacts": "Natalie Lane, Phone: 404-789-1011, Email: n.lane@oft.org",
        "Financial Performance": "2017YE Portfolio Holdings: $32.7mm, 2017YE Revenue: $42.13mm, 2017YE Expenses: $3.1mm, Percentage of liquid assets: 4.85%"
    },

    {
        "Company Code": "SRH",
        "Company Name": "Sunshine Retirement Homes, LLC",
        "Status": "Denied",
        "Company Information": "Retirement home communities.",
        "Key Contacts": "Alan Smith, Phone: 404-123-4567, Email: asmith@abcreit.com",
        "Financial Performance": "2017YE Portfolio Holdings: $12.7mm, 2017YE Revenue: $7.3mm, 2017YE Expenses: $3.1mm, Percentage of liquid assets: 1.5%"
    }
]
    }
  }
    
  addItem(e) {
    e.preventDefault();
    
    let newCompany = {
      "Company Code": this._codeInput.value,
      "Company Name": this._nameInput.value,
      "Status": this._status.value,
      "Company Information" : this._companyInfo.value,
      "Key Contacts": this._contacts.value,
      "Financial Performance": this._financialPerformance.value
    }
    
    this.setState( (prevState) => {
      return {
        companyList: prevState.companyList.concat(newCompany)
      }
    });
    
    this._codeInput.value= "";
    this._nameInput.value ="";
    this._companyInfo.value ="";
    this._contacts.value="";
    this._financialPerformance.value="";
    
  }
  
  
  deleteItem(company){
    
    let filteredList = this.state.companyList.filter(function (item){
      
      return (company["Company Code"] !== item["Company Code"]);
    })
    
       this.setState({
     companyList: filteredList
  });
  }
  
  
  render() {
    return (
      <div className="create-new-company">
        <div className="row">
          <section className="form col-6">
                    <h1>Create New Investment</h1>
                    <form onSubmit={this.addItem}>
                        <legend>
                            <h3>Add New Target</h3>
                            <p>Input target information in the form below. </p>
                        </legend>
                            <b>Company Code:</b>
                            <input ref={(code) => this._codeInput= code}></input><br />
                            <b>Target Name:</b>
                            <input ref={(name) => this._nameInput = name}></input><br />
                            <b>Status: </b> 
                            <select ref={(status) => this._status = status}>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Researching">Researching</option>
                                <option value="Denied">Denied</option>
                            </select><br />
                            <b>Company Information:</b>
                            <input ref={(info) => this._companyInfo = info}></input><br />
                            <b>Key Contacts:</b>
                            <input ref={(contacts) => this._contacts = contacts}></input><br />
                            <b>Financial Performance:</b><br />
                            <textarea ref={(performance) => this._financialPerformance = performance}rows="5" cols="20" /><br />
                        <input type="submit" className="submit" value="Add New Target" />
      </form>
      </section>
      </div>
{/* its not passing a delete function? */}
<Companies entries={this.state.companyList} deleteItem={company => this.deleteItem(company)} />
      </div>
    
    );
  }
}
  
