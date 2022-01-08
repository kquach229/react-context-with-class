import React from 'react';
import { AuthContext } from '../context/AuthContext';

class AuthToggle extends React.Component {
  static contextType = AuthContext;
  render() { 
    const { id, user, isAuthenticated, toggleAuth} = this.context;
    return (
      <div>
        <div>{`${user} is ${!isAuthenticated ? 'not authenticated' : 'authenticated'}`}</div>
        <button onClick={toggleAuth}>Toggle Auth</button>
      </div>
    )
  }
}
 
export default AuthToggle;