import React from 'react';
import Result from './components/result';
import FormTodo from './components/FormTodo';

function App() {
  return (
    <div className="App">
      <div className="container">
          <FormTodo />
        <div className="row">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
