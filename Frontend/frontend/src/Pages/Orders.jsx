import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios'
import { toast } from 'react-toastify';

const Orders = () => {
  const { currency, getProductStartingPrice, backend_url, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {

    try {
      if (!token) {
        setOrderData([])
        return null;
      }
      const res = await axios.post(backend_url + '/api/order/usersorders', {}, { headers: { token } })

      if (res.data.success) {
        const allOrderItems = res.data.orders
          .flatMap((order) =>
            order.items.map((item) => ({
              ...item,
              status: order.status,
              date: order.date,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
            }))
          )
          .reverse()

        setOrderData(allOrderItems)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }

  }

  useEffect(() => {
    loadOrderData()

  }, [token])




  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />

      </div>

      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-500 grid grid-cols-1 md:grid-cols-3 md:items-center gap-4'>
              <div className='flex items-start text-sm gap-6'>
                <img className='w-16 sm:w-20' src={item.image?.[0]} alt={item.name} />

                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center text-base gap-3 mt-2 text-gray-500'>
                    <p className='text-lg'>{currency} {item.price || getProductStartingPrice(item)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size || 'N/A'}</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                </div>
              </div>

              <div className='flex items-center md:justify-center'>
                <div className='flex items-center gap-1'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm text-base'>{item.status}</p>
                </div>
              </div>

              <div className='md:justify-self-end'>
                <button className='border px-4 py-2 text-sm bg-[#E75480] text-white'>
                  Track Order
                </button>
              </div>


            </div>

          )
          )
        }
      </div>

    </div>
  )
}

export default Orders