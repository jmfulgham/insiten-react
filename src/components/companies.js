import React from 'react';

//update CSS files


export default class Companies extends React.Component{
  constructor(props){
    super(props);
    
    this.state= {toggle:false}
    this.handleToggle= this.handleToggle.bind(this)
  }

    
  handleToggle(company){
   console.log('we are editing this section ', company); 
    this.setState(prevState =>({
      toggle: !prevState.toggle}));

    console.log(this.state.toggle);
    return this.state.toggle
  
    
        //if true, I want the button to say Save and the section to be editable
    //if false, I want the button to say Edit and the section to be uneditable
    //we want the company information to be editable, specified by company code
   // let companyCode = company["Company Code"];
   // console.log(companyCode);
    // let isEditable = companyCode.is('.editable');
    // companyCode.prop('contenteditable', !isEditable);
    // $("." + code).toggleClass('contenteditable');
    // $("." + code).toggleClass('editable');
    // isEditable ? $(".edit" + code).text('Edit') : $(".edit" + code).text('Save');
}

  createList(company){
    return (<section className={company["Company Code"]} contentEditable={this.state.toggle} key={company["Company Code"]}><h3>{company["Company Name"]}</h3><br /><ul>
            <li>Status: {company["Status"]}</li><br />
            <li>Company Information: {company["Company Information"]}</li><br />
            <li>Key Contacts: {company["Key Contacts"]}</li><br />
            <li>Financial Performance: {company["Financial Performance"]}</li>
            </ul>
            <button key={'edit'+company["Company Code"]} onClick={()=>  this.handleToggle(company)}>edit</button>
            <button key={'delete'+company["Company Code"]} onClick={() => this.props.deleteItem(company)}>Delete</button>
            </section>
            )
  }
  
 //every section toggles because it's in map. but I need all buttons in each section...
  //on toggle i want to change the button text from edit to save
  //I want the section to become editable when clicked.
  //then I want the section to not be editable when 'save' is clicked
  
  render(){
    let companyEntries = this.props.entries;
    let listItems = companyEntries.map((company) => this.createList(company)); //changed to a take an arrow function so 
    // the this - keyword remember who he is. its like having another function:
    // createList2(company) { return this.createList(company)}
  //onsole.log("are we getting the toggle? ", this.state.toggle)
    return(<div className="theList">
           {listItems}
           </div>
           );
  }
}