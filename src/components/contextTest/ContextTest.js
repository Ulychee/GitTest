import React from 'react';
import Children from './ContextChild'

export const UserContext = React.createContext('')

const Index = () => {

  return (
      <UserContext.Provider value={'chuan-zhi'}>
        <Children/>
      </UserContext.Provider>
  )
}

export default Index;
