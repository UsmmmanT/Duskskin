import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify' 

const Login = () => {
  const [currentState, setCurrentState] = React.useState('Sign Up')
  const {token,setToken,navigate,backend_url} = React.useContext(ShopContext)
  const [name,setName]  = useState('')
  const [password,setPassword]  = useState('')
  const [email,setEmail]  = useState('')



  const onSubmit =async (e) => {
    e.preventDefault();
    try {
      if(currentState==='Sign Up'){
        const res = await axios.post(backend_url+'/api/user/register',{name,email,password})
        console.log(res.data)
        if(res.data.success){
          toast.success("Logged In.");
          localStorage.setItem('token', res.data.token);
          setToken(res.data.token);
        }
        else{
          toast.error(res.data.message);
        }
      }
      else{
        const res= await axios.post(backend_url+'/api/user/login',{email,password})
        if (res.data.success){
          toast.success("Logged In.");
          localStorage.setItem('token', res.data.token);
          setToken(res.data.token);
          console.log(res.data)

        }
        else{
          toast.error(res.data.message);
        }

      }
      
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }
  useEffect(()=>{
    if (token){
      navigate('/')
    }

  },[token])

  return (
    <section className='mx-auto mt-16 w-full max-w-xl px-4 sm:px-0'>
      <div className='mb-8'>
        
        <div className='mt-4 flex items-center gap-3'>
          <p className='font-display text-3xl text-[#2f1d14] sm:text-4xl'>Welcome to DuskSkin</p>
          <span className='h-px w-10 bg-[#8e634b]'></span>
        </div>
        <p className='mt-4 max-w-md text-sm leading-7 text-[#6b5648] sm:text-base'>
          Sign in or create your account to access your DuskSkin profile.
        </p>
      </div>

      <form onSubmit={onSubmit} className='flex flex-col gap-4'>
        {currentState === 'Login' ? null : (
          <input
            type='text'
            onChange={(e)=>setName(e.target.value)}
            className='w-full rounded-full border border-[#d8b8a4] bg-white/85 px-5 py-3.5 text-[#3f2b21] outline-none placeholder:text-[#957b6d]'
            placeholder='Full name'
            required
          />
        )}

        <input
          type='email'
          onChange={(e)=>setEmail(e.target.value)}
          className='w-full rounded-full border border-[#d8b8a4] bg-white/85 px-5 py-3.5 text-[#3f2b21] outline-none placeholder:text-[#957b6d]'
          placeholder='Email address'
          required
        />
        <input
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
          className='w-full rounded-full border border-[#d8b8a4] bg-white/85 px-5 py-3.5 text-[#3f2b21] outline-none placeholder:text-[#957b6d]'
          placeholder='Password'
          required
        />

        <div className='mt-1 flex w-full items-center justify-between gap-4 text-sm text-[#6b5648]'>
          <p className='cursor-pointer transition hover:text-[#2f1d14]'>Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className='cursor-pointer font-medium text-[#2f1d14] transition hover:text-[#8c4d2a]'
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className='cursor-pointer font-medium text-[#2f1d14] transition hover:text-[#8c4d2a]'
            >
              Login instead
            </p>
          )}
        </div>

        <button className='mt-4 inline-flex w-fit items-center justify-center rounded-full bg-[#E75480] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#D63E6A]'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
      </form>
    </section>
  )
}

export default Login