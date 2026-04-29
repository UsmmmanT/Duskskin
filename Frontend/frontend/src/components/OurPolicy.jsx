import React from 'react'
import exchange from '../images/exchange.png'
import quality from '../images/quality.png'
import support from '../images/support.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs  sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={exchange} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Fast Delivery</p>
            <p className='text-gray-400'>Get your products delivered quickly and safely</p>
        </div>
        <div>
            <img src={quality} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Quality Guarantee</p>
            <p className='text-gray-400'>We stand behind our products</p>
        </div>
        <div>
            <img src={support} className="w-12 m-auto mb-5" alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>Our team is always ready to help you</p>
        </div>
    </div>
  )
}

export default OurPolicy
