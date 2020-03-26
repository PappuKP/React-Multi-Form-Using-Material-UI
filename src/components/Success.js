import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
          <h1>Thank you </h1>
          <h1>Your Data has Saved into Our Database</h1>
          {/* <p>You will get an email with further instrution</p> */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
