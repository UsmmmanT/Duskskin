import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

const parseJsonField = (value, fallback) => {
    if (value === undefined || value === null || value === '') {
        return fallback
    }

    if (typeof value !== 'string') {
        return value
    }

    return JSON.parse(value)
}

const buildSizePriceMap = (sizes, rawSizePrices, fallbackPrice) => {
    const parsedSizePrices = parseJsonField(rawSizePrices, {})
    const defaultPrice = Number(fallbackPrice)

    if (!Array.isArray(sizes) || sizes.length === 0) {
        throw new Error('At least one size is required')
    }

    return sizes.reduce((accumulator, size) => {
        const parsedPrice = Number(parsedSizePrices?.[size])
        const resolvedPrice = Number.isFinite(parsedPrice) ? parsedPrice : defaultPrice

        if (!Number.isFinite(resolvedPrice) || resolvedPrice < 0) {
            throw new Error(`Enter a valid price for size ${size}`)
        }

        accumulator[size] = resolvedPrice
        return accumulator
    }, {})
}

const normalizeProductPricing = (product) => {
    const sizes = Array.isArray(product?.sizes) ? product.sizes : []
    const fallbackPrice = Number(product?.price)
    const sizePrices = buildSizePriceMap(sizes, product?.sizePrices, fallbackPrice)
    const normalizedPrices = Object.values(sizePrices)

    return {
        ...product,
        price: normalizedPrices.length > 0 ? Math.min(...normalizedPrices) : fallbackPrice,
        sizePrices,
    }
}

//function for add product
const addProduct=async (req,res)=>{
 try {
    const { name, description, price, sizePrices, category, sizes, bestSeller, bestseller } = req.body;
    const image1=req.files.image1 && req.files.image1[0]
    const image2=req.files.image2 && req.files.image2[0]
    const image3=req.files.image3 && req.files.image3[0]
    const image4=req.files.image4 && req.files.image4[0]

    const images=[image1,image2,image3,image4].filter((item)=>item!=undefined)

    let imagesUrl= await Promise.all(
        images.map(async(item)=>{
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
        })
    )

    const parsedSizes = parseJsonField(sizes, [])
    const parsedSizePrices = buildSizePriceMap(parsedSizes, sizePrices, price)
    const lowestPrice = Math.min(...Object.values(parsedSizePrices))

    const productData={
        name,
        description,
        price:lowestPrice,
        sizePrices: parsedSizePrices,
        category,
        image: imagesUrl,
        sizes: parsedSizes,
        bestSeller: (bestSeller ?? bestseller) === 'true',
        date:Date.now()
    }
    console.log(productData)

    const product =new productModel(productData)

    await product.save()
    res.json({success:true,message:'Product added succesfully'})
    
 } catch (error) {
    console.error(error)
    res.json({success:false,message:error.message})
}
}

//function for list products
const listProducts=async (req,res)=>{
    try {
       const products= await productModel.find({}).lean();

       res.json({success:true,products: products.map(normalizeProductPricing)})
        
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }

}

//remove product from list
const removeProduct=async (req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'Product Removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

//function for single product info
const singleProduct=async (req,res)=>{
    try {
        const {productId}=req.body

        const product=await productModel.findById(productId).lean()
        res.json({success:true,product: product ? normalizeProductPricing(product) : null})

    } catch (error) {
       res.json({success:false,message:error.message}) 
        
    }

}

export {addProduct,listProducts,removeProduct,singleProduct}