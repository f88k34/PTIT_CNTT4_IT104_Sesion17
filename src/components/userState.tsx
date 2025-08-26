import React, { useState } from 'react'
type User = {
    name: string,
    age: number
    passwword: number
    address?: string
}
export default function UserState() {
    // const[email, setEmail]=useState<string>("")
    // const[password, setPassword]=useState<number>(6)
    // const[address, setAddress]=useState("HCM")
    const[user]=useState<User|null>({
      name: "Nguyễn Văn A",
      age: 20,
      passwword: 123456
    })
    const [count, setCount]=useState(0)
    //cập nhật giá trị của state
    const handleIncrease = ():void =>{
      setCount((prev) => prev + 1)
    }
   const handleUpdate = ():void =>{
      // setUser({address: "HCM"})
    }
    return (
    <div>
      <p>Tên sinh viên: {count}</p>
      <h2>userInfor: {JSON.stringify(user)}</h2>
      <button onClick={handleIncrease}>Bấm</button>
      <button onClick={handleUpdate}>Đăng xuất</button>
    </div>
  )
}
