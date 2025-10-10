import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation()
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy - GRS Parbhani</title>
        <meta name="description" content="Privacy Policy of Government Residential School Parbhani" />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {i18n.language === 'mr' ? 'गोपनीयता धोरण' : 'Privacy Policy'}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {i18n.language === 'mr' ? (
              <>
                <h2>माहिती संकलन</h2>
                <p>आम्ही फक्त आवश्यक व्यक्तिगत माहिती गोळा करतो जी शैक्षणिक प्रवेश प्रक्रियेसाठी आवश्यक आहे.</p>
                
                <h2>माहितीचा वापर</h2>
                <p>आपली व्यक्तिगत माहिती फक्त शैक्षणिक हेतूंसाठी वापरली जाते.</p>
                
                <h2>माहिती सुरक्षा</h2>
                <p>आम्ही आपली व्यक्तिगत माहिती सुरक्षित ठेवण्यासाठी सर्व आवश्यक उपाययोजना करतो.</p>
              </>
            ) : (
              <>
                <h2>Information Collection</h2>
                <p>We collect only necessary personal information required for educational admission process.</p>
                
                <h2>Use of Information</h2>
                <p>Your personal information is used only for educational purposes.</p>
                
                <h2>Information Security</h2>
                <p>We take all necessary measures to keep your personal information secure.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
