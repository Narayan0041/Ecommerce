import React from 'react'

export default function ProductListCom({ ProductImage, title, Price, Category, description }) {
    return (
        <>
            <div className="ProductContainer">
                <div className="ProductSection">
                    <img src={ProductImage} alt='ProductImage' width={150} />
                    <div className="ProductInfo">
                        <h2>{title}</h2>
                        <p>₹{Price}</p>
                        <div>{Category}</div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
