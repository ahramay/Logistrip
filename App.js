import React from 'react'

//screens
// import Login from './src/screens/Login';

import {StatusBar} from 'react-native';
import Root from './src/navigators/Root'
// import SearchResult from 'SearchResult ';



const App = () => {
  return (
    <>
    <StatusBar barStyle='dark-content' />
    <Root/>

    </>
  )
}

export default App


