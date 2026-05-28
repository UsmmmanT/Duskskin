import React from 'react'

const Announcement = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
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
          margin: 0,
        }}
      >
        Get FREE SHIPPING on orders above PKR 2,500
      </div>
    </div>
  )
}

export default Announcement