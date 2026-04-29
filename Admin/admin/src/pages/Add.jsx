import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin_assets/assets'
import { backend_url } from '../App'
import { currency } from '../App'
import { CATEGORIES, SUBCATEGORIES, BEAUTY_SIZES } from '../constants/categories'

const sizeOptions = BEAUTY_SIZES.map(size => `${size.label} (${size.volume})`)

const Add = () => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [selectedSizes, setSelectedSizes] = useState([])
  const [sizePrices, setSizePrices] = useState({})
  const [bestSeller, setBestSeller] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleSize = (size) => {
    setSelectedSizes((currentSizes) => {
      if (currentSizes.includes(size)) {
        setSizePrices((currentPrices) => {
          const updatedPrices = { ...currentPrices }
          delete updatedPrices[size]
          return updatedPrices
        })
        return currentSizes.filter((item) => item !== size)
      }
      return [...currentSizes, size]
    })
  }

  const updateSizePrice = (size, value) => {
    setSizePrices((currentPrices) => ({
      ...currentPrices,
      [size]: value,
    }))
  }

  const resetForm = () => {
    setImage1(false)
    setImage2(false)
    setImage3(false)
    setImage4(false)
    setName('')
    setDescription('')
    setCategory('')
    setSubCategory('')
    setSelectedSizes([])
    setSizePrices({})
    setBestSeller(false)
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (selectedSizes.length === 0) {
      toast.error('Select at least one product size')
      return
    }

    let normalizedSizePrices
    try {
      normalizedSizePrices = selectedSizes.reduce((accumulator, size) => {
        const parsedPrice = Number(sizePrices[size])
        if (!Number.isFinite(parsedPrice) || parsedPrice < 0) {
          throw new Error(`Enter a valid price for ${size}`)
        }
        accumulator[size] = parsedPrice
        return accumulator
      }, {})
    } catch (validationError) {
      toast.error(validationError.message)
      return
    }

    try {
      setIsSubmitting(true)

      const startingPrice = Math.min(...Object.values(normalizedSizePrices))

      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', String(startingPrice))
      formData.append('category', category)
      formData.append('subCategory', subCategory)
      formData.append('sizes', JSON.stringify(selectedSizes))
      formData.append('sizePrices', JSON.stringify(normalizedSizePrices))
      formData.append('bestSeller', bestSeller)

      if (image1) formData.append('image1', image1)
      if (image2) formData.append('image2', image2)
      if (image3) formData.append('image3', image3)
      if (image4) formData.append('image4', image4)

      const response = await axios.post(`${backend_url}/api/product/add`, formData, {
        headers: { token: localStorage.getItem('token') },
      })

      if (response.data.success) {
        toast.success(response.data.message)
        resetForm()
        return
      }

      toast.error(response.data.message)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4'>
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex flex-wrap gap-3'>
          <label htmlFor='image1'>
            <img
              className='w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer'
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
              alt='Upload product 1'
            />
            <input onChange={(event) => setImage1(event.target.files[0])} type='file' id='image1' hidden required />
          </label>

          <label htmlFor='image2'>
            <img
              className='w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer'
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
              alt='Upload product 2'
            />
            <input onChange={(event) => setImage2(event.target.files[0])} type='file' id='image2' hidden />
          </label>

          <label htmlFor='image3'>
            <img
              className='w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer'
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
              alt='Upload product 3'
            />
            <input onChange={(event) => setImage3(event.target.files[0])} type='file' id='image3' hidden />
          </label>

          <label htmlFor='image4'>
            <img
              className='w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer'
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
              alt='Upload product 4'
            />
            <input onChange={(event) => setImage4(event.target.files[0])} type='file' id='image4' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          className='w-full max-w-[500px] border border-gray-300 rounded px-3 py-2'
          type='text'
          placeholder='Type here'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          className='w-full max-w-[500px] border border-gray-300 rounded px-3 py-2'
          placeholder='Enter description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={category}
            onChange={(event) => {
              setCategory(event.target.value)
              setSubCategory('')
            }}
            required
          >
            <option value=''>Select category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {category && SUBCATEGORIES[category]?.length > 0 && (
          <div>
            <p className='mb-2'>Sub Category</p>
            <select
              className='w-full border border-gray-300 rounded px-3 py-2'
              value={subCategory}
              onChange={(event) => setSubCategory(event.target.value)}
            >
              <option value=''>Select subcategory (optional)</option>
              {SUBCATEGORIES[category].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className='flex items-center gap-2 mt-7'>
          <input
            type='checkbox'
            id='bestseller'
            checked={bestSeller}
            onChange={(event) => setBestSeller(event.target.checked)}
          />
          <label className='cursor-pointer' htmlFor='bestseller'>
            Add to bestseller
          </label>
        </div>
      </div>

      <div className='w-full max-w-[620px]'>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex flex-wrap gap-2'>
          {sizeOptions.map((size) => {
            const isActive = selectedSizes.includes(size)
            return (
              <button
                key={size}
                type='button'
                onClick={() => toggleSize(size)}
                className={`min-w-20 rounded border px-4 py-2 text-sm ${
                  isActive ? 'border-[#E75480] bg-[#E75480] text-white' : 'border-gray-300 bg-white text-gray-700'
                }`}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>

      {selectedSizes.length > 0 && (
        <div className='w-full max-w-[620px]'>
          <p className='mb-2'>Size-wise Prices</p>
          <div className='grid gap-3 sm:grid-cols-2'>
            {selectedSizes.map((size) => (
              <label key={size} className='flex flex-col gap-2 rounded border border-gray-200 px-4 py-3'>
                <span className='text-sm font-medium text-gray-700'>{size}</span>
                <input
                  className='w-full border border-gray-300 rounded px-3 py-2'
                  type='number'
                  min='0'
                  step='0.01'
                  placeholder={`${currency} 250`}
                  value={sizePrices[size] || ''}
                  onChange={(event) => updateSizePrice(size, event.target.value)}
                  required
                />
              </label>
            ))}
          </div>
        </div>
      )}

      <button
        type='submit'
        className='w-28 py-3 mt-2 bg-[#E75480] text-white rounded disabled:opacity-60'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}

export default Add