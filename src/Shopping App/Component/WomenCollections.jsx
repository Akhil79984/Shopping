
import React from 'react'

const WomenCollections = (props) => {
    const { title, image1, image2, image3, image4 } = props.WomensFashion
    return (
        <div className='WomensCollections'>
            <h1>{title}</h1>
            <div className='BannerBox'>
                <img src='Asset/Womens Banner.jpg' alt='' />
            </div>

            <div className='pictures'>
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
            </div>
        </div>
    )
}

export default WomenCollections;