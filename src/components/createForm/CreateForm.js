import React from "react";
import Companies from "../companies";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const status = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "researching", label: "Researching" },
  { value: "denied", label: "Denied" }
];

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: 10,
    width: 200
  }
};

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyList: [
        {
          companyCode: "",
          companyName: "",
          status: [status],
          companyInfo: "",
          keyContacts: "",
          financialPerf: ""
        }
      ]
    };
  }

  addItem = e => {
    console.log(e.target.value);
  };

  handleChange = name => event => {
    this.setState({
      companyList: [...this.state.companyList, { name: event.target.value }]
    });
    console.log(this.state);
  };

  render() {
    const {
      companyList: {
        companyCode,
        companyName,
        status,
        companyInfo,
        keyContacts,
        financialPerf
      }
    } = this.state;
    return (
      <div className="create-new-company">
        <div className="row">
          <div>
            <Card style={styles.container}>
              <CardContent>
                <Typography variant="h3" margin="20">
                  Create a New Investment
                </Typography>
                <form onSubmit={this.addItem}>
                  <legend>
                    <Typography variant="h5"> Add New Target</Typography>
                    <Typography variant="caption">
                      Input target information in the form below.
                    </Typography>
                  </legend>

                  <TextField
                    id="standard-with-placeholder"
                    label="Company Code"
                    name="companyCode"
                    placeholder="ABC123"
                    margin="normal"
                    style={styles.textField}
                    value={companyCode}
                    onChange={e => {
                      this.handleChange("companyCode");
                    }}
                  />

                  <TextField
                    id="standard-with-placeholder"
                    label="Company Name"
                    placeholder="ABC Real Estate"
                    margin="normal"
                    style={styles.textField}
                    onChange={e => {
                      this.setState({ "Company Name": e.target.value });
                    }}
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
                    style={styles.textField}
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
                    style={styles.textField}
                    value={this.state.multiline}
                    margin="normal"
                    onChange={e => {
                      this.setState({ "Company Synopsis": e.target.value });
                    }}
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Key Contacts"
                    multiline
                    rowsMax="6"
                    value={this.state.multiline}
                    style={styles.textField}
                    margin="normal"
                    onChange={e => {
                      this.setState({ "Key Contacts": e.target.value });
                      console.log(this.state);
                    }}
                  />
                  <Button className="submit" onClick={e => this.addItem(e)}>
                    Submit New Target
                  </Button>
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
