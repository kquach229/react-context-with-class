import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';


class App extends React.Component {
  render() { 
    return (  
      <div className='App'>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    ) 
  }
}
 
export default App;