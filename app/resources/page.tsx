import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { blogPosts } from '@/data/blogs'
import { getPlaceholderImage } from '@/lib/placeholder-images'

export const metadata: Metadata = {
  title: 'Resources & Blog | Foamico',
  description: 'Sleep tips, mattress care guides, and expert advice for better rest. Learn from our sleep science experts.',
}

export default function ResourcesPage() {
  return (
    <div className="py-8 lg:py-12">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foamico-black mb-4">
            Sleep Resources & Guides
          </h1>
          <p className="text-lg text-foamico-gray-600 max-w-2xl mx-auto">
            Expert advice, sleep science insights, and practical tips to help you 
            get the most out of your mattress and improve your sleep quality.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foamico-black mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`}>
                <Card hover className="h-full cursor-pointer" padding="none">
                  <div className="grid lg:grid-cols-5 h-full">
                    <div className="lg:col-span-2 relative h-48 lg:h-full">
                      <Image
                        src={getPlaceholderImage(post.thumbnail as keyof typeof import('@/lib/placeholder-images').placeholderImages)}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:col-span-3 p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="primary" size="small">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-foamico-gray-500">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foamico-black mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-foamico-gray-600 mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-foamico-gray-500">
                          <span className="font-medium">{post.author}</span>
                          <span className="mx-2">·</span>
                          <span>{post.date}</span>
                        </div>
                        <span className="text-foamico-lime font-medium hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foamico-black mb-8">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center cursor-pointer hover:border-foamico-lime transition-colors">
              <div className="text-4xl mb-4">😴</div>
              <h3 className="text-lg font-semibold text-foamico-black mb-2">
                Sleep Science
              </h3>
              <p className="text-foamico-gray-600 text-sm">
                Understanding sleep cycles, disorders, and optimization techniques
              </p>
            </Card>
            <Card className="text-center cursor-pointer hover:border-foamico-lime transition-colors">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-lg font-semibold text-foamico-black mb-2">
                Mattress Care
              </h3>
              <p className="text-foamico-gray-600 text-sm">
                Maintenance tips to extend your mattress life and hygiene
              </p>
            </Card>
            <Card className="text-center cursor-pointer hover:border-foamico-lime transition-colors">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-semibold text-foamico-black mb-2">
                Bedroom Setup
              </h3>
              <p className="text-foamico-gray-600 text-sm">
                Creating the perfect sleep environment for quality rest
              </p>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-foamico-lime rounded-lg p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated on Sleep Science
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get the latest sleep tips, mattress care advice, and exclusive offers 
            delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foamico-black placeholder-foamico-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-foamico-lime font-medium rounded-lg hover:bg-foamico-gray-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foamico-black mb-8 text-center">
            Quick Sleep Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tip: 'Maintain consistent sleep schedule',
                icon: '⏰'
              },
              {
                tip: 'Keep bedroom cool (18-22°C)',
                icon: '🌡️'
              },
              {
                tip: 'Avoid screens before bed',
                icon: '📱'
              },
              {
                tip: 'Invest in quality bedding',
                icon: '🛏️'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-foamico-gray-700 font-medium">
                  {item.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}