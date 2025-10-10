import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

const Terms = () => {
  const { t, i18n } = useTranslation()
  
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - GRS Parbhani</title>
        <meta name="description" content="Terms and Conditions of Government Residential School Parbhani" />
      </Helmet>
      
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {i18n.language === 'mr' ? 'अटी व शर्ती' : 'Terms & Conditions'}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            {i18n.language === 'mr' ? (
              <>
                <h2>प्रवेश अटी</h2>
                <p>प्रवेशासाठी सर्व आवश्यक कागदपत्रे सादर करणे बंधनकारक आहे.</p>
                
                <h2>शैक्षणिक नियम</h2>
                <p>विद्यार्थ्यांनी शाळेचे सर्व नियम पाळणे आवश्यक आहे.</p>
                
                <h2>शुल्क धोरण</h2>
                <p>शुल्काची रक्कम वेळेवर भरणे आवश्यक आहे.</p>
              </>
            ) : (
              <>
                <h2>Admission Terms</h2>
                <p>Submission of all required documents is mandatory for admission.</p>
                
                <h2>Academic Rules</h2>
                <p>Students must follow all school rules and regulations.</p>
                
                <h2>Fee Policy</h2>
                <p>Fee payment must be made on time.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms
