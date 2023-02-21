import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { loginApi } from '../services/auth';
import Link from 'next/link';

const Login = () => {
  const router = useRouter()

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <Formik
        initialValues={{
            email:"" ,
            password:""
        }}
        onSubmit={ async( values)=>{
          console.log(values)
          const {email ,password }= values;

          const payload = {
            email , password
          }

          const res = await loginApi(payload)
          console.log(res.data.token , "atrhszrytdgf")  
          router.push("/home")


        }}

        validationSchema={ Yup.object().shape({
            email:Yup.string().required("email is Required"),
            password:Yup.string().required("email is Required"),
        })

        }
      >
        {(props)=>{
          const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isValid = false,
              isValidating
          } = props
          return(
            <Form method='POST'>
                <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="email" placeholder='E-mail*' autoComplete='off' />
                <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="password" placeholder='Password*' autoComplete='off' />
                <button type='submit' className='bg-black text-white hover:bg-white hover:text-black hover:border border py-2 px-5 border-black rounded-md w-full'>Login</button>
                <p className='fntSz12 text-right mt-2'>Not Registered yet? <Link href="/regist  er" className='text-blue-400'>Register</Link></p>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Login