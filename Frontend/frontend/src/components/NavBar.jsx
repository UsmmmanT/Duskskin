import React, { useContext } from 'react'
import logo from '../images/logo.png'
import search from '../images/search.png'
import user from '../images/user.png'
import coffeeShop from '../images/coffeeShop.png'
import list from '../images/list.png'
import back from '../images/back.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const NavBar = () => {
  const [visible, setVisible] = React.useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'COLLECTION' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ]

  const logout = () => {
    localStorage.removeItem('token')
    toast.success('Logged out successfully')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  return (
    <div className='w-full sticky top-0 z-20'>
      {/* Announcement Bar */}
      <div
        style={{
          background: 'var(--color-brand-primary)',
          color: 'white',
          textAlign: 'center',
          padding: '8px',
          fontSize: '13px',
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.04em',
        }}
      >
        Get FREE SHIPPING on orders above PKR 2,500
      </div>

      {/* Single Unified Navbar Row */}
      <div
        className='border-b'
        style={{ borderColor: 'var(--color-border)', backgroundColor: 'white' }}
      >
        <div className='flex items-center justify-between px-4 sm:px-8 h-16 gap-4'>

          {/* LEFT: Logo */}
          <Link to='/' className='flex items-center justify-center flex-shrink-0'>
            <img className='h-8 sm:h-10' src={logo} alt='DuskSkin logo' />
          </Link>

          {/* CENTER: Desktop nav links or Mobile hamburger */}
          <div className='flex-1 flex items-center justify-center'>
            {/* Mobile: hamburger */}
            <button
              type='button'
              onClick={() => setVisible(true)}
              className='sm:hidden flex items-center justify-center w-9 h-9'
            >
              <img src={list} className='w-5 h-5' alt='Menu' style={{ filter: 'brightness(0)' }} />
            </button>

            {/* Desktop: nav links centered */}
            <nav className='hidden sm:flex items-center gap-8'>
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className='px-2 py-2 text-sm font-medium tracking-wide transition-colors'
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                    borderBottom: isActive ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* RIGHT: Icons */}
          <div className='flex items-center gap-2 flex-shrink-0'>
            {/* Search */}
            <button
              type='button'
              onClick={() => setShowSearch(true)}
              className='hidden sm:flex h-9 w-9 items-center justify-center'
            >
              <img src={search} className='w-4' alt='Search' style={{ filter: 'brightness(0)' }} />
            </button>

            {/* Account dropdown */}
            <div className='hidden sm:block group relative'>
              <Link to='/login' className='flex h-9 w-9 items-center justify-center'>
                <img src={user} className='w-4' alt='Account' style={{ filter: 'brightness(0)' }} />
              </Link>
              <div className='absolute right-0 z-20 hidden pt-4 group-hover:block'>
                <div
                  className='flex w-44 flex-col gap-2 rounded border shadow-sm'
                  style={{ backgroundColor: 'var(--color-brand-accent)', borderColor: 'var(--color-border)' }}
                >
                  <p onClick={() => navigate('/login')} className='cursor-pointer px-4 py-2 text-sm hover:opacity-70'>My Account</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer px-4 py-2 text-sm hover:opacity-70'>My Orders</p>
                  {token && <p onClick={logout} className='cursor-pointer px-4 py-2 text-sm hover:opacity-70'>Logout</p>}
                </div>
              </div>
            </div>

            {/* Cart */}
            <Link to='/cart' className='relative flex h-9 w-9 items-center justify-center'>
              <img src={coffeeShop} className='w-4' alt='Cart' style={{ filter: 'brightness(0)' }} />
              {getCartCount() > 0 && (
                <span
                  className='absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-white text-xs font-bold'
                  style={{ backgroundColor: 'var(--color-brand-secondary)' }}
                >
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-30 overflow-hidden transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}
        style={{ backgroundColor: 'var(--color-brand-accent)' }}
      >
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between border-b px-4 py-4' style={{ borderColor: 'var(--color-border)' }}>
            <p className='text-lg font-medium' style={{ color: 'var(--color-brand-primary)' }}>DuskSkin</p>
            <button
              type='button'
              onClick={() => setVisible(false)}
              className='flex items-center gap-2 px-3 py-2 rounded border text-xs font-medium'
              style={{ backgroundColor: 'white', borderColor: 'var(--color-border)' }}
            >
              <img className='h-4 rotate-180' src={back} alt='Close' />
              Close
            </button>
          </div>

          <div className='flex flex-1 flex-col gap-1 px-4 py-6'>
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                onClick={() => setVisible(false)}
                to={item.to}
                className='px-4 py-3 rounded font-medium text-sm'
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#E75480' : 'transparent',
                  color: isActive ? 'white' : 'var(--color-text-primary)',
                })}
              >
                {item.label}
              </NavLink>
            ))}

            <div className='my-4 border-t' style={{ borderColor: 'var(--color-border)' }} />

            <button
              onClick={() => { setShowSearch(true); setVisible(false) }}
              className='px-4 py-3 text-left text-sm font-medium'
              style={{ color: 'var(--color-text-primary)' }}
            >
              Search
            </button>
            <Link to='/login' onClick={() => setVisible(false)} className='px-4 py-3 text-sm font-medium' style={{ color: 'var(--color-text-primary)' }}>
              My Account
            </Link>
            <Link to='/orders' onClick={() => setVisible(false)} className='px-4 py-3 text-sm font-medium' style={{ color: 'var(--color-text-primary)' }}>
              My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar