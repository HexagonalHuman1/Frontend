import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Statics from './statics/statics';
import Home from './home/home'
import Feed from './feed/feed'
import My from './mypage/mypage'
import Prologue from './pages/Prologue';
import Main from './main/Main';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/prologue' element={<Prologue />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/statics' element={<Statics />} />
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/my' element={<My/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;