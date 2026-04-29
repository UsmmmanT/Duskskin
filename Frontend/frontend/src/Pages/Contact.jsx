import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <section className='border-t border-[#e8c9b5] pt-8'>
      <div className='text-center'>
        <div className='text-2xl'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>
       
      </div>

      <div className='mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='overflow-hidden rounded-[2rem] border border-[#edcdb7] bg-[linear-gradient(145deg,_rgba(255,249,244,0.98),_rgba(247,226,209,0.95))] shadow-[0_30px_70px_rgba(110,63,32,0.14)]'>
          <div className='grid gap-px bg-[#edcdb7] sm:grid-cols-2'>
            <a
              href='tel:+923308653077'
              className='group bg-white/85 px-6 py-7 transition hover:bg-white'
            >
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8673f]'>Phone</p>
              <p className='mt-3 text-lg font-medium text-[#3b2417]'>+92 330 865 3077</p>
              <p className='mt-2 text-sm text-[#735748]'>Call for order support and urgent help.</p>
              <p className='mt-3 text-sm font-medium text-[#6a3e23] group-hover:translate-x-1 transition'>Call now</p>
            </a>

            <a
              href='mailto:utanveer485@gmail.com'
              className='group bg-[#fff6ef] px-6 py-7 transition hover:bg-[#fff9f5]'
            >
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8673f]'>Email</p>
              <p className='mt-3 break-all text-lg font-medium text-[#3b2417]'>utanveer485@gmail.com</p>
              <p className='mt-2 text-sm text-[#735748]'>Best for detailed questions and business requests.</p>
              <p className='mt-3 text-sm font-medium text-[#6a3e23] group-hover:translate-x-1 transition'>Send email</p>
            </a>

            <div className='bg-[#fff8f2] px-6 py-7'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8673f]'>Location</p>
              <p className='mt-3 text-lg font-medium text-[#3b2417]'>Karachi, Pakistan</p>
              <p className='mt-2 text-sm text-[#735748]'>Serving customers across Pakistan with trusted shipping partners.</p>
            </div>

            <div className='bg-[#fff3e8] px-6 py-7'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8673f]'>Support Hours</p>
              <p className='mt-3 text-lg font-medium text-[#3b2417]'>Mon - Sat, 10AM to 8PM</p>
              <p className='mt-2 text-sm text-[#735748]'>Responses are typically shared within a few hours.</p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-3 border-t border-[#edcdb7] bg-white/80 px-6 py-5 text-xs sm:text-sm'>
            <span className='rounded-full border border-[#e2bfa8] bg-[#fff7f1] px-3 py-1 text-[#6f4d3c]'>Order support</span>
            <span className='rounded-full border border-[#e2bfa8] bg-[#fff7f1] px-3 py-1 text-[#6f4d3c]'>Delivery updates</span>
            <span className='rounded-full border border-[#e2bfa8] bg-[#fff7f1] px-3 py-1 text-[#6f4d3c]'>Product guidance</span>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-[2rem] border border-[#efcfba] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(249,224,201,0.85)_55%,_rgba(233,183,145,0.78)_100%)] p-6 shadow-[0_30px_70px_rgba(120,67,31,0.16)] sm:p-8'>
          <img
            src={assets.contact_img}
            alt='DuskSkin customer support'
            className='h-52 w-full rounded-2xl object-cover shadow-[0_18px_45px_rgba(76,43,22,0.18)] sm:h-60'
          />

          <div className='mt-6'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9a5a33]'>Quick Contact</p>
            <h3 className='mt-3 text-2xl font-semibold leading-tight text-[#3a2418]'>Need help right away?</h3>
            <p className='mt-3 text-sm leading-7 text-[#684d3f] sm:text-base'>
              For fastest support, call us directly. For order details and collaboration requests,
              send us an email and we will get back to you promptly.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='tel:+923308653077'
                className='rounded-full bg-[#2f1c13] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#22140d]'
              >
                Call Support
              </a>
              <a
                href='mailto:utanveer485@gmail.com'
                className='rounded-full border border-[#7a4d35] bg-white/75 px-5 py-2.5 text-sm font-medium text-[#4b2f22] transition hover:bg-white'
              >
                Email Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact