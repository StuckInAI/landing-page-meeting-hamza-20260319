export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Build Your Dream Website with Next.js
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          A modern, responsive landing page template built with Next.js 14, TypeScript, and Tailwind CSS. Deploy in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="btn-primary inline-block text-center"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="btn-secondary inline-block text-center"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern website dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}