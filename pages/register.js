import React from 'react'
import Link from "next/link"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const Register = () => {
  return (
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

                    // if(password === confirmPassword){
                        // await fetch("http://localhost:9090/registration" , {
                        //     method:"POST" ,
                        //     headers:{
                        //         "Content-Type":"application/json"
                        //     },
                        //     body:JSON.stringify({
                        //        name: username,
                        //        phone:phone ,
                        //        email:email ,
                        //        password:password
                        //     })
                            
                        //     // credentials: "include",
                        // })
                    // }else{
                    //     window.alert("password and conform password not matched")
                    // }

                    const res = await axios({
                        method:"post",
                        url:"http://localhost:9090/registration",
                        headers: { "Content-Type": "application/json" },
                        data:{
                            name: username,
                            phone:phone ,
                            email:email ,
                            password:password
                        }
                    })
                    const data  = await res.json()
                    console.log(res)



                    if(!data){
                        window.alert("not registered")
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
                            <input className='w-full py-1 px-2 border rounded-md mb-2'  onChange={handleChange} type="text" name="username" placeholder='User Name*' autoComplete='off' />
                            {/* {errors.username && <p className='text-red-500'>Required</p>} */}
                            <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="phone" placeholder='Phone No.*' autoComplete='off' />
                            {/* {errors.phone && <p className='text-red-500 fntSz12'>Required</p>} */}
                            <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="email" placeholder='E-mail*' autoComplete='off' />
                            {/* {errors.email && <p className='text-red-500 fntSz12'>Required</p>} */}
                            <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="password" placeholder='Password*' autoComplete='off' />
                            {/* {errors.password && <p className='text-red-500 fntSz12'>Required</p>} */}
                            <input className='w-full py-1 px-2 border rounded-md mb-2' onChange={handleChange} type="text" name="confirmPassword" placeholder='conform password*' autoComplete='off' />
                            {/* {errors.confirmPassword && <p className='text-red-500 fntSz12'>Required</p>} */}
                            <button type='submit' className='bg-black text-white hover:bg-white hover:text-black hover:border border py-2 px-5 border-black rounded-md w-full'>Register</button>
                        </Form>
                    )
                }}

            </Formik>
            <p className='fntSz12 text-right mt-2'>Already Registered? <Link href="/login" className='text-blue-400'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register