'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AboutPage() {
  const router = useRouter()
  const [showRevertConfirm, setShowRevertConfirm] = useState(false)

  const handleRevert = async () => {
    try {
      // Call API to revert the file
      const response = await fetch('/api/revert-about', { method: 'POST' })
      if (response.ok) {
        router.refresh()
        setShowRevertConfirm(false)
      }
    } catch (error) {
      console.error('Revert failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-green-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 leading-tight">
              Transparency in Every Bite
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              IngredientInsight is an AI-powered platform designed to decode what&apos;s really inside your food. We believe everyone deserves to know what they&apos;re consuming.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              Start Scanning Now
            </Link>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="https://tse4.mm.bing.net/th/id/OIP.ya1twSObTm4uwuQikYlJMgHaD4?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Fresh ingredients"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission Section - Alternating Layout */}
      <section className="py-20 px-6 bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image on left for this section */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="https://th.bing.com/th/id/R.708cc3f7c6a3f891ef0a81ef47067dcc?rik=G%2bC1z1BLTm2svQ&pid=ImgRaw&r=0"
              alt="Team working on IngredientInsight"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We&apos;re on a mission to revolutionize how consumers understand food labels. Inspired by FoodPharmer&apos;s commitment to food transparency, we combine AI, machine learning, and nutritional science to make ingredient analysis accessible to everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you&apos;re navigating allergies, avoiding certain additives, or simply making informed choices, IngredientInsight gives you the clarity you deserve. No more squinting at tiny labels or wondering what mysterious ingredients are hiding in your cart.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600">🔍</span>
                <div>
                  <h3 className="font-semibold text-green-900">Smart OCR Technology</h3>
                  <p className="text-gray-600">Instantly captures and reads product labels with 99% accuracy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600">🧠</span>
                <div>
                  <h3 className="font-semibold text-green-900">AI-Powered Analysis</h3>
                  <p className="text-gray-600">Understands ingredients in context, not just lists them</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-green-600">❤️</span>
                <div>
                  <h3 className="font-semibold text-green-900">Personalized Insights</h3>
                  <p className="text-gray-600">Recommendations tailored to your health goals and preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section - Centered */}
      <section className="py-20 px-6 border-b border-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-8">Our Inspiration</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At the intersection of science and nature, we believe information is power. Just like how nutritionists help people understand their dietary needs, we&apos;re building tools to help everyone decode the food industry&apos;s complexity. IngredientInsight stands as your digital nutritionist—always available, always honest, always in your corner.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Science-Based</h3>
              <p className="text-gray-700">Grounded in nutritional research and food science</p>
            </div>
            <div className="p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Transparent</h3>
              <p className="text-gray-700">No hidden agendas—just honest ingredient information</p>
            </div>
            <div className="p-8 bg-green-50 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Accessible</h3>
              <p className="text-gray-700">Technology that works for everyone, everywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-20 px-6 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-green-200 transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-200 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 pt-8">
            <p className="text-center text-green-200">© 2024 IngredientInsight. Made with 🌿 for healthier choices.</p>
          </div>
        </div>
      </section>

      {/* Revert Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowRevertConfirm(!showRevertConfirm)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-semibold transition-colors"
          title="Revert to previous About page design"
        >
          ↺ Revert
        </button>
      </div>

      {/* Revert Confirmation Modal */}
      {showRevertConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Revert Design?</h3>
            <p className="text-gray-600 mb-6">This will restore the previous About page design. This action can be undone.</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowRevertConfirm(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRevert}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Revert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
