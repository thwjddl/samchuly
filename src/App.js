import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/Main';
import Change_0 from './pages/Change_0';
import Change_1 from './pages/Change_1';
import Change_2 from './pages/Change_2';
import Change_3 from './pages/Change_3';
import Change_4 from './pages/Change_4';

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Change_0 />} />
          <Route path="/list01" element={<Change_1 />} />
          <Route path="/list02" element={<Change_2 />} />
          <Route path="/list03" element={<Change_3 />} />
          <Route path="/list04" element={<Change_4 />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App