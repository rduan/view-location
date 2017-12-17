import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
// import reducer from './reducers';
// import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

let store,wrapper
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}

beforeEach(()=>{
    store = mockStore(initialState)
    // wrapper = mount( <Provider store={store}><App /></Provider> )
})

it('renders without crashing', () => {
  // const store = createStore(
  //   reducer,
  //   applyMiddleware(thunk)
  // );




  // const store = mockStore()
  
  // const div = document.createElement('div');
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // , div);
});
