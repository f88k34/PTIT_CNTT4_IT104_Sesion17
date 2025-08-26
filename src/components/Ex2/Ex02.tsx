import React, { useState } from 'react'
type Product = {
  id: number
  name: string
  price: number
  quantity: number
}
export default function Ex02() {
    const [product] = useState<Product>({id: 1,name: "Coca cola",price: 15000,quantity: 1});
  return (
    <div>
      <h1>Thông tin sản phẩm</h1>
      <p>ID: {product.id}</p>
        <p>Tên: {product.name} </p>
        <p>Price: {product.price} $$</p>
        <p>QUantity: {product.quantity}</p>
    </div>
  )
}
