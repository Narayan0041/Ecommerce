import React, { useEffect, useState } from 'react'
import ProductListCom from '../common/ProductListCom';

export default function ProductList() {
    const [ProductListData, setPrductListData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setPrductListData(json))
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData();
    }, [])
    return (
        <>
            <div className="ProductListPageContainer">
                {
                    ProductListData.map((product, key) => {
                        return (
                <ProductListCom ProductImage={product.image} title={product.title} Price={product.price} Category={product.category}  description={product.description} />
                               )
                    })
                }
            </div>
        </>
    )
}
