import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const [GetPaticularData ,setGetPaticularData]=useState({})
    const {id} =useParams();
    console.log(GetPaticularData)
   useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(json =>setGetPaticularData(json) )
}, [])
  return (
    <>
     <div className="ProductContainer">
                <div className="ProductSection">
                    <div className="ProductImageSection">
                        <img src={GetPaticularData.image} alt='ProductImage' width={130} />
                    </div>
                    <div className="ProductInfo">
                        <h2 >{GetPaticularData.title}</h2>
                        <h3>${GetPaticularData.price}</h3>
                        <h4><img src='./image/tag.png' width={25} />{GetPaticularData.category}</h4>
                        <p>{GetPaticularData.description}</p>
                    </div>
                </div>
            </div>
    </>
  )
}
