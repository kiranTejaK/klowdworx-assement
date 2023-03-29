import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ImagesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  }
  const {images} = props

  return (
    <>
      <Slider {...settings}>
        {images.map((eachimage,index) => (
                <img className='slider-image' src={eachimage} alt=''/>
        ))}
      </Slider>
    </>
  )
}

export default ImagesSlider
