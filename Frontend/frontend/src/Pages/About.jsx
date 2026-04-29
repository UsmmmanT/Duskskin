import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import aboutus from '../images/aboutus.jpeg'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px] rounded-2xl shadow-[0_24px_60px_rgba(64,34,16,0.16)] object-cover'
          src={aboutus}
          alt='About our store'
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-[#6d584b]'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-[#a0582b]'>
            Crafted with Purpose
          </p>
          <p className='text-lg leading-8 text-[#4e392d]'>
            DuskSkin was created for people who believe that beauty should feel considered,
            effective, and authentic. We curate premium skincare and makeup products that celebrate
            every skin tone and enhance natural beauty.
          </p>
          <p className='leading-8'>
            From nourishing serums to transformative makeup, we handpick collections that balance
            quality, efficacy, and inclusivity. The experience matters just as much as the product,
            so we focus on clear browsing, thoughtful presentation, and service that feels genuinely helpful.
          </p>
          <div className='rounded-2xl border border-[#e8c8b1] bg-gradient-to-r from-[#fff6ef] to-[#f8e1d0] px-6 py-5 shadow-sm'>
            <b className='text-[#3f2a1f]'>Our Mission</b>
            <p className='mt-2 leading-7 text-[#6d584b]'>
              We are here to make premium beauty accessible and inclusive by pairing trusted quality
              with a smooth, welcoming shopping experience from first click to final delivery.
            </p>
          </div>
        </div>
      </div>

      <div className='text-2xl py-4 text-center '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='mb-20 overflow-hidden rounded-[2rem] border border-[#efcdb8] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(249,223,203,0.9)_45%,_rgba(235,184,146,0.82)_100%)] shadow-[0_28px_80px_rgba(119,60,26,0.14)]'>
        <div className='px-6 py-8 sm:px-10 md:px-12 md:py-10'>
         
          <div className='mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <h3 className='max-w-xl text-3xl font-semibold leading-tight text-[#352117]'>
              Premium beauty for every skin tone, designed with care at every step.
            </h3>
            <p className='max-w-md text-sm leading-7 text-[#6e5447]'>
              We blend standout products, thoughtful presentation, and dependable service so
              the whole experience feels premium and inclusive.
            </p>
          </div>
        </div>

        <div className='grid gap-px bg-[#efcdb8] md:grid-cols-3'>
          <div className='bg-[linear-gradient(180deg,_rgba(255,248,242,0.98),_rgba(255,239,225,0.95))] px-8 py-10 sm:px-10'>
            <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#E75480] text-sm font-semibold text-white'>
              01
            </div>
            <b className='text-lg text-[#2f1d14]'>Quality With Character</b>
            <p className='mt-4 leading-7 text-[#6d584b]'>
              Every item is chosen for taste, consistency, and feel, so you are not just
              buying products, you are choosing a collection with personality and care behind it.
            </p>
          </div>

          <div className='bg-[linear-gradient(180deg,_rgba(255,244,236,0.98),_rgba(255,231,213,0.94))] px-8 py-10 sm:px-10'>
            <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#9a4e23] text-sm font-semibold text-white'>
              02
            </div>
            <b className='text-lg text-[#2f1d14]'>Simple, Seamless Shopping</b>
            <p className='mt-4 leading-7 text-[#6d584b]'>
              We keep the experience clean and intuitive, making it easy to explore products,
              compare options, and place your order without clutter or confusion.
            </p>
          </div>

          <div className='bg-[linear-gradient(180deg,_rgba(255,239,228,0.98),_rgba(250,220,197,0.94))] px-8 py-10 sm:px-10'>
            <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#c76d3a] text-sm font-semibold text-white'>
              03
            </div>
            <b className='text-lg text-[#2f1d14]'>Support That Feels Human</b>
            <p className='mt-4 leading-7 text-[#6d584b]'>
              Questions, updates, and problem-solving are handled with clarity and warmth so
              you always feel looked after before, during, and after your order arrives.
            </p>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About