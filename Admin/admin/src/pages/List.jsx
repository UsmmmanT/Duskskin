import React from 'react'
import axios from 'axios'
import { backend_url } from '../App'
import { useState, useEffect } from 'react'
import { currency } from '../App'
import { toast } from 'react-toastify'

const getSizePriceMap = (product) => {
  const fallbackPrice = Number(product?.price) || 0
  const sizes = Array.isArray(product?.sizes) ? product.sizes : []
  const sizePrices = product?.sizePrices && typeof product.sizePrices === 'object' ? product.sizePrices : {}

  return sizes.reduce((accumulator, size) => {
    const parsedPrice = Number(sizePrices[size])
    accumulator[size] = Number.isFinite(parsedPrice) ? parsedPrice : fallbackPrice
    return accumulator
  }, {})
}

const getPriceLabel = (product) => {
  const prices = Object.values(getSizePriceMap(product))

  if (prices.length === 0) {
    return `${currency} ${Number(product?.price) || 0}`
  }

  const lowestPrice = Math.min(...prices)
  const highestPrice = Math.max(...prices)

  return lowestPrice === highestPrice
    ? `${currency} ${lowestPrice}`
    : `${currency} ${lowestPrice} - ${currency} ${highestPrice}`
}

const getSizePriceSummary = (product) =>
  Object.entries(getSizePriceMap(product))
    .map(([size, price]) => `${size}: ${currency} ${price}`)
    .join(' | ')

const List = ({token}) => {
  const [list, setList] = useState([])
  const adminToken = token || localStorage.getItem('token')

  const fetchList = async () => {
    try {
      const res = await axios.get(backend_url + '/api/product/list')
      if (res.data.success) {
        setList(res.data.products)
        
      }
      else{
        toast.error(res.data.message)
      }

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }

  }

  const removeProduct=async(id)=>{
    try {
      const res=await axios.post(backend_url+'/api/product/remove',{id},{headers:{token: adminToken}})
      if (res.data.success){
        toast.success(res.data.message);
        await fetchList();
      }
      else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }

  }


  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
    <p className='mb-2'>All Products List</p>
    <div className='flex flex-col gap-2'>
      {/*-----list table title---------*/}

      <div className="hidden md:grid md:grid-cols-[80px_2fr_1.5fr_1.2fr_1.4fr_80px] items-center gap-4 py-3 px-4 border bg-gray-100 text-sm">
      <b>Image</b>
      <b>Name</b>
      <b>Category</b>
      <b>SubCategory</b>
      <b className='text-center'>Price</b>
      <b className='text-center'>Action</b>
      </div>

      {/*-----product list---------*/}
      {
        list.map((item,index)=>(
          <div className='grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_2fr_1.5fr_1.2fr_1.4fr_80px] items-center gap-4 px-4 py-3 border' key={index}>
            <img className='w-12 h-12 object-cover' src={item.image[0]} alt="" />
            <div>
              <p className='truncate'>{item.name}</p>
              <p className='mt-1 text-xs text-gray-500 md:hidden'>{getPriceLabel(item)}</p>
            </div>
            <p className='hidden md:block text-sm'>{item.category}</p>
            <p className='hidden md:block text-sm'>{item.subCategory || '-'}</p>
            <div className='hidden md:block'>
              <p>{getPriceLabel(item)}</p>
            </div>
            <p onClick={()=>(removeProduct(item._id))} className='text-right md:text-center cursor-pointer text-lg'>X</p>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default List