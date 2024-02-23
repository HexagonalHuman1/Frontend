import React, { useEffect, useRef, useCallback  } from 'react';
import "../css/recommend.css";

export default function RecommendBtn({ id, btnSub, btnTitle, img_path, currentClick, onClick })
 {

    const handleClick = () => {
        onClick(id);
    };

    return (
            <div id={id} onClick={handleClick}>
                <div className='btnInfo' id={id}>
                    <div className='btnSub'>{btnSub}</div>
                    <div className='btnTitle'>{btnTitle}</div>
                    <img src={img_path} alt="관련 이미지" className='btnImg'/>
                </div>
            </div>
    );
}
