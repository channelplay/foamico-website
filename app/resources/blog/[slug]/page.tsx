import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { getBlogPost, blogPosts } from '@/data/blogs'
import { getPlaceholderImage } from '@/lib/placeholder-images'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Foamico',
    }
  }

  return {
    title: `${post.title} | Foamico Blog`,
    description: post.excerpt,
  }
}

function formatContent(content: string) {
  return content
    .trim()
    .split('\n')
    .map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-foamico-black mb-6 mt-8">{line.slice(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-foamico-black mb-4 mt-8">{line.slice(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-foamico-black mb-3 mt-6">{line.slice(4)}</h3>
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="flex items-start gap-2 mb-2">
            <span className="text-foamico-lime mt-1">•</span>
            <span className="text-foamico-gray-700">{line.slice(2)}</span>
          </li>
        )
      }
      
      if (line.match(/^\d+\. /)) {
        return (
          <li key={index} className="flex items-start gap-3 mb-2">
            <span className="font-semibold text-foamico-lime">{line.match(/^\d+/)![0]}.</span>
            <span className="text-foamico-gray-700">{line.replace(/^\d+\. /, '')}</span>
          </li>
        )
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**')
        return (
          <p key={index} className="text-foamico-gray-700 mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold text-foamico-black">{part}</strong> : part
            )}
          </p>
        )
      }
      
      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="text-foamico-gray-700 mb-4">{line}</p>
      }
      
      return null
    })
    .filter(Boolean)
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter(p => p.slug !== params.slug)

  return (
    <article className="py-8 lg:py-12">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-foamico-gray-500 hover:text-foamico-lime">
                Home
              </Link>
            </li>
            <li className="text-foamico-gray-400">/</li>
            <li>
              <Link href="/resources" className="text-foamico-gray-500 hover:text-foamico-lime">
                Resources
              </Link>
            </li>
            <li className="text-foamico-gray-400">/</li>
            <li className="text-foamico-black font-medium line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden mb-12">
          <Image
            src={getPlaceholderImage('blog-hero-generic-1920x600')}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <Badge variant="primary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-foamico-lime-light rounded-lg">
              <h3 className="text-xl font-semibold text-foamico-black mb-3">
                Ready for Better Sleep?
              </h3>
              <p className="text-foamico-gray-700 mb-4">
                Experience the Foamico difference with our range of natural latex mattresses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/products" size="small">
                  Explore Mattresses
                </Button>
                <Button href="/find-store" variant="outline" size="small">
                  Visit Store
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Author Info */}
              <div className="bg-foamico-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-foamico-black mb-3">
                  About the Author
                </h3>
                <p className="text-foamico-gray-600 text-sm">
                  {post.author} is a sleep expert at Foamico with over 10 years of experience 
                  in sleep science and mattress technology.
                </p>
              </div>

              {/* Related Articles */}
              {otherPosts.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foamico-black mb-4">
                    More Articles
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/resources/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-foamico-black group-hover:text-foamico-lime transition-colors mb-1">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-foamico-gray-500">
                          {relatedPost.readTime} • {relatedPost.date}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-foamico-lime text-white rounded-lg p-6">
                <h3 className="font-semibold mb-4">
                  Need Help Choosing?
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Our sleep experts are here to help you find the perfect mattress.
                </p>
                <Button href="/products/compare" variant="secondary" size="small" className="w-full">
                  Compare Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  )
}