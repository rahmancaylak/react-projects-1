import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// How to Change body background color?
// https://github.com/chakra-ui/chakra-ui/discussions/5048#discussioncomment-1616609
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: '#f1f5f8',
      }
    })
  },
})

const root = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
  </React.StrictMode>,
  root
);