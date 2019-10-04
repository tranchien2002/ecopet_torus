import React from 'react';
import * as actions from 'actions';
import store from 'store';
import './index.css';
class Loading extends React.Component {
  login = () => {
    store.dispatch(actions.web3TorusConnect());
  };

  render() {
    return (
      <div>
        <div className='container-custom'>
          <img
            alt=''
            src={require('assets/img/lg.blue-longcat-spinner.gif')}
            className='gif-load'
          />
          <br />
          <div className='wrapper'>
            <img
              alt='Login via Google'
              className='centered'
              src={require('assets/img/Torus_sign_in.svg')}
              onClick={this.login}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
