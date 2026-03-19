'use client'

import { useState } from 'react'

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of developers who have launched their projects with our template.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-2xl max-w-md mx-auto">
            <p className="text-lg font-semibold">Thank you for signing up!</p>
            <p>We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg text-gray-900"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition duration-300 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Sign Up Free'}
              </button>
            </div>
            {error && (
              <p className="mt-4 text-red-200">{error}</p>
            )}
          </form>
        )}

        <p className="mt-10 text-sm opacity-90">
          No credit card required. Get started in seconds.
        </p>
      </div>
    </section>
  )
}