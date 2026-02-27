'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { blogPosts } from '@/data/blogs'
import { Clock, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const featuredPost = blogPosts[0]

  return (
    <section className="min-h-screen py-16 md:py-24" style={{ backgroundColor: '#e9e4cd' }}>
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#AD702A] font-semibold">
              Insights & Tips
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-[#AD702A]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#39250E] mb-4 md:mb-6 px-4">
            Foamico Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#39250E]/80 max-w-2xl mx-auto px-4">
            Expert insights on sleep science, mattress care, and tips for a better night&apos;s rest.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#AD702A]" />
              <span className="text-sm tracking-[0.15em] uppercase text-[#AD702A] font-semibold">
                Featured Article
              </span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="block cursor-pointer">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#AD702A]/10 hover:border-[#AD702A]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-[400px] overflow-hidden">
                    <Image
                      src={featuredPost.thumbnailUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#AD702A]/10 text-[#AD702A] text-xs font-semibold rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#39250E] mb-4 group-hover:text-[#AD702A] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#39250E]/70 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-[#39250E]/60">
                        <span className="flex items-center gap-1.5">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-2 text-[#AD702A] font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-[1px] bg-[#AD702A]" />
            <span className="text-sm tracking-[0.15em] uppercase text-[#AD702A] font-semibold">
              All Articles
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/blog/${post.slug}`} className="block cursor-pointer h-full">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#AD702A]/10 hover:border-[#AD702A]/30 transition-all duration-300 hover:shadow-lg group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 bg-[#AD702A]/10 text-[#AD702A] text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#39250E]/50">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#39250E] mb-3 line-clamp-2 group-hover:text-[#AD702A] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#39250E]/70 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#39250E]/50">
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#AD702A] font-semibold group-hover:gap-2.5 transition-all">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#4C6462] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get the latest sleep tips, mattress care advice, and exclusive offers
              delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-[#39250E] placeholder-[#39250E]/50 bg-white focus:outline-none focus:ring-2 focus:ring-[#AD702A]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#AD702A] text-white font-semibold rounded-xl hover:bg-[#8d5a22] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
