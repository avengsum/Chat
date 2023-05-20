import React, { useCallback, useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup'

function Login() {

  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      file:null
    },

    validationSchema: Yup.object({
      name:Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),

    onSubmit: values => {
      (JSON.stringify(values,null,2))
    }

  })

  const [toggle,setTogle] = useState('R')

  const varient = useCallback(() => {
    setTogle((current) => current === 'Register' ? 'Login' :'Register')
  })

  console.log(formik.values)



    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {(toggle === 'Register') ? 'Register' : 'Login'}
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              {toggle === 'Register' && <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="name"
                  name="name" type="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  autoComplete="name" required className="appearance-none rounded-none relative block w-full 
                  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                   placeholder="Name" />
                   {formik.touched.name && formik.errors.name ? 
                   <div className="text-red-500"> {formik.errors.name}</div> : null}
                </div>
              </div> }
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="email"
                  name="email" type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email" required className="appearance-none rounded-none relative block w-full 
                  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                   placeholder="Email address" />
                   {formik.touched.email && formik.errors.email ? 
                   <div className="text-red-500"> {formik.errors.email}</div> : null}
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="password" name="password" type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  autoComplete="current-password" required
                  className="appearance-none rounded-none relative
                  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                  text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500
                  focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
                  { formik.errors.email ? 
                   <div className="text-red-500"> {formik.errors.password}</div> : null}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {toggle === 'Register' ? "Have an account ?" : "New Here ?" }
              </div>
              <div className="text-sm">
                <p onClick={ varient }  className=" cursor-pointer font-medium text-blue-600 hover:text-blue-500">
                  {toggle === 'Register' ? 'Login' : 'Register'}
                </p>
              </div>
              { toggle === 'Register' && <div>
           <label htmlFor="file" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md">
             Upload File
             </label>
              <input
               type="file"
               id="file"
               name="file"
               onChange={(e) => {
               formik.setFieldValue('file', e.currentTarget.files[0]);
               }}
              className="hidden"
              />
             {formik.values.file && <span>{formik.values.file.name}</span>}
            </div> }
            </div>
            <div>
              <button type="submit" 
              className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue">
               {(toggle === 'Register') ? 'Register' : 'Login'}
              </button>
              </div>
            </form>
  </div>
  </div>
    )}

export default Login