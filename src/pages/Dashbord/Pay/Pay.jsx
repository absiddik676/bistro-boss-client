import React from 'react';
import SectionTitle from '../../../cmponents/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm ';
// TODO pk 
const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Pay = () => {
    return (
        <div>
            <SectionTitle heading={'PAYMENT'} subHeading={'PLEASE PROCESS'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Pay;