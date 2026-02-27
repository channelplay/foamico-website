'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { getBlogPost, blogPosts } from '@/data/blogs'
import { Clock, User, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react'
import React, { use, useState } from 'react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3 my-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white/50 rounded-xl border border-[#AD702A]/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/30 transition-colors"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#AD702A] text-white flex items-center justify-center font-semibold text-sm">
              {index + 1}
            </span>
            <span className="flex-1 font-semibold text-[#39250E]">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#AD702A] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-4 pl-16 text-[#39250E]/80">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function extractFAQs(content: string): FAQItem[] {
  const faqs: FAQItem[] = []
  const lines = content.trim().split('\n').map(l => l.trim())

  let inFAQSection = false
  let currentQuestion = ''
  let currentAnswer = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line === '## Frequently Asked Questions') {
      inFAQSection = true
      continue
    }

    if (inFAQSection) {
      if (line.startsWith('## ')) {
        // New H2 section, FAQ section ended
        if (currentQuestion && currentAnswer) {
          faqs.push({ question: currentQuestion, answer: currentAnswer.trim() })
        }
        break
      }

      if (line.startsWith('### ')) {
        // Save previous FAQ if exists
        if (currentQuestion && currentAnswer) {
          faqs.push({ question: currentQuestion, answer: currentAnswer.trim() })
        }
        currentQuestion = line.slice(4)
        currentAnswer = ''
      } else if (currentQuestion && line) {
        currentAnswer += (currentAnswer ? ' ' : '') + line
      }
    }
  }

  // Don't forget the last FAQ
  if (currentQuestion && currentAnswer) {
    faqs.push({ question: currentQuestion, answer: currentAnswer.trim() })
  }

  return faqs
}

function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

function parseInlineFormatting(text: string): React.ReactNode {
  if (!text.includes('**') && !text.includes('[')) {
    return text
  }

  // Split by bold and links
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)

  return (
    <>
      {parts.map((part, i) => {
        // Bold text
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-[#39250E]">{part.slice(2, -2)}</strong>
        }
        // Markdown links [text](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          const [, linkText, url] = linkMatch
          return (
            <Link key={i} href={url} className="text-[#AD702A] hover:underline font-medium">
              {linkText}
            </Link>
          )
        }
        return part
      })}
    </>
  )
}

function formatContent(content: string, faqs: FAQItem[]) {
  const lines = content.trim().split('\n').map(l => l.trim())
  const elements: React.JSX.Element[] = []
  let i = 0
  let inFAQSection = false

  while (i < lines.length) {
    const line = lines[i]

    // Handle FAQ section specially
    if (line === '## Frequently Asked Questions') {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold text-[#39250E] mb-4 mt-8">
          Frequently Asked Questions
        </h2>
      )
      elements.push(<FAQAccordion key={`faq-${i}`} faqs={faqs} />)
      inFAQSection = true
      i++
      continue
    }

    // Skip FAQ content lines (they're rendered by FAQAccordion)
    if (inFAQSection) {
      if (line.startsWith('## ') && line !== '## Frequently Asked Questions') {
        inFAQSection = false
        // Continue to process this line normally
      } else {
        i++
        continue
      }
    }

    // Check for table (starts with |)
    if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }

      // Parse table
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
        const dataRows = tableLines.slice(2) // Skip separator row

        const parseRow = (row: string) =>
          row.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim())

        const headers = parseRow(headerRow)
        const rows = dataRows.map(parseRow)

        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#AD702A] text-white">
                  {headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold text-sm">
                      {parseInlineFormatting(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-white/30'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 text-[#39250E]/80 text-sm border-t border-[#AD702A]/10">
                        {parseInlineFormatting(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-3xl md:text-4xl font-bold text-[#39250E] mb-6 mt-8">{parseInlineFormatting(line.slice(2))}</h1>)
      i++
      continue
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-xl md:text-2xl font-bold text-[#39250E] mb-4 mt-8">{parseInlineFormatting(line.slice(3))}</h2>)
      i++
      continue
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-lg md:text-xl font-semibold text-[#39250E] mb-3 mt-6">{parseInlineFormatting(line.slice(4))}</h3>)
      i++
      continue
    }

    // Blockquotes (highlighted)
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="bg-[#AD702A]/10 border-l-4 border-[#AD702A] rounded-r-lg p-4 my-6">
          <p className="text-[#39250E] font-medium">{parseInlineFormatting(line.slice(2))}</p>
        </blockquote>
      )
      i++
      continue
    }

    // Lists
    if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="flex items-start gap-2 mb-2">
          <span className="text-[#AD702A] mt-1">•</span>
          <span className="text-[#39250E]/80">{parseInlineFormatting(line.slice(2))}</span>
        </li>
      )
      i++
      continue
    }

    if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={i} className="flex items-start gap-3 mb-2">
          <span className="font-semibold text-[#AD702A]">{line.match(/^\d+/)![0]}.</span>
          <span className="text-[#39250E]/80">{parseInlineFormatting(line.replace(/^\d+\. /, ''))}</span>
        </li>
      )
      i++
      continue
    }

    // Regular paragraphs (with inline formatting)
    if (line.trim()) {
      elements.push(<p key={i} className="text-[#39250E]/80 mb-4 leading-relaxed">{parseInlineFormatting(line)}</p>)
    }

    i++
  }

  return elements
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter(p => p.slug !== slug)
  const phoneNumber = '917496982886'
  const faqs = extractFAQs(post.content)
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="min-h-screen" style={{ backgroundColor: '#e9e4cd' }}>
      {/* Hero Section */}
      <div className="bg-[#4C6462] pt-24 pb-12 md:pt-28 md:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li className="text-white font-medium line-clamp-1">{post.title}</li>
              </ol>
            </nav>

            <span className="inline-block px-3 py-1 bg-[#AD702A] text-white text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Content */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-[#AD702A]/10">
                <div className="prose prose-lg max-w-none">
                  {formatContent(post.content, faqs)}
                </div>
              </div>

              {/* CTA Section */}
              <motion.div
                className="mt-8 bg-[#4C6462] rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Ready for Better Sleep?
                </h3>
                <p className="text-white/80 mb-6">
                  Experience the Foamico difference with our range of natural latex mattresses.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 bg-[#AD702A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#8d5a22] transition-colors"
                  >
                    Explore Mattresses
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="sticky top-24 space-y-6">
                {/* Author Info */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#AD702A]/10">
                  <h3 className="font-bold text-[#39250E] mb-3">
                    About the Author
                  </h3>
                  <p className="text-sm text-[#39250E]/70">
                    {post.author} is a sleep expert at Foamico with over 10 years of experience
                    in sleep science and mattress technology.
                  </p>
                </div>

                {/* Related Articles */}
                {otherPosts.length > 0 && (
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#AD702A]/10">
                    <h3 className="font-bold text-[#39250E] mb-4">
                      More Articles
                    </h3>
                    <div className="space-y-4">
                      {otherPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-[#39250E] group-hover:text-[#AD702A] transition-colors mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-[#39250E]/50">
                            {relatedPost.readTime} • {relatedPost.date}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="bg-[#AD702A] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">
                    Need Help Choosing?
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Our sleep experts are here to help you find the perfect mattress.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-white text-[#39250E] font-semibold px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors text-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                    <Link
                      href="/products/compare"
                      className="flex items-center justify-center gap-2 w-full bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl hover:bg-white/30 transition-colors text-sm"
                    >
                      Compare Products
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
    </>
  )
}
