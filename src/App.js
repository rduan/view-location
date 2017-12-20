import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import redux from 'redux';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';


export class App extends Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      isFetching: props.isFetching,
      url: props.url 
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.props.actions.fetchLocation();
  }

  render() {
    let loc = ()=>{
      if (this.props.isFetching) {
        return ('Loading...');
     } else if (this.props.url) {
        return (<a href={this.props.url}  target="_blank">View Your Location</a>);
     }
    }    
    

    console.log(loc);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        {loc()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    isFetching: state.location.isFetching,
    url: state.location.url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
