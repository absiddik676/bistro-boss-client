import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const { user } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');


  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [price, axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('[PaymentMethod]', paymentMethod);
    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      },
    );
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId)
      const payment = {
        user: user?.email,
        transactionId,
        price,
        date: new Date(),
        status: 'service pending',
        quantity: cart.length,
        itemName: cart.map(item => item.name),
        itemID: cart.map(item => item._id),
        menuItemId: cart.map(item => item.menuItemId)
      }
      axiosSecure.post('payments', payment)
        .then(res => {
          console.log(res.data);
        })
    }
  };


  return (
    <>
      <form className='w-2/3 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline btn-secondary mt-4 btn-s' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 ml-8'> {cardError}</p>}
      {transactionId && <p className='text-green-600 ml-8'>  Transaction complete your transaction id: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;