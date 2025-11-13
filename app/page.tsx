'use client'

import React, { useEffect, useState } from 'react'

function HeroSection({ onLearn, onScan }: { onLearn: () => void; onScan: () => void }) {
  return (
    <section id="hero-section" className="snap-start h-screen relative bg-[url('/hero-bg.jpg')] bg-cover bg-center mt-20">
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Discover What&apos;s Inside Your Products 🌿
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            AI-powered analysis of ingredients for health, ethics, and safety.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScan}
              className="rounded-full bg-green-600 text-white px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-300 font-semibold"
            >
              🟢 Scan Now
            </button>
            <button
              onClick={onLearn}
              className="rounded-full bg-green-100 text-green-800 px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-300 font-semibold"
            >
              🟩 Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeachingSection() {
  const slides = [
    {
      step: 1,
      title: 'Upload or Scan Ingredients',
      description: 'Take a photo of any product label using your camera or upload an existing image. Our OCR technology will extract all ingredient information instantly.',
      icon: '📸',
    },
    {
      step: 2,
      title: 'AI Analyzes & Explains',
      description: 'Our advanced AI engine processes each ingredient, checking for potential allergens, harmful chemicals, and ethical concerns. Get detailed explanations in seconds.',
      icon: '🧠',
    },
    {
      step: 3,
      title: 'View Safety Rating',
      description: 'Receive a comprehensive safety score along with personalized health alternatives. Our rating system considers your preferences and dietary restrictions.',
      icon: '⭐',
    },
    {
      step: 4,
      title: 'Save & Share Results',
      description: 'Create your ingredient history, save favorite analyses, and share results with friends or healthcare providers. Track products over time.',
      icon: '💾',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="teach-section" className="snap-start h-screen bg-linear-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How to Use IngredientInsight</h2>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-12 min-h-96 flex flex-col justify-center">
            <div className="text-7xl text-center mb-6">{slides[currentSlide].icon}</div>
            <div className="text-center">
              <div className="text-green-600 font-bold text-lg mb-2">Step {slides[currentSlide].step} of {slides.length}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{slides[currentSlide].description}</p>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-green-600 text-white rounded-full p-3 hover:bg-green-700 transition-all hidden md:block"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-green-600 text-white rounded-full p-3 hover:bg-green-700 transition-all hidden md:block"
          >
            →
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}

function CarouselSection() {
  const slides = [
    {
      title: 'Instant AI-Powered Insights 🧠',
      description: 'Get comprehensive analysis of any product in seconds. Our AI understands complex ingredient lists and chemical compositions.',
      icon: '💡',
    },
    {
      title: 'How Rating System Works ⭐',
      description: 'Each ingredient receives a 0-100 safety score based on scientific research, health impact, and ethical considerations. Your preferences personalize the rating.',
      icon: '📊',
    },
    {
      title: 'Why Transparency Matters 🌍',
      description: 'Ingredient transparency empowers consumers to make informed choices about health, ethics, and sustainability. Know exactly what you&apos;re buying.',
      icon: '👁️',
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="snap-start h-screen bg-linear-to-b from-green-50 to-white flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why IngredientInsight?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl transition-all duration-500 transform ${
                i === index
                  ? 'bg-green-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-md scale-95 opacity-70'
              }`}
            >
              <div className="text-6xl mb-4">{slide.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
              <p className={`text-lg ${i === index ? 'text-green-50' : 'text-gray-600'}`}>{slide.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${index === i ? 'bg-green-600 w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function UploadScanSection() {
  const [filters, setFilters] = useState({
    allergenFree: false,
    vegan: false,
    clean: false,
    eco: false,
  })
  const [allergensExpanded, setAllergensExpanded] = useState(false)
  const [selectedAllergens, setSelectedAllergens] = useState<Record<string, boolean>>({
    nuts: false,
    dairy: false,
    gluten: false,
    soy: false,
    fragrance: false,
    eggs: false,
  })

  const toggleAllergenFilter = () => {
    setFilters((s) => ({ ...s, allergenFree: !s.allergenFree }))
    setAllergensExpanded((v) => !v)
  }

  const toggleOtherFilter = (key: string) => {
    setFilters((s) => ({ ...s, [key]: !s[key as keyof typeof s] }))
  }

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((s) => ({ ...s, [allergen]: !s[allergen] }))
  }

  const handleCameraScan = () => {
    alert('Camera functionality will be available soon!')
  }

  const handleFileUpload = () => {
    const input = document.getElementById('file-input') as HTMLInputElement
    input?.click()
  }

  const handlePasteIngredients = () => {
    alert('Paste mode functionality will be available soon!')
  }

  return (
    <section id="scan-section" className="snap-start h-screen bg-white flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Scan Your Product</h2>
          <p className="text-lg text-gray-600 mt-2">Upload a photo, paste ingredients, or scan using camera.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <div className="p-6 border-2 border-green-300 rounded-2xl bg-green-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Preferences</h3>

              <div className="space-y-2 mb-6">
                <button
                  onClick={toggleAllergenFilter}
                  className={`w-full rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    filters.allergenFree ? 'bg-green-500 text-white' : 'bg-white text-green-700 border border-green-300'
                  } hover:bg-green-400 hover:text-white`}
                >
                  🚫 Allergen-Free
                </button>

                <button
                  onClick={() => toggleOtherFilter('vegan')}
                  className={`w-full rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    filters.vegan ? 'bg-green-500 text-white' : 'bg-white text-green-700 border border-green-300'
                  } hover:bg-green-400 hover:text-white`}
                >
                  🌿 Vegan
                </button>

                <button
                  onClick={() => toggleOtherFilter('clean')}
                  className={`w-full rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    filters.clean ? 'bg-green-500 text-white' : 'bg-white text-green-700 border border-green-300'
                  } hover:bg-green-400 hover:text-white`}
                >
                  💧 Clean Ingredients
                </button>

                <button
                  onClick={() => toggleOtherFilter('eco')}
                  className={`w-full rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    filters.eco ? 'bg-green-500 text-white' : 'bg-white text-green-700 border border-green-300'
                  } hover:bg-green-400 hover:text-white`}
                >
                  ♻️ Sustainable
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  allergensExpanded ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 bg-white rounded-xl border border-green-200">
                  <p className="font-semibold text-gray-900 mb-3">Allergens to Avoid</p>
                  <div className="space-y-2">
                    {Object.entries(selectedAllergens).map(([allergen, checked]) => (
                      <label key={allergen} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAllergen(allergen)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <span className="capitalize text-gray-700 font-medium">{allergen}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-72 border-3 border-dashed border-green-400 rounded-2xl cursor-pointer hover:border-green-600 hover:bg-green-50 transition-all"
              >
                <div className="flex flex-col items-center justify-center py-8">
                  <svg
                    className="w-12 h-12 mb-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-lg font-semibold text-gray-900">Drag & drop image here</p>
                  <p className="text-sm text-gray-600 mt-1">or click to upload</p>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG, PDF (max 10MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={handleCameraScan}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-md"
                >
                  📸 Camera Scan
                </button>

                <button
                  onClick={handleFileUpload}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-md"
                >
                  📁 File Upload
                </button>

                <button
                  onClick={handlePasteIngredients}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-md"
                >
                  ✍️ Paste Ingredients
                </button>
              </div>

              <input id="file-input" type="file" className="hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const scrollToTeachSection = () => {
    document.getElementById('teach-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToScanSection = () => {
    document.getElementById('scan-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="bg-linear-to-b from-green-50 to-white text-gray-900">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <HeroSection onLearn={scrollToTeachSection} onScan={scrollToScanSection} />
        <TeachingSection />
        <CarouselSection />
        <UploadScanSection />
      </div>
    </div>
  )
}
