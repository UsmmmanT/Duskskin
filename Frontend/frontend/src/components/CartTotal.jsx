import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { useContext } from 'react'

const CartTotal = () => {
    const { delivery_fee, currency, getCartAmount } = useContext(ShopContext)
     
  return (
    <div className='w-full rounded-[1.5rem] border border-[#e2c8b7] bg-white/60 px-5 py-5 shadow-[0_10px_30px_rgba(118,63,29,0.06)] sm:px-6'>
        <div className='text-2xl'>
            <Title text1={'TOTAL'} text2={'AMOUNT'}/>
        </div>  

        <div className='mt-3 flex flex-col gap-3 text-sm text-[#6b5648]'>
            <div className='flex justify-between'>
                <p>Sub Total:</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>

            <hr className='border-[#ead5c7]' />
            <div className='flex justify-between'>
            <p>Shipping Fee:</p>
            <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr className='border-[#ead5c7]' />
            <div className='flex justify-between text-[#2f1d14]'>
                <b>Total</b>
                <b>{currency} {getCartAmount() + delivery_fee}.00</b>

            </div>

        </div>
    </div>
  )
}

export default CartTotal