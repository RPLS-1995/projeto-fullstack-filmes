import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import TablePage from './components/TablePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
