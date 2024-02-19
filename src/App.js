import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Statics from './statics/statics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/statics' element={<Statics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;