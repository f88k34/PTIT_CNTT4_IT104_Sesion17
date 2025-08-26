import React from 'react'

export default function Ex01() {
    const[name]=React.useState<string>("Khánh")
  return (
    <div>
      <p>Tên tôi là: {name}</p>
    </div>
  )
}
