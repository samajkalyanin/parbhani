import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa'
import { blogs } from '../data/blogs'

const BlogPage = () => {
  const { t, i18n } = useTranslation()
  
  return (
    <>
      <Helmet>
        <title>{t('nav.blog')} - GRS Parbhani</title>
        <meta name="description" content="Latest news and updates from Government Residential School Parbhani" />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <div className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('nav.blog')}
            </h1>
            <p className="text-xl text-indigo-200">
              {i18n.language === 'mr' 
                ? 'शाळेच्या नवीन बातम्या आणि घटना'
                : 'Latest news and events from our school'}
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={i18n.language === 'mr' ? blog.title_mr : blog.title_en}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-1" />
                        {new Date(blog.date).toLocaleDateString(i18n.language === 'mr' ? 'mr-IN' : 'en-IN')}
                      </div>
                      <div className="flex items-center">
                        <FaUser className="w-4 h-4 mr-1" />
                        {i18n.language === 'mr' ? blog.author_mr : blog.author_en}
                      </div>
                      <div className="flex items-center">
                        <FaTags className="w-4 h-4 mr-1" />
                        {i18n.language === 'mr' ? blog.category_mr : blog.category_en}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors duration-200">
                      <Link to={`/blog/${blog.slug}`}>
                        {i18n.language === 'mr' ? blog.title_mr : blog.title_en}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {i18n.language === 'mr' ? blog.excerpt_mr : blog.excerpt_en}
                    </p>
                    
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200"
                    >
                      {t('common.readMore')}
                      <FaArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage
