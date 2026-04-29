const toNumber = (value) => {
  const numericValue = Number(value)
  return Number.isFinite(numericValue) && numericValue >= 0 ? numericValue : null
}

export const getSizePriceMap = (product = {}) => {
  const rawSizePrices =
    product?.sizePrices && typeof product.sizePrices === 'object' ? product.sizePrices : {}
  const fallbackPrice = toNumber(product?.price) ?? 0
  const sizes = Array.isArray(product?.sizes) && product.sizes.length > 0
    ? product.sizes
    : Object.keys(rawSizePrices)

  return sizes.reduce((accumulator, size) => {
    accumulator[size] = toNumber(rawSizePrices[size]) ?? fallbackPrice
    return accumulator
  }, {})
}

export const getProductPrice = (product, size) => {
  const sizePriceMap = getSizePriceMap(product)

  if (size && sizePriceMap[size] !== undefined) {
    return sizePriceMap[size]
  }

  const prices = Object.values(sizePriceMap)
  return prices.length > 0 ? Math.min(...prices) : toNumber(product?.price) ?? 0
}

export const getProductStartingPrice = (product) => getProductPrice(product)