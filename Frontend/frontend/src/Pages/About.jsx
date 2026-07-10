import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import logo from '../images/logo.png'

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

          {/* Right: Concise About Card */}
          <div className='flex items-center justify-center h-full'>
            <div className='flex h-full w-full max-w-sm flex-col justify-center rounded-lg border border-[#e8c8b1] bg-[#fff2f6] px-8 py-8 text-center shadow-lg'>
              <h3 className='text-lg font-semibold text-[#2f1d14]'>About Duskskin</h3>
              <p className='mt-4 text-sm leading-7 text-[#4e392d]'>
                Duskskin brings together premium yet affordable skincare and cosmetics for every shade and skin type. Based in Pakistan, we carefully import and curate high-quality skincare and beauty products from Korea, Indonesia, and Japan, alongside trusted local favorites, to offer formulas that balance innovation, quality, and everyday ease of use. From glow-boosting essentials to routine favorites, our collection is designed to support healthier, more radiant skin and help you feel confident in your beauty journey every day.
              </p>

              <div className='mt-6 flex items-center justify-center gap-4 text-2xl'>
                <span title='Pakistan'>🇵🇰</span>
                <span title='Indonesia'>🇮🇩</span>
                <span title='Korea'>🇰🇷</span>
                <span title='Japan'>🇯🇵</span>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default About