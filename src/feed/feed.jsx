import Nav from '../components/Nav';
import "../css/Feed.css";

function Feed(){
    return(
        <>
        <div className='feed_container'>
            <div>
            <div className='feed_info'>
                <div className='feed_title'>피드</div>
                <div className='feed_sub'>더욱 건강하고 편안한 하루를 보내봐요 </div>
            </div>
            <div className='feed_content'>
                <div className='content1'>
                    <div>
                        <div className='content_sub'>권장 걸음 수</div>
                        <div className='content_title1'>5000보</div>
                        <div>
                            <img src="img/shoes.png"/>
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <div>
                    <div className='content_sub'>권장 휴대폰 사용량</div>
                        <div className='content_title2'>5시간 30분</div>
                        <div>
                            <img src="img/phone.png"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className='feed_secondContent_title'>가볼 만한 플레이스를 <br/>추천할게요</div>
            <div className='feed_secondContent'>
                <div className='secondContent_first'>
                    <img src = "img/librairie.png" className='second_img'/>
                    <div>
                        <div className='secondContent_info'>
                            <div className='info_title'>리브레리</div>
                            <div className='info_sub'>공부하기 좋은 카페</div>
                        </div>
                        <div>
                            <div className='hash'><span className='one'>#심플한</span><span className='two'>#조용한</span><span className='three'>#빡집중</span></div>
                            <div className='map' onClick={() => window.open("https://naver.me/5eFfifjo")}>지도 보기</div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className='secondContent_second'>
                    <img src="img/plop.png" className="second_img"/>
                    <div>
                        <div className='secondContent_info'>
                            <div className='info_title'>플롭 연남</div>
                            <div className='info_sub'>분위기 좋은 피자가게</div>
                        </div>
                        <div>
                            <div className='hash'><span className='four'>#유쾌한</span><span className='five'>#깔끔한</span><span className='six'>#맛있는</span></div>
                            <div className='map' onClick={() => window.open("https://naver.me/GX0dBNdA")}>지도 보기</div>
                            <hr/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav/>
        </>
    );
}

export default Feed;