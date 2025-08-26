import React from 'react'
import UserState from './components/userState'
import BTTH from './components/BTTH'
import Ex01 from './components/Ex1/Ex01'
import Ex02 from './components/Ex2/Ex02'
import ChangeColor from './components/Ex3/ChangeColor'
import Toggle from './components/Ex4/Toggle'
import Form from './components/Ex5/Form'
import CountText from './components/Ex6/CountText'
import Select from './components/Ex7/Select'
import CheckBox from './components/Ex8/CheckBox'
import Ex9 from './components/Ex9/Ex9'

export default function App() {

  return (
    <div>
        {/* <BTTH/> */}
    {/* <UserState/>     */}
    <Ex01></Ex01>
    <Ex02></Ex02>
    <ChangeColor></ChangeColor>
    <Toggle></Toggle>
    <Form></Form>
    <CountText></CountText>
    <Select></Select>
    <CheckBox></CheckBox>
    <Ex9></Ex9>
    </div>
  )
}
