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

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


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
          <div>
            <Card style={styles.container}>
              <CardContent>
                <Typography variant="h3" margin="30">
                  Create a New Investment
                </Typography>
                <div>
                <form onSubmit={this.addItem}>
                  <FormControl>
                      <Typography variant="h5"> Add New Target</Typography>
                      <Typography variant="subheading">
                        Input target information in the form below.
                      </Typography>
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

                    <FormHelperText style={styles.textField}>
                     Status
                    </FormHelperText>
                    <Select
                      value={this.state.status}
                      onChange={this.handleChange}
                      inputProps={{ value: "pending", label: "Pending" }}
                      style={styles.textField}
                      helperText = "Status"
                    >
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="researching">Researching</MenuItem>
                      <MenuItem value="denied">Denied</MenuItem>
                    </Select>
                    <FormHelperText style={styles.textField}>
                      Please select the company review status
                    </FormHelperText>

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
                  </FormControl>
                </form>
                </div>
              </CardContent>
            </Card>
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
