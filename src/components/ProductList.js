import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../context'
class Productlist extends Component {
    
    render() { 
        return (  
<div>
<React.Fragment>
    <div className="py-5">
        <div className="container">
                <h1 align="center">OUR PRODUCTS</h1>
                <div className="row">
                    <ProductConsumer>
                        {value=>{
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product} />;
                            })
                        }

                        }
                    </ProductConsumer>
            </div>
        </div>
    </div>
</React.Fragment>
</div>        );
    }
}
 
export default Productlist;