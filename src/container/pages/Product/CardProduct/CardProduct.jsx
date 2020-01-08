import React, {Component} from 'react';
import Counter from './Counter';


class CardProduct extends Component{

    render(){
        return(
                 <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/Ayam+Potong+0708.jpg" alt="" />
                    </div>
                        <p className="product-title">Daging Ayam</p>
                        <p className="product-price">Rp 430,000</p>
                        <Counter />
                    </div>
        );
    }
}

export default CardProduct;