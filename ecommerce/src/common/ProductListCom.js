import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductListCom({ ProductImage, title, Price, Category, description, id }) {
    const navigate = useNavigate();
    const handleProduct = (id) => {
        navigate(`/${id}`);
    }
    return (
        <>
            <div className="ProductContainer">
                <div className="ProductSection">
                    <div className="ProductImageSection">
                        <img src={ProductImage} alt='ProductImage' width={130} />
                    </div>
                    <div className="ProductInfo">
                        {/* <h2 onClick={() => handleProduct(id)}>{title}</h2> */}
                        <Link to={`${id}`}><h2>{title}</h2></Link>
                        <h3>${Price}</h3>
                        <h4><img src='./image/tag.png' width={25} />{Category}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
