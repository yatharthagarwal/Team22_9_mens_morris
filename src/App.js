import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Manual from './pages/Manual'
import Home from './pages/Home'
import Board from './pages/Board'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='board' element={<Board />} />
            <Route path="manual" element={<Manual />} />
          </ Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
