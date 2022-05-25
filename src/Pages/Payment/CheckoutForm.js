import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({pay}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[cardError,setCardError] = useState('');
    const[success,setSuccess] = useState('');
    const[transactionId,setTransactionId] = useState('');
    const[clientSecret,setClientSecret] =useState('');
    const[processing,setProcessing] =useState(false);
    const{ _id,price,name,buyer} = pay;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])
    
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
  
      if (!stripe || !elements) {
        
        return;
      }
  
      
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      });
  
      setCardError(error?.message || '');
      setSuccess('')
      setProcessing(true)
      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
         clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:buyer
            },
          },
        },
      );
      if(intentError){
          setCardError(intentError?.message);
          setProcessing(false)
          
      }
      else{
          setCardError('')
          console.log(paymentIntent)
          setSuccess('your payment is completed');
          setTransactionId(paymentIntent.id);
           const payment = {
               booking:_id,
               transactionId:paymentIntent.id

           }
          fetch(`http://localhost:5000/booking/${_id}`,{
              method:'PATCH',
              headers:{
                 'content-type':"application/json"

              },
              body:JSON.stringify({payment})
          }).then(res=>res.json()).then(data=>{
              setProcessing(false)
              console.log(data)
          })
      }
    };
     



    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-700'>{success}</p>
                    <p>Your transaction id :{transactionId}</p>
                </div>
            }

        </>

    );
};

export default CheckoutForm;