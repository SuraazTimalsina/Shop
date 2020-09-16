import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import Cartlist from './Cartlist';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() { 
        return (  
            <section>
                <ProductConsumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (     
                            <React.Fragment>
                               <h1>Your Cart</h1> 
                             {/* <Title name="your" title="cart"></Title>  */}
                        <CartColumns/>
                        <Cartlist value={value}/>
                        <CartTotals value={value}/>

                            </React.Fragment>          
        );
                    }
                    else{
                        return<EmptyCart/>;
                    }

                }}
                
                </ProductConsumer>
            </section>
       );
    }
}
 
