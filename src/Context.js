import { createContext } from 'react';

const defaultContext = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
}

const anotherContext = {
  signal: { 
    color: 'red' 
  },
}

const myContext = createContext(defaultContext, anotherContext);

export default myContext;