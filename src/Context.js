import { createContext } from 'react';

const defaultContext = {
    red: false,
    blue: false,
    yellow: false,
};

const myContext = createContext(defaultContext);

export default myContext;