import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AllModels from './components/AllModels';
import UploadModel from './components/UploadModel';
import NotFound from './components/NotFound';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/all" element={<AllModels />} />
        <Route path="/upload" element={<UploadModel/>} />

        <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
