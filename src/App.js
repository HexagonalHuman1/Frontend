import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Statics from './statics/statics';
import Home from './home/home'
import Feed from './feed/feed'
import My from './mypage/mypage'
import Prologue from './pages/Prologue';
import Main from './main/Main';
import SignUp from './pages/SignUp';
import ProfileSetting from './pages/ProfileSetting';
import MyPage from './pages/MyPage.js';
import Profile from './pages/Profile.js';
import AddTodoList from './todo/AddTodoList.jsx';
import CreateDairy from './diary/CreateDiary.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/statics' element={<Statics />} />
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/my' element={<My/>}/>

        <Route path='/prologue' element={<Prologue />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/profilesetting' element={<ProfileSetting />} />
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addTodoList' element={<AddTodoList/>}/>
        <Route path='/createDiary' element={<CreateDairy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;