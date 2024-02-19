import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Statics from './statics/statics';
import Main from "./main/Main.jsx";
import Prologue from './pages/Prologue';
import SignUp from './pages/SignUp';
import ProfileSetting from './pages/ProfileSetting';
import MyPage from './pages/MyPage.js';
import Profile from './pages/Profile.js';
import styled from "styled-components";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/statics' element={<Statics />} />
        <Route path='/profilesetting' element={<ProfileSetting/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;