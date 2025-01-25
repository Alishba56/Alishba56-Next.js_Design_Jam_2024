"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

type ReturnFormInputs = {
  orderNumber: string
  email: string
  reason: string
  productName: string
  quantity: number
}

const reasons = [
  "Wrong item received",
  "Defective product",
  "No longer needed",
  "Better price available",
  "Arrived too late",
  "Other",
]

export default function ReturnForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReturnFormInputs>()

  const onSubmit: SubmitHandler<ReturnFormInputs> = (data) => {
    console.log(data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
        <p className="font-bold">Return Request Submitted</p>
        <p>
          We ve received your return request and will process it shortly. You ll receive an email with further
          instructions.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNumber">
          Order Number
        </label>
        <input
          {...register("orderNumber", { required: "Order number is required" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="orderNumber"
          type="text"
          placeholder="Enter your order number"
        />
        {errors.orderNumber && <p className="text-red-500 text-xs italic">{errors.orderNumber.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
          Reason for Return
        </label>
        <select
          {...register("reason", { required: "Please select a reason" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reason"
        >
          <option value="">Select a reason</option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && <p className="text-red-500 text-xs italic">{errors.reason.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
          Product Name
        </label>
        <input
          {...register("productName", { required: "Product name is required" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productName"
          type="text"
          placeholder="Enter the product name"
        />
        {errors.productName && <p className="text-red-500 text-xs italic">{errors.productName.message}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          {...register("quantity", {
            required: "Quantity is required",
            min: {
              value: 1,
              message: "Quantity must be at least 1",
            },
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          placeholder="Enter the quantity"
        />
        {errors.quantity && <p className="text-red-500 text-xs italic">{errors.quantity.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit Return Request
        </button>
      </div>
    </form>
  )
}

