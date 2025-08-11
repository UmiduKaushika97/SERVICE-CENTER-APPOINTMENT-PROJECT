// import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'





const Login = () => {

  const navigate = useNavigate()

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  // const handleLogin = () => {
  //   if (username === 'admin' && password === 'admin123') {
  //   localStorage.setItem('role', 'admin')
  //   navigate('/admin')
  // } else if (username === 'user' && password === 'user123') {
  //   localStorage.setItem('role', 'user')
  //   navigate('/user')
  // } else {
  //   alert('Invalid credentials!')
  // }
  // }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ username, password }) => {
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('role', 'admin')
        navigate('/admin/dashboard')
      } else if (username === 'user' && password === 'user123') {
        localStorage.setItem('role', 'user')
        navigate('/user')
      } else {
        alert('Invalid credentials!')
      }
    },
  })

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2 className="text-center text-2xl font-bold">Login</h2>
       <form onSubmit={formik.handleSubmit}>

      <TextInput
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Enter your username"
        />
        {formik.errors.username && formik.touched.username && (
          <p style={{ color: 'red' }}>{formik.errors.username}</p>
        )}


      <TextInput
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        )}

      <Button label="Login" onClick={formik.submitForm} />

      </form>
    </div>
  )
}

export default Login
