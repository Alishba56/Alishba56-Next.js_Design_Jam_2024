import React from 'react'
import { FaCcApplePay, FaGooglePay, FaPaypal, FaRegCreditCard } from "react-icons/fa";

interface PaymentOption {
    name: string;
    icon: React.ReactElement;
    description: string;
  }
  
  const paymentOptions: PaymentOption[] = [
    {
      name: "Credit Card",
      icon: <FaRegCreditCard />,
description: "Securely pay with Visa, Mastercard, and American Express.",
    },
    {
      name: "Debit Card",
      icon: <FaRegCreditCard />,
      description: "Use your debit card for quick and easy payments.",
    },
    {
      name: "PayPal",
      icon: <FaPaypal />,
      description: "Pay directly from your PayPal account.",
    },
    {
      name: "Apple Pay",
      icon: <FaCcApplePay />   ,
      description: "Fast and secure payments with Apple Pay.",
    },
    {
      name: "Google Pay",
      icon: <FaGooglePay /> ,
      description: "Easy and secure payments with Google Pay.",
    },
  ];

  
  const page = () => {
    return (
      <div>
        <div className="payment-options ">
  {paymentOptions.map((option) => (
    <div key={option.name} className="payment-option">
        <div className='flex text-2xl dark:text-blue-600 gap-10 font-bold ml-32 '>
        <h1>{option.icon}</h1>
      <h3>{option.name}</h3>
        </div>
      <p className='ml-32 my-8'>{option.description}</p>
    </div>
  ))}
</div>
        
      </div>
    )
  }
  
  export default page
  
  
