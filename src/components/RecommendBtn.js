import React from 'react'
import "../css/recommend.css"

export default function RecommendBtn({id,btnSub,btnTitle,img_path}) {
  return (
    <div>
        <button className='buttonBox'>
            <div className='btnInfo'>
                <div className='btnSub'>{btnSub}</div>
                <div className='btnTitle'>{btnTitle}</div>
                <img src={img_path} alt="관련 이미지" className='btnImg'/>
            </div>
        </button>
    </div>
  )
}