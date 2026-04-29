import React from 'react'
import { useState,useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {
  const {productId}=useParams();
  const [productData,setProductData]=useState(false);
  const {products,currency,addToCart,getProductPrice,getProductStartingPrice}=useContext(ShopContext);
  const [image,setImage]=useState('');
  const [size,setSize]=useState('');
  const displayedPrice = productData
    ? (size ? getProductPrice(productData, size) : getProductStartingPrice(productData))
    : 0;

  const fetchProductData=async()=>{
    const matchedProduct = products.find((item)=>item._id===productId);

    if (matchedProduct) {
      setProductData(matchedProduct);
      setImage(matchedProduct.image[0]);
      return;
    }

    setProductData(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  useEffect(() => {
    if (!productData) {
      setSize('');
      return;
    }

    if (size && !productData.sizes.includes(size)) {
      setSize('');
    }
  }, [productData, size])

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[productId])

 

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*-------------Product Details Section-------------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*-------------Product Images--------------------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />

              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>

            <img src={image} className='w-full h-auto' alt="" />

          </div>

        </div>
        {/*-------------Product Info--------------------------*/}

        <div className='flex-1'>
          <h3 className='text-2xl font-medium mt-2'>{productData.name}</h3>
          <p className='mt-5 text-3xl font-medium'>
            {size ? `${currency} ${displayedPrice}` : `From ${currency} ${displayedPrice}`}
          </p>
          <p className='mt-2 text-sm uppercase tracking-[0.18em] text-gray-500'>
            
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size Selector */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Select Size</p>
            <div className='flex flex-wrap gap-2'>
              {productData.sizes.map((item,index)=>(
                <button 
                  key={index}
                  onClick={()=>setSize(item)} 
                  className={`border py-2 px-4 bg-white text-gray-800 rounded-none ${item === size ? 'border-yellow-400 bg-yellow-100' : 'border-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          

          {/*----------------------add to cart + size selecter-------------------------- */}
          <div className='mt-8 flex flex-col gap-3 sm:w-fit'>
            <button
              onClick={()=>{addToCart(productData._id,size); setSize(''); }}
              disabled={!size}
              className='group inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-[0_14px_30px_rgba(17,17,17,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_18px_36px_rgba(17,17,17,0.24)] active:translate-y-0 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500 disabled:shadow-none'
            >
              <span>Add to Bag</span>
              <span className='text-base leading-none transition-transform duration-300 group-hover:translate-x-1'>+</span>
            </button>
            <p className='text-xs uppercase tracking-[0.2em] text-gray-500'>
              {size ? `Ready to add size ${size}` : 'Select a size to continue'}
            </p>
          </div>

          {/*---------Add to card + size selecter ended---------------------------*/}

          <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Cash on Delivery Available</p>
              <p>Easy exchange and return policy</p>
            </div>

        </div>
      </div>
      {/*Description and review section*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>kopi-luwak, siphon, crema, and barista</p>
            <p>Premium beauty at every shade</p>
        </div>

      </div>
            {/*-------------Related Products Section-------------------*/}
            <RelatedProducts category={productData.category} currentProductId={productData._id}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product