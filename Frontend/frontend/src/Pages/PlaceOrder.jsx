import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal' 
import easypaisa from '../images/easypaisa.png'
import cod from '../images/cod.png'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod');
  const {navigate,backend_url,token,cartItems,setCartItems,getCartAmount,delivery_fee,products}=useContext(ShopContext);
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    province:'',
    zipCode:'',
    country:'',
    phone:''

  })

  const onChangeHandler=(e)=>{
    const name=e.target.name
    const value=e.target.value

    setFormData(data=>({...data,[name]:value}))

  }

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try {
      let orderItems=[]
      
      for(const items in cartItems){
        for (const item in cartItems[items]){
          if (cartItems[items][item]>0){
            const itemInfo=structuredClone(products.find(product=>product._id===items))
            if (itemInfo){
              itemInfo.size=item
              itemInfo.quantity=cartItems[items][item]
              orderItems.push(itemInfo)
            }

          }
        }
      }
      let orderData={
        address:formData,
        items:orderItems,
        amount:getCartAmount()+delivery_fee,
      }
      
      switch (method){
        //api call for COD
        case 'cod':
          const res=await axios.post(backend_url+'/api/order/place',orderData,{headers:{token}})
          if (res.data.success){
            setCartItems({})
            navigate('/orders')
          }
          else{
            toast.error(res.data.message)
          }
          break;
        default:
          break;

      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        {/*---------------Left side------------------------------------------*/}
        <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
          <div className='text-xl my-3 sm:text-2xl'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
          </div>
          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last Name' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
          <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email Address' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
        
        <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
            <input required onChange={onChangeHandler} name='province' value={formData.province} type="text" placeholder='Province' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
          <div className='flex gap-3'>
            <input required onChange={onChangeHandler} name='zipCode' value={formData.zipCode} type="number" placeholder='Postal Code' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
            <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
          </div>
           <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder='Phone Number' className='border border-gray-500 rounded py-1.5 px-3.5 w-full'/>
        </div>

        {/*---------------Right side------------------------------------------*/}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal/>
          </div>

          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD'}/>

            <div className='mt-5 flex flex-col gap-4'>
             

              <button
                type='button'
                onClick={() => setMethod('cod')}
                className='flex w-full items-center gap-4 text-left'
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    method === 'cod' ? 'border-[#7a4b2f]' : 'border-[#b99985]'
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${method === 'cod' ? 'bg-[#7a4b2f]' : 'bg-transparent'}`}></span>
                </span>
                <img className='h-6 w-auto' src={cod} alt='Cash on delivery' />
                <div>
                  <p className='text-sm font-medium text-[#2f1d14] sm:text-base'>Cash On Delivery</p>
                  <p className='text-xs text-[#7a6557] sm:text-sm'>Pay in cash once your order arrives at your doorstep.</p>
                </div>
              </button>
            </div>
            <div className='w-full text-end mt-8'>
              <button type='submit'  className='bg-[#E75480] text-white px-16 py-3 text:sm'>
                Place Order
              </button>
            </div>
          </div>

        </div>
    </form>
  )
}

export default PlaceOrder