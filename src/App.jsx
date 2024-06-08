import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ToDo from './components/ToDo';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ToDo />} />
          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App