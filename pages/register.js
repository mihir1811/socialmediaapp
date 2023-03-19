import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from "next/link"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { registrationApi } from '../services/auth';
import ToastMsg from '../components/Snackbar';
import Head from 'next/head';

const Register = () => {
    const router = useRouter()

  return (
    <>
    <Head>
        <title>Register</title>
    </Head>
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border' style={{width:"400px" , borderRadius:"10px" ,padding:"20px"}}>
                <h1 className='text-center fntSz20 fw600 mb-3' >Register</h1>

                <Formik
                    initialValues={{
                        username:"",
                        phone:"", 
                        email:"" ,
                        password:"",
                        confirmPassword:""
                    }}
                    onSubmit={ async( values)=>{
                        console.log(values)
                        const {username ,phone ,email ,password ,confirmPassword}= values;

                        if(password === confirmPassword){
                            const payload = {
                                name: username,
                                phone:Number(phone) ,
                                email:email ,
                                password:password
                            }
                            const res = await registrationApi(payload)
                            // if(res.status === 200){
                            //     alert(res.data.message )
                            // }
                            router.push("/login")

                        }else{
                            window.alert("password and conform password not matched")
                        }
                    }}

                    validationSchema={ Yup.object().shape({
                        username:Yup.string().required("username is Required"),
                        phone:Yup.number().required("phone number is Required"),
                        email:Yup.string().required("email is Required"),
                        password:Yup.string().required("email is Required"),
                        confirmPassword:Yup.string().required("email is Required"),
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
                                <input className='w-full py-1 px-2 border rounded-md mb-2' onBlur={handleBlur}  onChange={handleChange} type="text" name="username" placeholder='User Name*' autoComplete='off' />
                                {
                                    errors.username && touched.username && <p className='p-0 m-0 text-red-600 fntSz13'>enter valid email</p>
                                }
                                <input className='w-full py-1 px-2 border rounded-md mb-2' onBlur={handleBlur} onChange={handleChange} type="text" name="phone" placeholder='Phone No.*' autoComplete='off' />
                                {
                                    errors.phone && touched.phone && <p className='p-0 m-0 text-red-600 fntSz13'>enter valid Phone number</p>
                                }
                                <input className='w-full py-1 px-2 border rounded-md mb-2' onBlur={handleBlur} onChange={handleChange} type="text" name="email" placeholder='E-mail*' autoComplete='off' />
                                {
                                    errors.email && touched.email && <p className='p-0 m-0 text-red-600 fntSz13'>enter valid email</p>
                                }
                                <input className='w-full py-1 px-2 border rounded-md mb-2' onBlur={handleBlur} onChange={handleChange} type="text" name="password" placeholder='Password*' autoComplete='off' />
                                {
                                    errors.password && touched.password && <p className='p-0 m-0 text-red-600 fntSz13'>enter valid password</p>
                                }
                                <input className='w-full py-1 px-2 border rounded-md mb-2' onBlur={handleBlur} onChange={handleChange} type="text" name="confirmPassword" placeholder='conform password*' autoComplete='off' />
                                {
                                    errors.confirmPassword && touched.confirmPassword && <p className='p-0 m-0 text-red-600 fntSz13'>enter valid email</p>
                                }
                                <button disabled={!isValid} type='submit' className='bg-black text-white hover:bg-white hover:text-black hover:border border py-2 px-5 border-black rounded-md w-full'>Register</button>
                            </Form>
                        )
                    }}
            
                </Formik>
                <p className='fntSz12 text-right mt-2'>Already Registered? <Link href="/login" className='text-blue-400'>Login</Link></p>
            </div>
        </div>
    </>
  )
}

export default Register