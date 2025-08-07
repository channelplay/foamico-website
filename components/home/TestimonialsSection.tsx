'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      product: "Sova Classic",
      rating: 5,
      comment: "Best mattress I've ever owned! My back pain is completely gone.",
      location: "Mumbai, Maharashtra",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      gender: "female"
    },
    {
      name: "Rajesh Kumar",
      product: "Ultima Premium",
      rating: 5,
      comment: "The smart features are amazing. I wake up feeling refreshed every day.",
      location: "Bangalore, Karnataka",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      gender: "male"
    },
    {
      name: "Anita Patel",
      product: "Natura Organic",
      rating: 5,
      comment: "Worth every penny. The quality and comfort are unmatched.",
      location: "Delhi NCR",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      gender: "female"
    },
    {
      name: "Vikram Singh",
      product: "Marvel Deluxe",
      rating: 5,
      comment: "Perfect balance of firmness and comfort. Best sleep I've had in years!",
      location: "Pune, Maharashtra",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      gender: "male"
    },
    {
      name: "Meera Reddy",
      product: "Sova Classic",
      rating: 5,
      comment: "The natural latex is amazing. No more allergies and peaceful sleep every night.",
      location: "Hyderabad, Telangana",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      gender: "female"
    },
    {
      name: "Arjun Malhotra",
      product: "Ultima Premium",
      rating: 5,
      comment: "25-year warranty gave me confidence. The quality is truly exceptional.",
      location: "Gurugram, Haryana",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      gender: "male"
    },
    {
      name: "Kavita Joshi",
      product: "Natura Organic",
      rating: 5,
      comment: "Love the eco-friendly materials. Sleeping guilt-free and comfortably!",
      location: "Chennai, Tamil Nadu",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      gender: "female"
    }
  ]
  
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-block bg-[#E1EC9A] text-[#77870D] px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What India's Dreamers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real words from real people who swapped their sleep drama for deep slumber.
          </p>
        </div>
      </div>
      
      {/* Scrolling testimonials container */}
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
              duration: 180,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 flex-shrink-0 w-[350px] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Profile Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 italic text-sm mb-4 line-clamp-3">"{testimonial.comment}"</p>
              
              {/* Product Category */}
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs font-medium">
                  <span className="text-gray-500">Purchased: </span>
                  <span className="text-[#77870D]">{testimonial.product}</span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth edge fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  )
}