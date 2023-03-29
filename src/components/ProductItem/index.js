import React, { useState } from 'react';

import CenterMode from '../ImagesSlider';

import {BsFillStarFill} from 'react-icons/bs'

import './index.css';


const ProductItem = (props) => {


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    const {productDetails}=props;
    const{title,price,brand,rating,thumbnail,discountPercentage,category,stock,images}=productDetails;

    return(
        <div className='product-container'>
            <div className='thumbnail-container'>
                <img className='thumbnail' src={thumbnail} alt='product'/>
            </div>
            
            <div className='brand-container'>
                <h5 className='brand'>{brand}</h5>
                <h1 className='title'>{title}</h1>
                <div className='rating-cont'><BsFillStarFill className="product-rating-star-icon" /><p className='rating'>{rating}</p></div>
                
            </div>
            <div className='price-container'>
                <h1 className='price'>{`$ ${price}`}</h1>
                <p className='discount'>{`Discount: ${discountPercentage} %`}</p>
            </div>
            <div className='category-container'>
                <h1 className='category'>{category}</h1>
            </div>
            <div className='stock-container'>
                {stock?<p className='instock'>{`${stock} In stock`}</p>:<p className='outstock'>{`${stock} Out of stock`}</p>}
            </div>
            <div>
            <button onClick={toggleModal} className="viewBtn">View</button>

                    {modal && (
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                                <div className="modal-content">
                                    <CenterMode images={images}/>
                                </div>
                            </div>
                    )}

            </div>

        </div>
        );
        
  };
  
  export default ProductItem;
  

