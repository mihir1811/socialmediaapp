import React, { useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../services/auth";
import Link from "next/link";
import Head from "next/head";
import { useFormik } from "formik";

const Login = () => {
  const router = useRouter();

  const { setFieldError } = useFormik({});

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center h-screen w-screen">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            const { email, password } = values;
            const payload = {
              email,
              password,
            };
            const res = await loginApi(payload);

            if (!res) {
              setFieldError("email", "please enter valid crdrdentials");
            }
            // console.log(res.data.token , "atrhszrytdgf")
            router.push("/home");
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid Email").required("email is Required"),
            password: Yup.string().required("email is Required"),
          })}
        >
          {(props) => {
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
              isValidating,
            } = props;
            return (
              <Form method="POST">
                <input
                  className="w-full py-1 px-2 border rounded-md mb-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  placeholder="E-mail*"
                  autoComplete="off"
                />
                {
                  errors.email && touched.email && <p>enter valid email</p>
                }
                <input
                  className="w-full py-1 px-2 border rounded-md mb-2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="password"
                  placeholder="Password*"
                  autoComplete="off"
                />
                {
                  errors.password && touched.password && <p>enter valid password</p>
                }
                <button
                  disabled={!isValid}
                  type="submit"
                  className={ `${!isValid && "btnDisabled"} `+  "bg-black  text-white hover:bg-white hover:text-black hover:border border py-2 px-5 border-black rounded-md w-full"}
                >
                  Login
                </button>
                <p className="fntSz12 text-right mt-2">
                  Not Registered yet?
                  <Link href="/register" className="text-blue-400">
                    Register
                  </Link>
                </p>
              </Form>
            );
          }}
        </Formik>

        <style jsx>
          {`
            .btnEnebled{
              
            }

            .btnDisabled{
              background-color:rgba(0 , 0 , 0 , 0.7);
              color:white
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Login;
