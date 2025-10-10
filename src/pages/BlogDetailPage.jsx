import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaCalendarAlt, 
  FaUser, 
  FaTags, 
  FaArrowLeft, 
  FaShare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'
import { blogs } from '../data/blogs'

const BlogDetailPage = () => {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  
  const blog = blogs.find(b => b.slug === slug)
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {i18n.language === 'mr' ? 'लेख सापडला नाही' : 'Article Not Found'}
          </h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-800">
            {i18n.language === 'mr' ? 'ब्लॉगवर परत जा' : 'Back to Blog'}
          </Link>
        </div>
      </div>
    )
  }
  
  const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3)
  
  const shareUrl = window.location.href
  const title = i18n.language === 'mr' ? blog.title_mr : blog.title_en
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`
  }
  
  return (
    <>
      <Helmet>
        <title>{title} - GRS Parbhani</title>
        <meta name="description" content={i18n.language === 'mr' ? blog.excerpt_mr : blog.excerpt_en} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={i18n.language === 'mr' ? blog.excerpt_mr : blog.excerpt_en} />
        <meta property="og:image" content={blog.image} />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors duration-200"
            >
              <FaArrowLeft className="w-4 h-4 mr-2" />
              {i18n.language === 'mr' ? 'सर्व बातम्या' : 'All News'}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-6 mb-6">
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
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={blog.image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {i18n.language === 'mr' ? blog.content_mr : blog.content_en}
                </div>
              </div>
              
              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <FaShare className="w-5 h-5 mr-2" />
                    {t('common.share')}
                  </h3>
                  <div className="flex space-x-3">
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href={shareLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white p-3 rounded-full hover:opacity-80 transition-opacity duration-200"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {i18n.language === 'mr' ? 'संबंधित बातम्या' : 'Related News'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedBlog.image}
                        alt={i18n.language === 'mr' ? relatedBlog.title_mr : relatedBlog.title_en}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-200">
                        <Link to={`/blog/${relatedBlog.slug}`}>
                          {i18n.language === 'mr' ? relatedBlog.title_mr : relatedBlog.title_en}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {i18n.language === 'mr' ? relatedBlog.excerpt_mr : relatedBlog.excerpt_en}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default BlogDetailPage
