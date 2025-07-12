import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<StudentForm />}></Route>
        <Route path='/list' element={<StudentList/>}></Route>
      </Routes>
    </>
  );
}

export default App;
