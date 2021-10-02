import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageContextProvider } from './context/PageContext'
import { AnswersContextProvider } from './context/AnswersContext'

ReactDOM.render(
  <React.StrictMode>
    <PageContextProvider>
      <AnswersContextProvider>
        <App />
      </AnswersContextProvider>
    </PageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
