import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuestionContextProvider } from './context/QuestionContext'
import { AnswersContextProvider } from './context/AnswersContext'

ReactDOM.render(
  <React.StrictMode>
    <QuestionContextProvider>
      <AnswersContextProvider>
        <App />
      </AnswersContextProvider>
    </QuestionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
