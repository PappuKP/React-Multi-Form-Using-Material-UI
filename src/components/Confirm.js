import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { fullName, fatherName, address, dob, aadharNumber, accountNumber, photo, email, doj, password, positionOR, education, salary, sssmId, metadata }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm User Data' />
          <List>
            <ListItem primaryText='Full Name' secondaryText={fullName} />
            <ListItem
              primaryText='Father’s/Spouse’s name'
              secondaryText={fatherName}
            />
            <ListItem primaryText='Full Address' secondaryText={address} />
            <ListItem primaryText='DD/MM/YY' secondaryText={dob} />
            <ListItem
              primaryText='Aadhar Number'
              secondaryText={aadharNumber}
            />
            <ListItem
              primaryText='Account number'
              secondaryText={accountNumber}
            />
            <ListItem primaryText='Current Photo' secondaryText={photo} />
            <ListItem primaryText='Email Address' secondaryText={email} />
            <ListItem primaryText='Date of Joining' secondaryText={doj} />
            <ListItem primaryText='Password' secondaryText={password} />
            <ListItem
              primaryText='Position Of Responsibility'
              secondaryText={positionOR}
            />
            <ListItem primaryText='Education' secondaryText={education} />
            <ListItem primaryText='Salary' secondaryText={salary} />
            <ListItem primaryText='SSSM ID' secondaryText={sssmId} />
            <ListItem primaryText='Metadata' secondaryText={metadata} />
          </List>
          <br />
          <RaisedButton
            label='Confirm & Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
