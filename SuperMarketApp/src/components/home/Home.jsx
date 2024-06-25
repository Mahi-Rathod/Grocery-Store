import React from 'react'
import GallerySlider from './GallerySlider'
import CategoriesSlider from './CategoriesSlider'
import CustomTitle from '../utils/CustomTitle'
import TopFeaturedProduct from './TopFeaturedProduct'
import BestValues from './BestValues'

function Home() {
  return (
    <div className='text-red-500 w-full'>
      <GallerySlider />
      <section className='md:w-[80%] py-2 m-auto w-[100%] flex-col justify-center items-center'>
        <CustomTitle name="Shop By" title="Categories" />
        <CategoriesSlider />
      </section>

      <section className='md:w-[80%] py-2 m-auto w-[100%] flex-col  mt-10'>
        <CustomTitle name='For You' title='Top Featured Product' />
        <TopFeaturedProduct />
      </section>
      
      <section className='md:w-[80%] py-2 m-auto w-[100%] flex-col  mt-10'>
        <CustomTitle name='For You' title='Best Values' />
        <BestValues />
      </section>
      
      <section className='md:w-[80%] py-2 m-auto w-[100%] flex-col  mt-10'>
        <CustomTitle name='For You' title='Fresh Vegetables & Fruits' />
        <TopFeaturedProduct />
      </section>

      <section className='md:w-[80%] py-2 m-auto w-[100%] flex-col  mt-10'>
        <CustomTitle name='For You' title='Added New Products' />
        <TopFeaturedProduct />
      </section>      
    </div>
  )
}

export default Home