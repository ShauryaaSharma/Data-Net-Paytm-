import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Silk from './Silk';
import { useForm } from 'react-hook-form'
import GlitchText from './GlitchText';


const Login = () => {
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
      console.error('Login error:', error);
      // Here you can handle any errors, show error messages, etc.
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className='z-20 absolute top-8 left-1/2 transform -translate-x-1/2'>
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={false}
          className='custom-class text-6xl font-bold text-white'
        >
          DATA NET
        </GlitchText>
      </div>
      <div className="absolute inset-0 w-full h-full">
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />
      </div>
      
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/15 backdrop-blur-sm p-8 rounded-lg shadow-lg w-96"
        >
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

          <div className='mb-4'>
            <input
              {...register("password", {
                required: true,
                pattern: {
                  message: "Please enter the correct password"
                }
              })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your Password"
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p className="text-red-500 text-sm mt-1" role="alert">{errors.mail.message}</p>
            )}
          </div>

          <div className="mb-4">
            <button 
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <p className="text-white mb-2">If you have not registered yet</p>
            <Link 
              to="/signup" 
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login