import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CATEGORIES, SUBCATEGORIES } from '../constants/categories'
import down from '../images/down.png'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const [showFilter, setShowFilter] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])
  const { products, search, showSearch, getProductStartingPrice } = useContext(ShopContext)
  const [sortType, setSortType] = useState('relevant')

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubcategories, setSelectedSubcategories] = useState([])

  const toggleCategory = (categoryValue) => {
    if (selectedCategory === categoryValue) {
      setSelectedCategory(null)
      setSelectedSubcategories([])
    } else {
      setSelectedCategory(categoryValue)
      setSelectedSubcategories([])
    }
  }

  const toggleSubcategory = (subcategoryValue) => {
    if (selectedSubcategories.includes(subcategoryValue)) {
      setSelectedSubcategories(selectedSubcategories.filter(item => item !== subcategoryValue))
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategoryValue])
    }
  }

  const applyFilters = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (selectedCategory) {
      productsCopy = productsCopy.filter(item =>
        item.category?.toLowerCase() === selectedCategory.toLowerCase()
      )

      // If subcategories are selected, filter by those
      if (selectedSubcategories.length > 0) {
        productsCopy = productsCopy.filter(item =>
          selectedSubcategories.includes(item.subCategory)
        )
      }
    }

    setFilteredProducts(productsCopy)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedCategory, selectedSubcategories, products, search, showSearch])

  const sortProduct = () => {
    const fpCopy = filteredProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => getProductStartingPrice(a) - getProductStartingPrice(b)))
        break
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => getProductStartingPrice(b) - getProductStartingPrice(a)))
        break
      default:
        applyFilters()
        break
    }
  }

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t' style={{ borderColor: 'var(--color-border)' }}>
      {/* Filter Options */}
      <div className='min-w-60 sm:max-w-[260px]'>
        <p
          className='my-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest cursor-pointer'
          style={{ color: 'var(--color-brand-primary)' }}
        >
          Filter by Category
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-5 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={down}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`mt-4 rounded border p-4 ${showFilter ? '' : 'hidden'} sm:block`}
          style={{ backgroundColor: 'var(--color-brand-accent)', borderColor: 'var(--color-border)' }}
        >
          <p className='mb-4 text-xs font-semibold uppercase tracking-widest' style={{ color: 'var(--color-brand-primary)' }}>
            Categories
          </p>

          <div className='flex flex-col gap-3 text-sm'>
            {CATEGORIES.map(cat => (
              <div key={cat.value}>
                <label className='flex items-center gap-3 cursor-pointer' style={{ color: 'var(--color-text-primary)' }}>
                  <input
                    type="checkbox"
                    checked={selectedCategory === cat.value}
                    onChange={() => toggleCategory(cat.value)}
                    className='h-4 w-4'
                    style={{ accentColor: 'var(--color-brand-primary)' }}
                  />
                  <span className='text-sm font-medium'>{cat.label}</span>
                </label>

                {/* Subcategories - shown when parent is selected */}
                {selectedCategory === cat.value && SUBCATEGORIES[cat.value] && (
                  <div className='ml-6 mt-3 flex flex-col gap-2 border-l pl-3' style={{ borderColor: 'var(--color-border)' }}>
                    {SUBCATEGORIES[cat.value].map(subcat => (
                      <label
                        key={subcat}
                        className='flex items-center gap-3 cursor-pointer text-xs'
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedSubcategories.includes(subcat)}
                          onChange={() => toggleSubcategory(subcat)}
                          className='h-3 w-3'
                          style={{ accentColor: 'var(--color-brand-primary)' }}
                        />
                        <span>{subcat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className='flex-1'>
        <div className='mb-5 flex items-center justify-between gap-4 text-base sm:text-2xl'>
          <Title text1={'NEW'} text2={'ARRIVALS'} />
          {/* Product Sort */}
          <select
            onChange={e => setSortType(e.target.value)}
            className='rounded border px-4 py-2 text-sm outline-none'
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-primary)' }}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 gap-4 gap-y-7 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className='py-12 text-center' style={{ color: 'var(--color-text-secondary)' }}>
            <p className='text-lg'>No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Collection