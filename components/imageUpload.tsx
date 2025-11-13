'use client'

import React, { useState } from 'react'

type HistoryItem = {
  id: string
  product: string
  score: number
  date: string
}

const sampleFeatured = {
  emoji: '🚫',
  name: 'Sodium Lauryl Sulfate',
  desc: 'A harsh surfactant found in many shampoos — can be irritating for sensitive skin.'
}

interface ImageUploadProps {
  scanSectionRef?: React.RefObject<HTMLDivElement>
}

const ImageUpload: React.FC<ImageUploadProps> = ({ scanSectionRef }) => {
  const [mode, setMode] = useState<'camera' | 'upload' | 'paste'>('upload')
  const [filters, setFilters] = useState<Record<string, boolean>>({
    allergenFree: false,
    vegan: false,
    clean: false,
    ecoFriendly: false,
  })
  const [history] = useState<HistoryItem[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleFilter = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div id="scan-section" ref={scanSectionRef} className="w-full max-w-6xl px-6 py-12 mx-auto">
      {/* Tabs with active state */}
      <div className="flex space-x-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setMode('camera')}
          className={`pb-3 px-2 font-medium text-sm transition-all border-b-2 ${
            mode === 'camera'
              ? 'border-green-500 text-green-700'
              : 'border-transparent text-gray-600 hover:text-green-600'
          }`}
        >
          📸 Camera Scan
        </button>

        <button
          onClick={() => setMode('upload')}
          className={`pb-3 px-2 font-medium text-sm transition-all border-b-2 ${
            mode === 'upload'
              ? 'border-green-500 text-green-700'
              : 'border-transparent text-gray-600 hover:text-green-600'
          }`}
        >
          🧾 Upload Image
        </button>

        <button
          onClick={() => setMode('paste')}
          className={`pb-3 px-2 font-medium text-sm transition-all border-b-2 ${
            mode === 'paste'
              ? 'border-green-500 text-green-700'
              : 'border-transparent text-gray-600 hover:text-green-600'
          }`}
        >
          ✍️ Paste Ingredients
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => toggleFilter('allergenFree')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
            filters.allergenFree ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'
          }`}
        >
          🚫 Allergen-Free
        </button>

        <button
          onClick={() => toggleFilter('vegan')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
            filters.vegan ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'
          }`}
        >
          🌿 Vegan / Animal-Free
        </button>

        <button
          onClick={() => toggleFilter('clean')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
            filters.clean ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'
          }`}
        >
          🧴 Clean / Non-Toxic
        </button>

        <button
          onClick={() => toggleFilter('ecoFriendly')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
            filters.ecoFriendly ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'
          }`}
        >
          ♻️ Sustainable / Eco-Friendly
        </button>
      </div>

      {/* Upload + History layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Upload Zone */}
        <div className="flex-1">
          <div className="rounded-2xl shadow-md bg-white/80 backdrop-blur p-6 mb-6">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-500 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-4 text-green-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-black">
                  <span className="font-semibold">
                    {mode === 'paste' ? 'Paste ingredients' : 'Click to upload'}
                  </span>{' '}
                  {mode === 'camera' ? 'or open camera' : 'or drag and drop'}
                </p>
                <p className="text-xs text-black">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Right: History Panel */}
        <div className="w-full lg:w-80">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-green-900">History</h4>
            <button
              onClick={() => setSidebarOpen((s) => !s)}
              className="text-sm text-green-700 hover:text-green-800"
            >
              {sidebarOpen ? 'Hide' : 'Top flagged'}
            </button>
          </div>

          <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <div className="h-64 overflow-auto p-4 bg-white">
              {history.length === 0 ? (
                <div className="text-sm text-gray-600">
                  No previous scans yet — try uploading a product!
                </div>
              ) : (
                <ul className="space-y-3">
                  {history.map((h) => (
                    <li key={h.id} className="flex items-center justify-between border-b pb-2">
                      <div>
                        <div className="font-medium text-gray-900">{h.product}</div>
                        <div className="text-xs text-gray-500">{h.date}</div>
                      </div>
                      <div className="text-sm font-semibold text-green-700">{h.score}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Ingredient Card */}
      <div className="mt-6">
        <div className="rounded-lg shadow-md border p-4 transition-all bg-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-3xl mb-2">{sampleFeatured.emoji}</div>
              <h5 className="font-bold text-green-900">{sampleFeatured.name}</h5>
              <p className="text-sm text-gray-700 mt-2">{sampleFeatured.desc}</p>
            </div>
            <button
              onClick={() => setSidebarOpen((s) => !s)}
              className="text-sm text-green-700 hover:text-green-800 whitespace-nowrap ml-4"
            >
              {sidebarOpen ? 'Close' : 'Learn'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
