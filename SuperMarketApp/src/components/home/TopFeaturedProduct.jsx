import React from 'react'
import Slider from 'react-slick'
import Product from './Product'
import { NextArrow, PrevArrow } from '../utils/SliderArrows'
import carrot from '../../assets/carrot.png'
const products = [
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },
    {
        title: 'Carrot',
        img: carrot,
        discount: 6,
        availability: true,
        amount: 10,
        isFav: false
    },

]

function TopFeaturedProduct() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    };
    return (
        <div className='w-[100%]  m-auto py-1'>
            <Slider {...settings} >
                {products.map((product, index) => (
                    <div key={index} className='w-full'>
                        <Product
                            discount={product.discount}
                            isFav={product.isFav}
                            img={product.img}
                            availability={product.availability}
                            title={product.title}
                            amount={product.amount}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default TopFeaturedProduct