import React, { Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends React.Component {
  render() { 
    return (
      <AuthContext.Consumer>{(authContext) => (
          <ThemeContext.Consumer>{(themeContext) => {
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            const { user, isAuthenticated, toggleAuth } = authContext;
            const message = `${user} ${isAuthenticated ? 'is logged in' : 'is logged out'}`;
              return (
                <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <h5 onClick={toggleAuth}>{message}</h5>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
      )}}
      </ThemeContext.Consumer>
    )}
      </AuthContext.Consumer>
    )
  }
}
 
export default Navbar;