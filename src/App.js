import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Statics from './statics/statics';
import Main from "./main/Main.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/statics' element={<Statics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;