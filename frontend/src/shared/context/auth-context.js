import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {}
});

 // we want the user id everywhere and we need to connect to all the components through the context api 