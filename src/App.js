import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import redux from 'redux';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';


export class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isFetching: this.props.isFetching,
      url: this.props.url 
    }
  }

  componentDidMount() {
    this.props.actions.fetchLocation();
  }

  render() {
    let loc;    
    if (this.state.isFetching) {
       loc = 'Loading...';
    } else if (this.state.url) {
       loc = '<a href="' + this.state.url + '" target="_blank">View Your Location</a>';
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Loading....
        {loc}
      </div>
    );
  }
}

function mapStateToProps({isFetching, url}) {
  return {
    isFetching: state.isFetching,
    url: state.url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
