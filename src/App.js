import React from 'react';
import './App.css';
import Form from './Components/Form';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
      <Form />
      </SnackbarProvider>
    </div>
  );
}

export default App;
