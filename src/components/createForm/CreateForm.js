import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const status = [
    {value: "Pending", label: "Pending"},
    {value: "Approved", label: "Approved"},
    {value: "Researching", label: "Researching"},
    {value: "Denied", label: "Denied"}
];

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

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyInfo: {
                status: 'Pending',
            }
        };
    }

    addItem = () => {
        console.log(this.state)
    };

    handleChange = event => {
        this.setState({
            companyInfo: {...this.state.companyInfo, [event.target.name]: event.target.value}
        });
    };


    render() {
        return (
            <div className="create-new-company">
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
                                        id="companyCode"
                                        label="Company Code"
                                        name="Company Code"
                                        placeholder="ABC123"
                                        margin="normal"
                                        style={styles.textField}
                                        onBlur={this.handleChange}
                                    />

                                    <TextField
                                        id="companyName"
                                        label="Company Name"
                                        name="Company Name"
                                        placeholder="ABC Real Estate"
                                        margin="normal"
                                        style={styles.textField}
                                        onBlur={this.handleChange}

                                    />

                                    <FormHelperText style={styles.textField}>
                                        Status
                                    </FormHelperText>
                                    <Select
                                        value={this.state.companyInfo.status}
                                        label="Status"
                                        name="status"
                                        style={styles.textField}
                                        helpertext="Status"
                                        onChange={this.handleChange}

                                    >
                                        {status.map((obj) => {
                                            return <MenuItem
                                                key={obj.value}
                                                value={obj.value}>
                                                {obj.label}
                                            </MenuItem>
                                        })}

                                    </Select>
                                    <FormHelperText style={styles.textField}>
                                        Please select the company review status
                                    </FormHelperText>

                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Company Synopsis"
                                        name="Company Synopsis"
                                        multiline
                                        rowsMax="6"
                                        style={styles.textField}

                                        margin="normal"
                                        onBlur={this.handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Key Contacts"
                                        name="Key Contacts"
                                        multiline
                                        rowsMax="6"
                                        value={this.state.multiline}
                                        style={styles.textField}
                                        margin="normal"
                                        onBlur={this.handleChange}
                                    />
                                    <Button className="submit"
                                            onClick={this.addItem}
                                            style={styles.button}>
                                        Submit New Target
                                    </Button>
                                </FormControl>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
