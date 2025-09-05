'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    product: "Sova Classic",
    rating: 5,
    comment: "Best mattress I've ever owned! My back pain is completely gone.",
    location: "Mumbai, Maharashtra",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    date: "January 2024"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    product: "Ultima Premium",
    rating: 5,
    comment: "The comfort features are amazing. I wake up feeling refreshed every day.",
    location: "Bangalore, Karnataka",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "January 2024"
  },
  {
    id: 3,
    name: "Anita Patel",
    product: "Natura Organic",
    rating: 5,
    comment: "Worth the investment. The quality and comfort are unmatched.",
    location: "Delhi NCR",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Vikram Singh",
    product: "Marvel Deluxe",
    rating: 5,
    comment: "Perfect balance of firmness and comfort. Best sleep I've had in years!",
    location: "Pune, Maharashtra",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    date: "January 2024"
  },
  {
    id: 5,
    name: "Meera Reddy",
    product: "Sova Classic",
    rating: 5,
    comment: "The natural latex is amazing. No more allergies and peaceful sleep every night.",
    location: "Hyderabad, Telangana",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "January 2024"
  },
  {
    id: 6,
    name: "Arjun Malhotra",
    product: "Ultima Premium",
    rating: 5,
    comment: "25-year warranty gave me confidence. The quality is truly exceptional.",
    location: "Gurugram, Haryana",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    date: "January 2024"
  },
  {
    id: 7,
    name: "Kavita Joshi",
    product: "Natura Organic",
    rating: 5,
    comment: "Love the eco-friendly materials. Sleeping comfortably with peace of mind!",
    location: "Chennai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    date: "January 2024"
  }
]

export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-warm-beige relative overflow-hidden">
      <Container className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-overline mb-4">Customer Reviews</p>
          <h2 className="heading-primary mb-4">
            What Our Customers Say
          </h2>
          <div className="divider-line divider-center" />
          <p className="text-body text-light-gray max-w-2xl mx-auto mt-6">
            Real experiences from our valued customers who have transformed 
            their sleep with Foamico mattresses.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -100 * testimonials.length + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[400px]"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="card-elegant h-full p-8">
                  {/* Customer Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-light-gray">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Review Content */}
                  <blockquote className="text-dark mb-6">
                    <p className="italic">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </blockquote>

                  {/* Product Info */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-light-gray">
                        Purchased:
                      </span>
                      <span className="text-sm font-medium text-dark">
                        {testimonial.product}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="w-4 h-4 text-primary" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-light-gray">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edge fade */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-warm-beige to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-warm-beige to-transparent z-10 pointer-events-none" />
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex gap-8">
            <div className="text-center">
              <p className="text-2xl font-semibold text-primary">50,000+</p>
              <p className="text-sm text-light-gray">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-primary">4.9/5</p>
              <p className="text-sm text-light-gray">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-primary">98%</p>
              <p className="text-sm text-light-gray">Would Recommend</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}