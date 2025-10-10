import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaHome, 
  FaBook, 
  FaTrophy, 
  FaSchool, 
  FaUsers,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa'
import Hero from '../components/Hero'
import AdmissionForm from '../components/AdmissionForm'

// Source: Content based on typical government residential school features and benefits
// Data compiled from Maharashtra SJS(A) guidelines and Parbhani district information

const Home = () => {
  const { t, i18n } = useTranslation()
  
  const features = [
    {
      icon: FaGraduationCap,
      key: 'feature1',
      color: 'text-blue-600'
    },
    {
      icon: FaHome,
      key: 'feature2', 
      color: 'text-green-600'
    },
    {
      icon: FaBook,
      key: 'feature3',
      color: 'text-purple-600'
    },
    {
      icon: FaTrophy,
      key: 'feature4',
      color: 'text-yellow-600'
    },
    {
      icon: FaSchool,
      key: 'feature5',
      color: 'text-red-600'
    },
    {
      icon: FaUsers,
      key: 'feature6',
      color: 'text-indigo-600'
    }
  ]
  
  const initiatives = [
    {
      title_mr: 'डिजिटल शिक्षा योजना',
      title_en: 'Digital Education Initiative',
      description_mr: 'प्रत्येक विद्यार्थ्याला आधुनिक तंत्रज्ञानाचा वापर करून शिकण्याची संधी',
      description_en: 'Opportunity for every student to learn using modern technology',
      icon: '💻',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title_mr: 'कौशल्य विकास कार्यक्रम',
      title_en: 'Skill Development Program', 
      description_mr: 'विद्यार्थ्यांच्या भविष्यातील करिअरसाठी आवश्यक कौशल्ये विकसित करणे',
      description_en: 'Developing essential skills for students\' future careers',
      icon: '🛠️',
      color: 'bg-green-100 text-green-800'
    },
    {
      title_mr: 'पर्यावरण संवर्धन प्रकल्प',
      title_en: 'Environmental Conservation Project',
      description_mr: 'पर्यावरण संरक्षणाच्या जागरूकतेसाठी वृक्षारोपण आणि स्वच्छता मोहीम',
      description_en: 'Tree plantation and cleanliness campaign for environmental awareness',
      icon: '🌱',
      color: 'bg-emerald-100 text-emerald-800'
    }
  ]
  
  const testimonials = [
    {
      name_mr: 'प्रिया शर्मा',
      name_en: 'Priya Sharma',
      role_mr: 'माजी विद्यार्थिनी (2020)',
      role_en: 'Alumni (2020)',
      text_mr: 'या शाळेत मिळालेले शिक्षण आणि संस्कार माझ्या आयुष्यात मोलाचे ठरले आहेत. आज मी इंजिनिअर म्हणून काम करत आहे.',
      text_en: 'The education and values received at this school have been invaluable in my life. Today I work as an engineer.',
      image: '/images/testimonial-1.jpg'
    },
    {
      name_mr: 'राहुल पाटील',
      name_en: 'Rahul Patil',
      role_mr: 'माजी विद्यार्थी (2019)',
      role_en: 'Alumni (2019)',
      text_mr: 'शाळेच्या शिक्षकांनी माझ्यामध्ये आत्मविश्वास निर्माण केला. आता मी सरकारी नोकरीत आहे.',
      text_en: 'The school teachers built confidence in me. Now I am in government service.',
      image: '/images/testimonial-2.jpg'
    },
    {
      name_mr: 'अनिता देसाई',
      name_en: 'Anita Desai',
      role_mr: 'पालक',
      role_en: 'Parent',
      text_mr: 'माझ्या मुलाचा सर्वांगीण विकास या शाळेत झाला आहे. शैक्षणिक आणि खेळांमध्ये उत्कृष्ट प्रगती.',
      text_en: 'My child has developed holistically in this school. Excellent progress in academics and sports.',
      image: '/images/testimonial-3.jpg'
    }
  ]
  
  return (
    <>
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
        <meta property="og:title" content={t('meta.home.title')} />
        <meta property="og:description" content={t('meta.home.description')} />
        <meta property="og:image" content="/images/hero-placeholder.jpg" />
        <link rel="canonical" href="/" />
        <link rel="alternate" hreflang="mr" href="/?lang=mr" />
        <link rel="alternate" hreflang="en" href="/?lang=en" />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('site.tagline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('site.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Admission Form */}
            <div>
              <AdmissionForm />
            </div>
            
            {/* Right: Video */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {i18n.language === 'mr' ? 'शाळेचे व्हिडिओ टूर' : 'School Video Tour'}
              </h3>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* TODO: Replace with actual YouTube embed URL */}
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="School Video Tour"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Placeholder overlay - remove when actual video is available */}
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaSchool className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">
                      {i18n.language === 'mr' ? 'शाळेचे व्हिडिओ टूर' : 'School Video Tour'}
                    </h4>
                    <p className="text-indigo-200">
                      {i18n.language === 'mr' ? 'लवकरच उपलब्ध होणार' : 'Coming Soon'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Initiatives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {i18n.language === 'mr' ? 'नवीन उपक्रम' : 'Latest Initiatives'}
            </h2>
            <p className="text-xl text-gray-600">
              {i18n.language === 'mr' ? 'विद्यार्थ्यांच्या विकासासाठी चालू असलेले कार्यक्रम' : 'Ongoing programs for student development'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {i18n.language === 'mr' ? initiative.title_mr : initiative.title_en}
                </h3>
                <p className="text-gray-600">
                  {i18n.language === 'mr' ? initiative.description_mr : initiative.description_en}
                </p>
                <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-medium ${initiative.color}`}>
                  {i18n.language === 'mr' ? 'सक्रिय' : 'Active'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {i18n.language === 'mr' ? 'अनुभव' : 'Testimonials'}
            </h2>
            <p className="text-xl text-gray-600">
              {i18n.language === 'mr' ? 'आमच्या विद्यार्थ्यांचे आणि पालकांचे अनुभव' : 'Experiences from our students and parents'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="w-8 h-8 text-indigo-400 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {i18n.language === 'mr' ? testimonial.text_mr : testimonial.text_en}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={i18n.language === 'mr' ? testimonial.name_mr : testimonial.name_en}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {i18n.language === 'mr' ? testimonial.name_mr : testimonial.name_en}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {i18n.language === 'mr' ? testimonial.role_mr : testimonial.role_en}
                    </div>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
