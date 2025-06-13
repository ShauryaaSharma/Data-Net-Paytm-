import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bigVid from '../images/bigVid.mp4'
import { useForm } from 'react-hook-form'

const Signin = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Here you would normally make your API call
      console.log('Form data ready for API:', data);
      
      // Simulate API call success
      // Later you can replace this with actual API call
      // const response = await apiCall(data);
      
      // Navigate to home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Signin error:', error);
      // Here you can handle any errors, show error messages, etc.
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline={true}
        >
          <source src={bigVid} type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/15 backdrop-blur-sm p-8 rounded-lg shadow-lg w-96"
        >
          
          <div className="mb-4">
            <input 
              {...register("firstName", { required: true })} 
              aria-invalid={errors.firstName ? "true" : "false"}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Username"
            />
            {errors.firstName?.type === "required" && (
              <p className="text-red-500 text-sm mt-1" role="alert">Username is required</p>
            )}
          </div>

          <div className="mb-4">
            <input 
              {...register("firstName", { required: true })} 
              aria-invalid={errors.firstName ? "true" : "false"}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Name"
            />
            {errors.firstName?.type === "required" && (
              <p className="text-red-500 text-sm mt-1" role="alert">Name is required</p>
            )}
          </div>
          
          <div className="mb-4">
            <select 
              {...register("gender")}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              {...register("number", {
                required: true,
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a valid mobile number"
                }
              })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Number"
              aria-invalid={errors.number ? "true" : "false"}
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.number.type === "required" 
                  ? "Mobile number is required" 
                  : errors.number.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              {...register("mail", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address"
                }
              })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p className="text-red-500 text-sm mt-1" role="alert">{errors.mail.message}</p>
            )}
          </div>

          <div className="mb-6">
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center">
            <p className="text-white mb-2">If you have already registered</p>
            <Link 
              to="/login" 
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin