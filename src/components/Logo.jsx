import React from 'react'
import { useTranslation } from 'react-i18next'

const Logo = ({ className = '', size = 'md' }) => {
  const { i18n } = useTranslation()
  const isMarathi = i18n.language === 'mr'
  
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }
  
  if (isMarathi) {
    return (
      <div className={`font-bold text-white ${sizes[size]} ${className}`}>
        शानिशा परभणी
      </div>
    )
  } else {
    return (
      <div className={`font-bold text-white ${sizes[size]} ${className}`}>
        GRS Parbhani
      </div>
    )
  }
}

export default Logo
