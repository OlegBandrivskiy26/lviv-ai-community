import React from 'react'
import "../styles/sponsors.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsors = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,            
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
  
    return (
        <div className="sponsors">
            <div className="slider-container">
                <Slider {...settings}>
                    <div><div className='sponsors__img sponsors__img1'></div></div>
                    <div><div className='sponsors__img sponsors__img2'></div></div>
                    <div><div className='sponsors__img sponsors__img3'></div></div>
                    <div><div className='sponsors__img sponsors__img4'></div></div>
                    <div><div className='sponsors__img sponsors__img5'></div></div>
                    <div><div className='sponsors__img sponsors__img6'></div></div>
                    <div><div className='sponsors__img sponsors__img7'></div></div>
                    <div><div className='sponsors__img sponsors__img8'></div></div>
                    <div><div className='sponsors__img sponsors__img9'></div></div>
                </Slider>
            </div>
        </div>
    )
}

export default Sponsors;
