import { useState } from 'react'
import './slider.scss'

export default function Sider({images}) {
  const [imageIndex,setImageIndex] =useState(null)

const changeSlide =(direction)=>{
  if(direction ==="left"){
    if(imageIndex===0){
         setImageIndex(images.lenght - 1)
    }else{
      setImageIndex(imageIndex - 1)
    }

  }else{
    if(imageIndex === images.length - 1){
      setImageIndex(0)
    }else{
      setImageIndex(imageIndex + 1)
    }

  }
}

  return (
    <div className="sider">
      {imageIndex !== null &&(
      <div className="fullSlider">
        <div className="arrow" onClick={()=>changeSlide('left')}>
          <img src='/arrow.png' alt=''/>
        </div>
        <div className="imgContainer">
          <img src={images[imageIndex]} alt=''/>
        </div>
        <div className="arrow" onClick={()=>changeSlide('right')}>
        <img src='/arrow.png' alt='' className='right' />
        </div>
        <div className="close" onClick={()=>setImageIndex(null)}>X</div>
      </div>
    )}
    <div className="bigImage" onClick={()=>setImageIndex(0)}>
      <img src={images[0]} alt='' />
    </div>
    <div className="smallImages" >
      {images.slice(1).map((image,index)=>{
        <img src={image} alt='' key={index}onClick={()=>setImageIndex(index  +1)}/>
      })}
    </div>
    </div>
  )
}
