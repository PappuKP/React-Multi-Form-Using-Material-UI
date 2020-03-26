import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField
            hintText='Date of Joining'
            floatingLabelText='Date of Joining'
            onChange={handleChange('doj')}
            defaultValue={values.doj}
          />
          <br />
          <TextField
            hintText='Enter Password'
            floatingLabelText='Password'
            onChange={handleChange('password')}
            defaultValue={values.password}
          />
          <br />
          <TextField
            hintText='Enter Position Of Responsibility'
            floatingLabelText='Position Of Responsibility'
            onChange={handleChange('positionOR')}
            defaultValue={values.positionOR}
          />
          <br />
          <TextField
            hintText='Enter Education'
            floatingLabelText='Education'
            onChange={handleChange('education')}
            defaultValue={values.education}
          />
          <br />
          <TextField
            hintText='Enter Salary'
            floatingLabelText='Salary'
            onChange={handleChange('salary')}
            defaultValue={values.salary}
          />
          <br />
          <TextField
            hintText='Enter SSSM ID'
            floatingLabelText='SSSM ID'
            onChange={handleChange('sssmId')}
            defaultValue={values.sssmId}
          />
          <br />
          <TextField
            hintText='Enter Metadata'
            floatingLabelText='Metadata'
            onChange={handleChange('metadata')}
            defaultValue={values.metadata}
          />
          <br />
          <RaisedButton
            label='Continue'
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
export default FormPersonalDetails;
