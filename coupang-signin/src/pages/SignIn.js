import React from 'react'
import Logo from '../components/Logo/Logo'
import Input from '../components/Input/Input'
import Checkbox from '../components/Checkbox/Checkbox'
import SearchInfo from '../components/SearchInfo/SearchInfo'
import Button from '../components/Button/Button'
import Copyright from '../components/Copyright'
import { logo, copyright } from './Signin.module.scss';
import Icon from '../components/Icon/Icon'

export default function SignIn() {
  return (
    <>
      <Logo className={logo}/>
      <Input type="email" />
      <Input type="password" />
      <Checkbox />
      <SearchInfo />
      <Button type="signin"/>
      <Button type="signup"/>
      <Copyright className={copyright}/>
    </>
  )
}
