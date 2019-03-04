import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
// provider is the glue for react and redux

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

class App extends Component {

  render() {
    //store holds state
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
