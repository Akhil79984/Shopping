
import React from 'react'

const Collections = (props) => {
  const{title, image1,image2,image3, image4, image6} = props.gentsFashion;
  //const{title, image1, image2,image3}=props.womensFashion;
  return (
    <div className='CollectionSection'>
      <h1>{title}</h1>
      <div className='BannerBox'>
        <img src='Asset/Men banner.jpg' alt=''/>
      </div>
      <div className='Images'>
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image6} alt={title}/>

      </div>
      </div>
     
  )
}

export default Collections;