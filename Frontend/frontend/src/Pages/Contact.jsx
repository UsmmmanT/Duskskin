import React from 'react'
import Title from '../components/Title'
import whatsappImg from '../images/whatsapp.png'
import tiktokImg from '../images/tiktok.png'

const Contact = () => {
  const contactChannels = [
    {
      name: 'WhatsApp',
      icon: (
        <img src={whatsappImg} alt='WhatsApp' className='w-12 h-12 object-contain' />
      ),
      link: 'https://wa.me/923205082331'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className='w-12 h-12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
          <rect x='2' y='2' width='20' height='20' rx='4' ry='4'/>
          <path d='M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'/>
          <circle cx='17.5' cy='6.5' r='1'/>
        </svg>
      ),
      link: 'https://instagram.com/duskskin_'
    },
    {
      name: 'TikTok',
      icon: (
        <img src={tiktokImg} alt='TikTok' className='w-12 h-12 object-contain' />
      ),
      link: 'https://tiktok.com/@dusk.skin'
    },
    {
      name: 'Email',
      icon: (
        <svg className='w-12 h-12' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
        </svg>
      ),
      link: 'mailto:duskskin001@gmail.com'
    }
  ]

  return (
    <section className='border-t border-[#e8c9b5] pt-8'>
      <div className='text-center mb-12'>
        <div className='text-2xl'>
          <Title text1={'CONTACT'} text2={'US'} />
        </div>
        <p className='mt-4 text-[#6d584b]'>Connect with us on your favorite platform</p>
      </div>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20'>
        {contactChannels.map((channel, index) => (
          <a
            key={index}
            href={channel.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-col items-center justify-center gap-4 rounded-lg border border-[#e0dac9] bg-white p-8 transition hover:shadow-lg hover:border-[#D4A574]'
          >
            <div className='text-[#2D4A3E] group-hover:text-[#C9A96E] transition'>
              {channel.icon}
            </div>
            <h3 className='text-lg font-semibold text-[#2f1d14]'>
              {channel.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact