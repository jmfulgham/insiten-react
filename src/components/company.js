import React from 'react';
import './companies.css';

export default class Company extends React.Component{
  constructor(props){
    super(props);
    
    this.state= {toggle:false}
    this.handleNewItem= this.handleNewItem.bind(this)
    this.handleChange= this.handleChange.bind(this);
  }
  

  handleToggle( company, newData){
    
    this.setState(prevState =>({
      toggle: !prevState.toggle}));
    if( this.state.toggle === true){
    this.handleNewItem(company, newData)
  }
    else {return}
  }
  
  createCompanySection(props){
    return (<section className={props.code} key={props.code}><h3>{props.name}</h3><br /><ul>
            <li>Status: {props.status}</li><br />
            <li>Company Information: {props.info}</li><br />
            <li>Key Contacts: {props.contacts}</li><br />
            <li>Financial Performance: {props.performance}</li>
            </ul>
            <button key={'edit'+ props.code} onClick={(company, newData)=>  this.handleToggle(props, newData)}>Edit</button>
            <button key={'delete'+ props.code} onClick={() => props.deleteItem(props)}>Delete</button>
            </section>
            )
  }
  
  createCompanyForm(props){
    let state= this.state;
    return (<section className={props.code} key={props.code} ><form>
            <h2><label >Company Code </label> <input name="code" defaultValue={props.code}  onChange={(e, name) => this.handleChange(e, name)} /></h2><br />
            <h3><label >Company Name: </label> <input name="companyName" defaultValue={props.name}  onChange={(e, name) => this.handleChange(e, name)} /></h3><br />
            <label>Status:</label> <select defaultValue={props.status} name="status" onChange={(e, name) => this.handleChange(e, name)}>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Researching">Researching</option>
                                <option value="Denied">Denied</option>
                            </select><br />
            <label>Company Information: </label> <input name="info" onChange={(e, name) => this.handleChange(e, name)} defaultValue={props.info}/><br />
            <label>Key Contacts: </label><input name="contacts" onChange={(e, name) => this.handleChange(e, name)} defaultValue={props.contacts}/> <br />
            <label>Financial Performance: </label><textarea defaultValue={props.performance} name="performance" onChange={(e, name) => this.handleChange(e, name)}rows="5" cols="10" /><br />
            <button key={'save'+ props.code} onClick={(props, newData)=>  this.handleToggle(props, newData)}>Save</button>
            <button key={'delete'+props.code} onClick={() => this.props.deleteItem(props)}>Delete</button>
</form>
            </section>
            )
  }
  
  
  
  
  handleChange(e, name){
    e.preventDefault();
    console.log(e.target.value, e.target.name)
    this.setState({ [e.target.name] : e.target.value})
  }


handleNewItem(company, newData){
  newData=this.state;
  company = this.props;
  this.props.handleEdit( company, newData );
  
}
  
  render(){
    let companySection = this.createCompanySection(this.props);
    let companyForm = this.createCompanyForm(this.props)
    if (this.state.toggle === true){
      return companyForm
  }
      else{
        return companySection
      }
      }
    }
