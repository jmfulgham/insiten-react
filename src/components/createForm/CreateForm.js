import React from "react";
// import '../responsive.css';
import Companies from "../companies";
import "./CreateForm.css";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const status = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "researching", label: "Researching" },
  { value: "denied", label: "Denied" }
];

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = { companyList: [], status };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  addItem(e) {
    e.preventDefault();

    let newCompany = {
      "Company Code": this._codeInput.value,
      "Company Name": this._nameInput.value,
      Status: this._status.value,
      "Company Information": this._companyInfo.value,
      "Key Contacts": this._contacts.value,
      "Financial Performance": this._financialPerformance.value
    };

    this.setState(prevState => {
      return {
        companyList: prevState.companyList.concat(newCompany)
      };
    });

    this._codeInput.value = "";
    this._nameInput.value = "";
    this._companyInfo.value = "";
    this._contacts.value = "";
    this._financialPerformance.value = "";
  }

  deleteItem(company) {
    let filteredList = this.state.companyList.filter(function(item) {
      return company["Company Code"] !== item["Company Code"];
    });

    this.setState({
      companyList: filteredList
    });
  }

  handleEdit(companyProps, newState) {
    const oldName = companyProps.name;

    const oldCode = companyProps.code;
    const oldStatus = companyProps.status;
    const oldContacts = companyProps.contacts;
    const oldPerformance = companyProps.performance;
    const oldInfo = companyProps.info;
    let newName = newState.companyName;
    let newCode = newState.code;
    let newStatus = newState.status;
    let newContacts = newState.contacts;
    let newPerformance = newState.performance;
    let newInfo = newState.info;

    this.setState({
      companyList: this.state.companyList.map(
        item =>
          item["Company Code"] === oldCode
            ? {
                ["Company Name"]: newName || oldName,
                ["Company Code"]: newCode || oldCode,
                ["Status"]: newStatus || oldStatus,
                ["Company Information"]: newInfo || oldInfo,
                ["Key Contacts"]: newContacts || oldContacts,
                ["Financial Performance"]: newPerformance || oldPerformance
              }
            : item
      )
    });
  }

  render() {
    return (
      <div className="create-new-company">
        <div className="row">
          <div>
            <Card>
              <CardContent>
                <Typography variant="h3">Create a New Investment</Typography>
                <form onSubmit={this.addItem}>
                  <legend>
                    <h3>Add New Target</h3>
                    <p>Input target information in the form below. </p>
                  </legend>

                  <TextField
                    id="standard-with-placeholder"
                    label="Company Code"
                    placeholder="ABC123"
                    margin="normal"
                  />

                  <TextField
                    id="standard-with-placeholder"
                    label="Company Name"
                    placeholder="ABC Real Estate"
                    margin="normal"
                  />

                  <TextField
                    id="standard-select-currency-native"
                    select
                    label="Status"
                    value={this.state.status}
                    SelectProps={{
                      native: true
                    }}
                    helperText="Please select the company's status"
                    margin="normal"
                    onChange={this.handleChange("status")}
                  >
                    {status.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-multiline-flexible"
                    label="Company Synopsis"
                    multiline
                    rowsMax="6"
                    value={this.state.multiline}
                    // onChange={this.handleChange('multiline')}
                    margin="normal"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Key Contacts"
                    multiline
                    rowsMax="6"
                    value={this.state.multiline}
                    // onChange={this.handleChange('multiline')}
                    margin="normal"
                  />

                  <input
                    type="submit"
                    className="submit"
                    value="Add New Target"
                  />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Companies
            companyList={this.state.companyList}
            deleteItem={company => this.deleteItem(company)}
            handleEdit={(currentData, newData) =>
              this.handleEdit(currentData, newData)
            }
          />
        </div>
      </div>
    );
  }
}
