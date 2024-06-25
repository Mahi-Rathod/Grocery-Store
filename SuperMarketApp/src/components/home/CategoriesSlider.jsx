import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from '../utils/SliderArrows';

import CategoriesCard from './CategoriesCard'
import personalCare from '../../assets/categoriesAssets/personalCare.JPG'
import beverages from '../../assets/categoriesAssets/beverages.JPG'
import dairyAndEggs from '../../assets/categoriesAssets/dairyAndEggs.JPG'
import electronics from '../../assets/categoriesAssets/electronics.JPG'
import groceryAndStaples from '../../assets/categoriesAssets/groceryAndStaples.JPG'
import homeCare from '../../assets/categoriesAssets/homeCare.JPG'
import meatAndSeaFood from '../../assets/categoriesAssets/meatAndSeaFood.JPG'
import noodlesAndScocess from '../../assets/categoriesAssets/noodlesAndScocess.JPG'
import snacks from '../../assets/categoriesAssets/snacks.JPG'
import petCare from '../../assets/categoriesAssets/petCare.JPG'
import vegetables from '../../assets/categoriesAssets/vegetables.JPG'



function CategoriesSlider() {
    const categories = [
        {
            title: 'Personal Care',
            img: personalCare,
            pageUrl: "/"
        },
        {
            title: 'Beverages',
            img: beverages,
            pageUrl: "/"
        },
        {
            title: 'Dairy & Eggs',
            img: dairyAndEggs,
            pageUrl: "/"
        },
        {
            title: 'Electronics',
            img: electronics,
            pageUrl: "/"
        },
        {
            title: 'Grocery & Staples',
            img: groceryAndStaples,
            pageUrl: "/"
        },
        {
            title: 'Home Care',
            img: homeCare,
            pageUrl: "/"
        },
        {
            title: 'Meat & Sea Food',
            img: meatAndSeaFood,
            pageUrl: '/'
        },
        {
            title: 'Noodles & souces',
            img: noodlesAndScocess,
            pageUrl: '/'
        },
        {
            title: 'Snacks',
            img: snacks,
            pageUrl: '/'
        },
        {
            title: 'Pet Care',
            img: petCare,
            pageUrl: '/'
        },
        {
            title: 'Vegetables & Fruits',
            img: vegetables,
            pageUrl: '/'
        },
    ]


    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    };


    return (
        <div className='w-[95%] md:w-[80%] m-auto py-1'>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index}>
                        <CategoriesCard
                            title={category.title}
                            img={category.img}
                            pageUrl={category.pageUrl}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CategoriesSlider


