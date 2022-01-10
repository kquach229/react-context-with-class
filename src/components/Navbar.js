import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { user, isAuthenticated, toggleAuth } = useContext(AuthContext);
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
  )
}
 
export default Navbar;