import React from 'react'
import login from '../components/login'

const Login = ({...props}) => {
    const { onChange } = login()
  return (
    <div {...props}>
        Login
    </div>
  )
}

export default Login