import React from 'react'

export const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
    }
  return (
    <section className='my-20 border-t border-[#dfc2ae] px-2 py-12 text-center sm:px-6 md:py-16'>
        
        <p className='mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#2f1d14] sm:text-4xl'>
            Subscribe for new arrivals, exclusive offers, and beauty tips worth exploring.
        </p>
        <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b5648] sm:text-base'>
            Join the DuskSkin community for product launches, limited editions, special bundles, and beauty advice that keeps your routine inspired.
        </p>
      <form onSubmit={onSubmitHandler} className='mx-auto mt-8 flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center'>
        <input type="email" placeholder='Enter your email address' className='w-full rounded-full border border-[#dec1ad] bg-white/85 px-5 py-4 text-[#3f2b21] outline-none placeholder:text-[#9a8374] sm:flex-1' required />
            <button type="submit" className='rounded-[1rem] bg-[#E75480] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#D63E6A]'>SUBSCRIBE</button>
        </form>

      

    </section>
  )
}
export default NewsletterBox