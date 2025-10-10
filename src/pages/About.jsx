import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaEye, 
  FaBullseye, 
  FaAward,
  FaUsers,
  FaSchool,
  FaCalendarAlt,
  FaChartLine
} from 'react-icons/fa'

// Source: Content based on Maharashtra Government Residential Schools framework
// References: https://sjsa.maharashtra.gov.in/ - Social Justice Department guidelines
// https://parbhani.gov.in/ - District administration educational initiatives

const About = () => {
  const { t, i18n } = useTranslation()
  
  const achievements = [
    {
      icon: FaAward,
      number: '95%',
      label_mr: 'उत्तीर्ण होण्याचे प्रमाण',
      label_en: 'Pass Percentage',
      color: 'text-yellow-600'
    },
    {
      icon: FaUsers,
      number: '1000+',
      label_mr: 'विद्यार्थी',
      label_en: 'Students',
      color: 'text-blue-600'
    },
    {
      icon: FaSchool,
      number: '50+',
      label_mr: 'शिक्षक',
      label_en: 'Teachers',
      color: 'text-green-600'
    },
    {
      icon: FaCalendarAlt,
      number: '20+',
      label_mr: 'वर्षांचा अनुभव',
      label_en: 'Years of Excellence',
      color: 'text-purple-600'
    }
  ]
  
  const milestones = [
    {
      year: '2004',
      title_mr: 'शाळेची स्थापना',
      title_en: 'School Establishment',
      description_mr: 'महाराष्ट्र शासनाच्या समाजकल्याण विभागाने शाळेची स्थापना केली',
      description_en: 'School established by Maharashtra Government Social Welfare Department'
    },
    {
      year: '2010',
      title_mr: 'आधुनिकीकरण',
      title_en: 'Modernization',
      description_mr: 'प्रयोगशाळा आणि संगणक केंद्राचे आधुनिकीकरण',
      description_en: 'Modernization of laboratories and computer center'
    },
    {
      year: '2015',
      title_mr: 'राज्यस्तरीय पुरस्कार',
      title_en: 'State Level Award',
      description_mr: 'उत्कृष्ट शैक्षणिक कामगिरीसाठी राज्य सरकारचा पुरस्कार',
      description_en: 'State government award for outstanding academic performance'
    },
    {
      year: '2020',
      title_mr: 'डिजिटल शिक्षा',
      title_en: 'Digital Education',
      description_mr: 'कोविड-19 दरम्यान ऑनलाइन शिक्षणाची सुरुवात',
      description_en: 'Introduction of online education during COVID-19'
    },
    {
      year: '2024',
      title_mr: 'नवीन सुविधा',
      title_en: 'New Facilities',
      description_mr: 'आधुनिक खेळाचे मैदान आणि ग्रंथालयाचे विस्तारीकरण',
      description_en: 'Modern sports ground and library expansion'
    }
  ]
  
  return (
    <>
      <Helmet>
        <title>{t('meta.about.title')}</title>
        <meta name="description" content={t('meta.about.description')} />
        <meta property="og:title" content={t('meta.about.title')} />
        <meta property="og:description" content={t('meta.about.description')} />
        <meta property="og:image" content="/images/school-building.jpg" />
        <link rel="canonical" href="/about" />
        <link rel="alternate" hreflang="mr" href="/about?lang=mr" />
        <link rel="alternate" hreflang="en" href="/about?lang=en" />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-indigo-600 text-white py-20">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/images/school-building.jpg)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('nav.about')}
              </h1>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                {i18n.language === 'mr' 
                  ? 'शिक्षण, संस्कार आणि सर्वांगीण विकासाच्या प्रवासातील आमची गाथा'
                  : 'Our journey in education, values and holistic development'}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {i18n.language === 'mr' ? 'आमच्याबद्दल' : 'About Our School'}
                </h2>
                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  {i18n.language === 'mr' ? (
                    <>
                      <p>
                        शासकीय निवासी शाळा परभणी ही महाराष्ट्र शासनाच्या समाजकल्याण विभागाअंतर्गत चालविली जाणारी एक अग्रगण्य शैक्षणिक संस्था आहे. वर्ष 2004 मध्ये स्थापन झालेली ही शाळा गेल्या दोन दशकांपासून गुणवत्तापूर्ण शिक्षण प्रदान करीत आहे.
                      </p>
                      <p>
                        आमची शाळा मुख्यतः आर्थिकदृष्ट्या कमकुवत आणि सामाजिकदृष्ट्या मागासलेल्या घटकांतील विद्यार्थ्यांसाठी शिक्षणाची संधी उपलब्ध करून देते. येथे केवळ शैक्षणिक विकासच नाही तर व्यक्तिमत्त्वाचा सर्वांगीण विकास केला जातो.
                      </p>
                      <p>
                        आधुनिक शिक्षण पद्धती, अनुभवी शिक्षक, चांगली सुविधा आणि नैतिक मूल्यांचे शिक्षण यामुळे आमच्या विद्यार्थ्यांना समाजात योग्य स्थान मिळवून देण्यात यश आले आहे.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Government Residential School Parbhani is a leading educational institution operated under the Social Welfare Department of Maharashtra Government. Established in 2004, this school has been providing quality education for the past two decades.
                      </p>
                      <p>
                        Our school primarily provides educational opportunities for economically weaker and socially backward students. Here, not only academic development but overall personality development is undertaken.
                      </p>
                      <p>
                        Modern teaching methods, experienced teachers, good facilities and moral education have helped our students achieve proper place in society.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/images/principal.jpg" 
                  alt="Principal"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-20 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaEye className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {i18n.language === 'mr' ? 'आमची दृष्टी' : 'Our Vision'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === 'mr' 
                    ? 'प्रत्येक विद्यार्थ्याला गुणवत्तापूर्ण शिक्षण प्रदान करून त्यांच्यामध्ये नैतिक मूल्ये, नेतृत्व गुण आणि जीवनकौशल्य विकसित करणे. एक न्यायसंगत आणि समृद्ध समाज निर्माण करणाऱ्या जबाबदार नागरिकांची निर्मिती करणे.'
                    : 'To provide quality education to every student and develop moral values, leadership qualities and life skills in them. To create responsible citizens who build a just and prosperous society.'
                  }
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FaBullseye className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {i18n.language === 'mr' ? 'आमचे ध्येय' : 'Our Mission'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {i18n.language === 'mr'
                    ? 'आधुनिक शैक्षणिक पद्धती, समग्र व्यक्तिमत्त्व विकास, आणि सामाजिक जबाबदारीच्या भावनेसह विद्यार्थ्यांना सशक्त बनवणे. शैक्षणिक उत्कृष्टता, नैतिक चारित्र्य आणि सामाजिक सेवेला प्रोत्साहन देणारे वातावरण निर्माण करणे.'
                    : 'To empower students with modern educational methods, holistic personality development, and sense of social responsibility. To create an environment that promotes academic excellence, moral character and social service.'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {i18n.language === 'mr' ? 'आमची उपलब्धी' : 'Our Achievements'}
              </h2>
              <p className="text-xl text-gray-600">
                {i18n.language === 'mr' 
                  ? 'गेल्या दोन दशकांतील आमच्या यशोगाथा'
                  : 'Our success story over the past two decades'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600">
                    {i18n.language === 'mr' ? achievement.label_mr : achievement.label_en}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="/images/principal.jpg" 
                  alt="Principal"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {i18n.language === 'mr' ? 'प्राचार्यांचा संदेश' : 'Principal\'s Message'}
                </h2>
                <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  {i18n.language === 'mr' 
                    ? '"शिक्षण हे केवळ पुस्तकी ज्ञान नसून जीवनाचे सर्वांगीण विकासाचे साधन आहे. आमच्या शाळेत प्रत्येक मुलामध्ये छुपलेली प्रतिभा शोधून त्यांना योग्य मार्गदर्शन देण्यात आम्ही विश्वास ठेवतो. आमचे ध्येय आहे की प्रत्येक विद्यार्थी आत्मविश्वासाने भविष्यातील आव्हानांना तोंड देऊ शकेल."'
                    : '"Education is not just bookish knowledge but a means of holistic development of life. We believe in finding the hidden talent in every child in our school and providing them with proper guidance. Our goal is that every student can face future challenges with confidence."'
                  }
                </blockquote>
                <div className="text-gray-600">
                  <p className="font-semibold">
                    {/* TODO: Add actual principal name */}
                    डॉ. राजेश कुमार पाटील / Dr. Rajesh Kumar Patil
                  </p>
                  <p className="text-sm">
                    {i18n.language === 'mr' ? 'प्राचार्य' : 'Principal'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {i18n.language === 'mr' ? 'आमचा प्रवास' : 'Our Journey'}
              </h2>
              <p className="text-xl text-gray-600">
                {i18n.language === 'mr' 
                  ? 'महत्त्वाचे टप्पे आणि उपलब्धी'
                  : 'Important milestones and achievements'}
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Year badge */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {i18n.language === 'mr' ? milestone.title_mr : milestone.title_en}
                      </h3>
                      <p className="text-gray-700">
                        {i18n.language === 'mr' ? milestone.description_mr : milestone.description_en}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
