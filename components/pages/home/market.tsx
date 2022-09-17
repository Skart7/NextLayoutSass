import React from 'react'

import { products } from '../../../localdb'
import ProductCarousel from './ProductCarousel'

export default function Market() {
    return (
        <>
            <ProductCarousel
                titleSelector='Laptops'
                totalSlides={products.filter(data => data.category === 'laptops').length}
                mappingData={products.filter(data => data.category === 'laptops')}            
            />
            <ProductCarousel
                titleSelector='Mobiles'
                totalSlides={products.filter(data => data.category === 'mobiles').length}
                mappingData={products.filter(data => data.category === 'mobiles')}            
            />
        </>
    )
}