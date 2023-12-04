import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ProductListCom from '../common/ProductListCom';

export default function ProductList() {
    const [ProductListData, setPrductListData] = useState([])
    useEffect(() => {   
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setPrductListData(json))
                .catch(error => console.error('Error fetching data:', error));

        // fetchData();
    }, [])

    return (
        <>
            <div className="ProductListPageContainer">
                {
                    ProductListData.map((product, key) => {
                        return (
                            <ProductListCom
                                key={key}
                                id={product.id}
                                ProductImage={product.image}
                                title={product.title}
                                Price={product.price}
                                Category={product.category}
                                description={product.description}
                            />

                        )
                    })
                }
            </div>
        </>
    )
}
