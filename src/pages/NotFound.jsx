import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-600">404</h1>
          <p className="text-xl text-gray-600 mt-4">{t('common.notFound')}</p>
          <a href="/" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            {t('nav.home')}
          </a>
        </div>
      </div>
    </>
  )
}

export default NotFound
