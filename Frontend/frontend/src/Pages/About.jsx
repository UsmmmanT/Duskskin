import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import logo from '../images/logo.png'
import pakistanFlag from '../images/pakistan.png'

const About = () => {
  return (
    <div>
      {/* Three Skincare Origins Section */}
      
        <div className='text-2xl py-4 text-center mb-8'>
          <Title text1={'OUR'} text2={'SKINCARE ORIGINS'} />
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-stretch'>
          {/* Left: Logo Image */}
          <div className='flex items-center justify-center h-full'>
            <img
              className='w-full max-w-sm h-full rounded-lg shadow-lg object-cover'
              src={logo}
              alt='DuskSkin origin regions'
            />
          </div>

          {/* Right: Three Numbered Boxes */}
          <div className='flex flex-col gap-4 justify-center'>
            {/* Box 1 - Japan */}
            <div className='flex gap-4 p-6 rounded-lg' style={{ backgroundColor: 'var(--color-border)' }}>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-lg' style={{ backgroundColor: '#E75480', color: 'white' }}>
                01
              </div>
              <div>
                <h3 className='font-semibold text-[#2f1d14]'>Japanese 🇯🇵</h3>
                <p className='text-sm text-[#4e392d] mt-1 leading-6'>
                  Minimalist science-backed formulations designed for gentle, effective skincare. Focused on hydration and natural ingredients.
                </p>
              </div>
            </div>

            {/* Box 2 - Korea */}
            <div className='flex gap-4 p-6 rounded-lg' style={{ backgroundColor: 'var(--color-border)' }}>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-lg' style={{ backgroundColor: '#E75480', color: 'white' }}>
                02
              </div>
              <div>
                <h3 className='font-semibold text-[#2f1d14]'>Korean 🇰🇷</h3>
                <p className='text-sm text-[#4e392d] mt-1 leading-6'>
                  Innovation-driven beauty with cutting-edge technology. Multi-step skincare routines that deliver visible, transformative results.
                </p>
              </div>
            </div>

            {/* Box 3 - Indonesia */}
            <div className='flex gap-4 p-6 rounded-lg' style={{ backgroundColor: 'var(--color-border)' }}>
              <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-lg' style={{ backgroundColor: '#E75480', color: 'white' }}>
                03
              </div>
              <div>
                <h3 className='font-semibold text-[#2f1d14]'>Indonesian 🇮🇩</h3>
                <p className='text-sm text-[#4e392d] mt-1 leading-6'>
                  Natural, botanical-rich formulas rooted in traditional wellness. Nourishing ingredients for all skin types and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      

      {/* Simple Mission Statement */}
      <div className='my-16 flex justify-center'>
        <div className='max-w-2xl w-full rounded-lg border border-[#e8c8b1] bg-[var(--color-border)] px-8 py-8 text-center md:px-12 relative'>
          <img src={pakistanFlag} alt='Pakistan' className='absolute top-4 left-4 w-10 h-10 object-contain opacity-80' />
          <b className='text-lg text-[#2f1d14]'>Based in Pakistan, Serving Your Skin</b>
          <p className='mt-4 leading-7 text-[#6d584b] max-w-2xl mx-auto'>
            We bring the best of Asian skincare traditions to your doorstep. Quality, authenticity, and care in every product.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About