import React from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm ';
import useCart from '../../../hooks/useCart';
// TODO pk 
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Pay = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(totalPrice.toFixed(2))
    return (
        <div>
            <SectionTitle heading={'PAYMENT'} subHeading={'PLEASE PROCESS'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Pay;