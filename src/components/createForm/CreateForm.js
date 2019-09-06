import React from "react";
import Companies from "../companies";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        margin: 10,
        width: 200
    },
    button: {
       width: '12rem'
    }
};

//need to figure out how to create a record correctly
//all fields are fine except select
//then need to send the company down into the props,
//then clear form state don't want to save entries into form state because unnecessary


export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: {}
        };
    }

    addItem = ()=> {
        console.log(this.state)
    };

    handleChange = name => event => {
        this.setState({...this.state.companyList, companyList: {[name]: event.target.value}});
    };

    render() {
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
                                            onChange={this.handleChange("Company Code")}
                                        />

                                        <TextField
                                            id="standard-with-placeholder"
                                            label="Company Name"
                                            placeholder="ABC Real Estate"
                                            margin="normal"
                                            style={styles.textField}
                                            onChange={this.handleChange("Company Name")}
                                            />

                                        <FormHelperText style={styles.textField}>
                                            Status
                                        </FormHelperText>
                                        <Select
                                            onChange={this.handleChange("Status")}
                                            inputProps={{value: "pending", label: "Pending"}}
                                            style={styles.textField}
                                            helpertext="Status"
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
                                            margin="normal"
                                            onChange={this.handleChange("Company Synopsis")}
                                        />
                                        <TextField
                                            id="standard-multiline-flexible"
                                            label="Key Contacts"
                                            multiline
                                            rowsMax="6"
                                            style={styles.textField}
                                            margin="normal"
                                            onChange={this.handleChange("Key Contacts")}
                                        />
                                        <Button className="submit"
                                                onClick={e => this.addItem(e)}
                                                style={styles.button}>
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
                        companyCard={this.state.companyList}
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
