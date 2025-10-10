import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaRupeeSign, 
  FaUsers, 
  FaFileAlt,
  FaExternalLinkAlt,
  FaTimes,
  FaInfoCircle
} from 'react-icons/fa'

// Source: Maharashtra Social Welfare Department Scholarship Schemes
// References: https://sjsa.maharashtra.gov.in/en/schemes
// https://scholarships.gov.in/ - National Scholarship Portal

const Schemes = () => {
  const { t, i18n } = useTranslation()
  const [selectedScheme, setSelectedScheme] = useState(null)
  
  const schemes = [
    {
      id: 1,
      title_mr: 'प्री-मेट्रिक छात्रवृत्ती योजना',
      title_en: 'Pre-Matric Scholarship Scheme',
      authority_mr: 'केंद्र सरकार',
      authority_en: 'Central Government',
      amount_mr: '₹300-700 प्रतिमाह',
      amount_en: '₹300-700 per month',
      eligibility_mr: [
        '8वी ते 10वी वर्गातील विद्यार्थी',
        'अनुसूचित जाती/जमाती',
        'कुटुंबाचे वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी'
      ],
      eligibility_en: [
        'Students of Class 8th to 10th',
        'Scheduled Caste/Scheduled Tribe',
        'Family annual income less than ₹2.5 lakh'
      ],
      benefits_mr: [
        'मासिक छात्रवृत्ती',
        'पुस्तकांसाठी अनुदान',
        'अभ्यासाच्या साहित्यासाठी मदत'
      ],
      benefits_en: [
        'Monthly scholarship',
        'Book grant',
        'Study material assistance'
      ],
      source: 'https://scholarships.gov.in/',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title_mr: 'पोस्ट-मेट्रिक छात्रवृत्ती योजना',
      title_en: 'Post-Matric Scholarship Scheme',
      authority_mr: 'महाराष्ट्र शासन',
      authority_en: 'Maharashtra Government',
      amount_mr: '₹380-1200 प्रतिमाह',
      amount_en: '₹380-1200 per month',
      eligibility_mr: [
        '11वी ते पदवी पर्यंतचे विद्यार्थी',
        'अनुसूचित जाती/जमाती/इतर मागासवर्गीय',
        'मागील वर्गात उत्तीर्ण'
      ],
      eligibility_en: [
        'Students from 11th to Graduate level',
        'SC/ST/OBC categories',
        'Passed in previous year'
      ],
      benefits_mr: [
        'मासिक छात्रवृत्ती',
        'शिक्षण शुल्क प्रतिपूर्ती',
        'वसतिगृह सुविधा'
      ],
      benefits_en: [
        'Monthly scholarship',
        'Tuition fee reimbursement',
        'Hostel facility'
      ],
      source: 'https://sjsa.maharashtra.gov.in/',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title_mr: 'मेधावी विद्यार्थी प्रोत्साहन योजना',
      title_en: 'Merit Student Incentive Scheme',
      authority_mr: 'महाराष्ट्र शासन',
      authority_en: 'Maharashtra Government',
      amount_mr: '₹5000-25000 (एकरकमी)',
      amount_en: '₹5000-25000 (One-time)',
      eligibility_mr: [
        '80% पेक्षा जास्त गुण',
        'राज्य मंडळ परीक्षेत प्रथम श्रेणी',
        'कुटुंबाचे वार्षिक उत्पन्न ₹6 लाखांपेक्षा कमी'
      ],
      eligibility_en: [
        'More than 80% marks',
        'First class in state board exam',
        'Family annual income less than ₹6 lakh'
      ],
      benefits_mr: [
        'एकरकमी बक्षीस',
        'प्रमाणपत्र',
        'शैक्षणिक साहित्य अनुदान'
      ],
      benefits_en: [
        'One-time award',
        'Certificate',
        'Educational material grant'
      ],
      source: 'https://parbhani.gov.in/schemes/',
      color: 'bg-yellow-50 border-yellow-200',
      iconColor: 'text-yellow-600'
    },
    {
      id: 4,
      title_mr: 'डॉ. बाबासाहेब आंबेडकर संशोधन प्रतिष्ठान योजना',
      title_en: 'Dr. Babasaheb Ambedkar Research Foundation Scheme',
      authority_mr: 'समाजकल्याण विभाग',
      authority_en: 'Social Welfare Department',
      amount_mr: '₹2000-8000 प्रतिमाह',
      amount_en: '₹2000-8000 per month',
      eligibility_mr: [
        'संशोधन करणारे विद्यार्थी',
        'पदव्युत्तर किंवा पीएचडी',
        'मागासवर्गीय श्रेणी'
      ],
      eligibility_en: [
        'Research students',
        'Post-graduate or PhD',
        'Backward class category'
      ],
      benefits_mr: [
        'संशोधन अनुदान',
        'पुस्तकालय सुविधा',
        'मार्गदर्शन सहाय्य'
      ],
      benefits_en: [
        'Research grant',
        'Library facility',
        'Guidance support'
      ],
      source: 'https://sjsa.maharashtra.gov.in/',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 5,
      title_mr: 'राजर्षी शाहू महाराज शिक्षण शुल्क माफी योजना',
      title_en: 'Rajarshi Shahu Maharaj Education Fee Waiver Scheme',
      authority_mr: 'महाराष्ट्र शासन',
      authority_en: 'Maharashtra Government',
      amount_mr: 'संपूर्ण शिक्षण शुल्क माफी',
      amount_en: 'Complete education fee waiver',
      eligibility_mr: [
        'आर्थिकदृष्ट्या कमकुवत कुटुंब',
        'प्रवेश घेतलेले विद्यार्थी',
        'वार्षिक उत्पन्न ₹8 लाखांपेक्षा कमी'
      ],
      eligibility_en: [
        'Economically weaker families',
        'Admitted students',
        'Annual income less than ₹8 lakh'
      ],
      benefits_mr: [
        'शिक्षण शुल्क माफी',
        'परीक्षा शुल्क माफी',
        'प्रयोगशाळा शुल्क माफी'
      ],
      benefits_en: [
        'Tuition fee waiver',
        'Examination fee waiver',
        'Laboratory fee waiver'
      ],
      source: 'https://sjsa.maharashtra.gov.in/',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600'
    }
  ]
  
  return (
    <>
      <Helmet>
        <title>{t('meta.schemes.title')}</title>
        <meta name="description" content={t('meta.schemes.description')} />
        <meta property="og:title" content={t('meta.schemes.title')} />
        <meta property="og:description" content={t('meta.schemes.description')} />
        <link rel="canonical" href="/schemes" />
        <link rel="alternate" hreflang="mr" href="/schemes?lang=mr" />
        <link rel="alternate" hreflang="en" href="/schemes?lang=en" />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <div className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('nav.schemes')}
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              {i18n.language === 'mr'
                ? 'विद्यार्थ्यांसाठी उपलब्ध छात्रवृत्ती आणि सरकारी योजना'
                : 'Available scholarships and government schemes for students'}
            </p>
          </div>
        </div>

        {/* Schemes Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {schemes.map((scheme, index) => (
                <motion.div
                  key={scheme.id}
                  className={`border rounded-lg p-6 ${scheme.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedScheme(scheme)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <FaGraduationCap className={`w-8 h-8 ${scheme.iconColor}`} />
                    <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                      {i18n.language === 'mr' ? scheme.authority_mr : scheme.authority_en}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {i18n.language === 'mr' ? scheme.title_mr : scheme.title_en}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <FaRupeeSign className={`w-4 h-4 ${scheme.iconColor} mr-2`} />
                    <span className="font-medium text-gray-800">
                      {i18n.language === 'mr' ? scheme.amount_mr : scheme.amount_en}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <FaUsers className="w-4 h-4 mr-2" />
                      {i18n.language === 'mr' ? 'पात्रता:' : 'Eligibility:'}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(i18n.language === 'mr' ? scheme.eligibility_mr : scheme.eligibility_en)
                        .slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      className={`${scheme.iconColor} hover:underline flex items-center space-x-1`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedScheme(scheme)
                      }}
                    >
                      <FaInfoCircle className="w-4 h-4" />
                      <span>{t('common.readMore')}</span>
                    </button>
                    <a
                      href={scheme.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 flex items-center space-x-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span className="text-xs">Source</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {i18n.language === 'mr' 
                ? 'छात्रवृत्तीसाठी अर्ज करा'
                : 'Apply for Scholarships'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {i18n.language === 'mr'
                ? 'आमच्या प्रवेश कार्यालयात संपर्क साधा किंवा ऑनलाइन अर्ज करा'
                : 'Contact our admissions office or apply online'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                {i18n.language === 'mr' ? 'ऑनलाइन अर्ज करा' : 'Apply Online'}
              </button>
              <button className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                {i18n.language === 'mr' ? 'अधिक माहिती' : 'More Information'}
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedScheme && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScheme(null)}
            >
              <motion.div
                className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <FaGraduationCap className={`w-8 h-8 ${selectedScheme.iconColor} mr-3`} />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {i18n.language === 'mr' ? selectedScheme.title_mr : selectedScheme.title_en}
                        </h2>
                        <p className="text-gray-600">
                          {i18n.language === 'mr' ? selectedScheme.authority_mr : selectedScheme.authority_en}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedScheme(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <FaUsers className="w-5 h-5 mr-2" />
                        {i18n.language === 'mr' ? 'पात्रता निकष:' : 'Eligibility Criteria:'}
                      </h3>
                      <ul className="space-y-2">
                        {(i18n.language === 'mr' ? selectedScheme.eligibility_mr : selectedScheme.eligibility_en)
                          .map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <FaFileAlt className="w-5 h-5 mr-2" />
                        {i18n.language === 'mr' ? 'लाभ:' : 'Benefits:'}
                      </h3>
                      <ul className="space-y-2">
                        {(i18n.language === 'mr' ? selectedScheme.benefits_mr : selectedScheme.benefits_en)
                          .map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 flex items-center">
                          <FaRupeeSign className="w-4 h-4 mr-2" />
                          {i18n.language === 'mr' ? 'अनुदान रक्कम:' : 'Grant Amount:'}
                        </h4>
                        <p className="text-lg font-semibold text-indigo-600">
                          {i18n.language === 'mr' ? selectedScheme.amount_mr : selectedScheme.amount_en}
                        </p>
                      </div>
                      <a
                        href={selectedScheme.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>{i18n.language === 'mr' ? 'अधिकृत वेबसाइट' : 'Official Website'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Schemes
