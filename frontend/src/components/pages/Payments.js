import React from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import toast from 'react-hot-toast';


export function Payments() {
    const notify = () => toast('the payment was canceled. Please Try again!');
    return (
        <div className='card'>
            <img className='img' src='https://images.squarespace-cdn.com/content/v1/56b312c32b8dde025b97c861/1547464627576-6VZM3U0H7OP4EU6NUTM5/adult-app-blur-1440722.jpg?format=2500w' style={{ width: '100%' }} alt={'My product'} />
            <div className='content'>
                <p className='product'>IOS Android Device</p>
                <p className='price'>$19.99</p>
                <PayPalButtons
                    style={{ layout: "horizontal" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: '20.99'
                                    },
                                    // custom_id: "e-book-12345"
                                }
                            ]
                        })
                    }}

                    onApproved={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                            toast.success('Payment completed. Thanks you, ' + details.payer.name.given_name)
                        })
                    }}

                    onCancel={() => (notify, { duration: 10000 })}
                    onError={(err) => toast(`there was an error or something went wrong. Try gain!${err}`, { duration: 8000 })}
                />
            </div>
        </div>
    )
}