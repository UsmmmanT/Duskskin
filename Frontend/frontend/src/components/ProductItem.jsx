import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const {currency, getProductStartingPrice}=useContext(ShopContext)
  return (
    <Link
      className='group block cursor-pointer text-[#3f2b21] transition duration-300 hover:-translate-y-1'
      to={`/product/${product._id}`}
    >
        <div className='overflow-hidden rounded-[1.4rem] bg-[#ead9cd]'>
            <img className='h-56 w-full object-cover transition duration-500 ease-in-out group-hover:scale-110' src={product.image[0]} alt={product.name} />
        </div>
        <div className='px-1 pb-2 pt-4'>
          <p className='pb-1 text-[15px] font-medium leading-6 tracking-[0.01em] text-[#463126] transition group-hover:text-[#2f1d14]'>{product.name}</p>
          <p className='text-[15px] font-semibold tracking-[0.08em] text-[#8a4f30]'>From {currency}{getProductStartingPrice(product)}</p>
        </div>

    </Link>
  )
}

export default ProductItem
