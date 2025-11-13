'use client'

import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white text-green-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About IngredientInsight</h1>
          <p className="text-lg text-gray-700">Empowering consumers with AI-driven ingredient transparency</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                          The mission of IngredientInsight is dedicated to simplifying ingredient understanding through artificial intelligence. We believe that everyone deserves transparent, accessible information about what they&apos;re consuming.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform uses cutting-edge AI to decode product labels, identify potentially harmful substances, and provide personalized recommendations based on your health goals and dietary preferences.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Core Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Transparency</h3>
                  <p className="text-sm text-gray-600">Complete disclosure of product ingredients</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Safety First</h3>
              <p className="text-sm text-gray-600">Prioritizing user health and well-being</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Accessibility</h3>
                  <p className="text-sm text-gray-600">Making ingredient analysis available to everyone</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">OCR Technology</h3>
              <p className="text-gray-700">Advanced Optical Character Recognition to extract text from product labels with high accuracy</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">NLP Engine</h3>
              <p className="text-gray-700">Natural Language Processing to understand ingredient contexts and potential risks</p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-green-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-green-600 mb-2">AI Analysis</h3>
              <p className="text-gray-700">Machine learning models trained to identify harmful substances and provide alternatives</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Why IngredientInsight?</h2>
          <p className="text-lg text-green-800 mb-6 max-w-3xl mx-auto">
            In today&apos;s complex marketplace, understanding product ingredients is crucial for making informed decisions about health, ethics, and sustainability. We make this process simple, fast, and accessible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <p className="text-green-800">Ingredients Analyzed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1,000+</div>
              <p className="text-green-800">Happy Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <p className="text-green-800">Accuracy Rate</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 p-8 rounded-xl bg-white border-2 border-green-300 shadow-md">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Get Started Today</h2>
          <p className="text-gray-700 mb-6">Ready to discover what&apos;s really inside your products? Start your first scan now and join thousands of health-conscious consumers.</p>
          <Link href="/" className="inline-block px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors" onClick={() => window.scrollTo(0, 0)}>
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  )
}
