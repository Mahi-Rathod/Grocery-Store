import SliderProduct from './SliderProduct'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import veges from "../../assets/veges.jpg"
import '../../App.css'


function GallerySlider({
    products = [
        {
            title: 'Buy More & Eat Lots',
            discount: 3,
            name: 'Fresh Vegetables',
            img: veges,
        },
        {
            title: 'Buy More & Save More',
            discount: 10,
            name: 'Fresh Fruits',
            img: veges,
        },
        {
            title: 'Buy More & Save More',
            discount: 6,
            name: 'Fresh Vegetables',
            img: veges,
        },
        {
            title: 'Buy More & Spend Less',
            discount: 8,
            name: 'Fresh Bananas',
            img: veges,
        },
        {
            title: 'Buy More',
            discount: 9,
            name: 'Fresh Meats',
            img: veges,
        },

    ]
}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
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
                    arrows: false, // Disable custom arrows on mobile
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Disable custom arrows on mobile
                },
            },
        ],
    };

    return (
        <section className={`p-7 w-[100%]`}>
            <Slider {...settings}>
                {products.map((product, i) => (
                    <div className='p-[20px] min-w-[100%]' key={i}>
                        <SliderProduct
                            title={product.title}
                            discount={product.discount}
                            name={product.name}
                            img={product.img}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default GallerySlider