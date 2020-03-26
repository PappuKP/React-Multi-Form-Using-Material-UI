import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter Your Full Name'
            floatingLabelText='Full Name'
            onChange={handleChange('fullName')}
            defaultValue={values.fullName}
          />
          <br />
          <TextField
            hintText='Enter Father’s/Spouse’s name'
            floatingLabelText='Father’s/Spouse’s name'
            onChange={handleChange('fatherName')}
            defaultValue={values.fatherName}
          />
          <br />
          <TextField
            hintText='Enter Your Full Address'
            floatingLabelText='Full Address'
            onChange={handleChange('address')}
            defaultValue={values.address}
          />
          <br />
          <TextField
            hintText='Enter Your Date of Birth'
            floatingLabelText='DD/MM/YY'
            onChange={handleChange('dob')}
            defaultValue={values.dob}
          />
          <br />
          <TextField
            hintText='Enter Aadhar Number'
            floatingLabelText='Aadhar Number'
            onChange={handleChange('aadharNumber')}
            defaultValue={values.aadharNumber}
          />
          <br />
          <TextField
            hintText='Enter Account number'
            floatingLabelText='Account number'
            onChange={handleChange('accountNumber')}
            defaultValue={values.accountNumber}
          />
          <br />
          <TextField
            hintText='Upload Your Photo'
            floatingLabelText='Current Photo'
            onChange={handleChange('photo')}
            defaultValue={values.photo}
          />
          <br />
          <TextField
            hintText='Enter Your Email Address'
            floatingLabelText='Email Address'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
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
