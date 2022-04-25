import React from 'react'
import Card from './Card'

function Products() {

    const products = [
        {
            id: 1,
            name: 'Jeans',
            price: '$19.99',
            image_src: 'https://i.ibb.co/qMQ75QZ/jeans.jpg',
            description: 'A pair of jeans from Levi\'s.'
        },
        {
            id: 2,
            name: 'Shirt',
            price: '$29.99',
            image_src: 'https://i.ibb.co/qMQ75QZ/shirt.jpg',
            description: 'A nice shirt from Levi\'s.'
        },
        {
            id: 3,
            name: 'Sweater',
            price: '$19.99',
            image_src: 'https://i.ibb.co/qMQ75QZ/sweater.jpg',
            description: 'A nice sweater from Levi\'s.'
        }
    ]


    return (
        <div className="Product-List">
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products