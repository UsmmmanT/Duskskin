import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestSeller = products.filter(
            (item) => item.bestSeller === true || item.bestseller === true
        );
        setBestSeller(bestSeller.slice(0, 5));
    }, [products])

    return (
        <section className='my-20'>

            <div className='py-4 text-center'>

                <div className='text-3xl font-bold'>
                    <Title text1={'BEST'} text2={'SELLER'}></Title>
                </div>
                <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6b5648] sm:text-base'>DuskSkin favorites that keep finding their way back into routines, beauty bags, and daily rituals.</p>
            </div>

            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} product={item} />
                    ))
                }

            </div>
        </section>
    )
}

export default BestSeller