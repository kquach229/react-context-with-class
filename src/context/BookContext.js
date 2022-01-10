import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider =  ({children}) => {
  const [books, setBooks] = useState([
    { title: 'Name of the wind', id: 1 },
    { title: 'Name of the water', id: 2 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;

