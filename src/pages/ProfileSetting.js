import React from 'react';
import Mbutton from "../components/Mbutton"
import "../css/Prologue.css"

const ProfileSetting = () => {
    return (
        <div className='profilesetting_container'>
            <div className='profilesetting_content'>
                <div className='profilesetting_title'>프로필 설정</div>
                <form>
                    <div>
                        <button className='profileimg_set'><img src="img/addimg.png" alt="프로필 사진 추가"/></button>
                    </div>
                    <div className='profileset_form'>
                        <span className='name_title'>이름</span>
                        <input type="text" className='name'/><br/>
                    </div>
                    <div className='profileset_form'>
                        <span className='sub_title'>한줄소개</span>
                        <input type="text" placeholder='나는 어떤 사람인가요?' className='intro'/>
                    </div>
                    <Mbutton color={'#000'}>확인</Mbutton>
                </form>
            </div>
        </div>
    );
};

export default ProfileSetting;