const features = [
  {
    title: 'Fast Performance',
    description: 'Built with Next.js for optimized speed and SEO. Server-side rendering ensures fast loading times.',
    icon: '⚡',
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive layout that works on all devices. Powered by Tailwind CSS for flexible styling.',
    icon: '📱',
  },
  {
    title: 'TypeScript Safety',
    description: 'Type-safe code with TypeScript to catch errors early and improve developer experience.',
    icon: '🛡️',
  },
  {
    title: 'Easy Deployment',
    description: 'Ready for deployment on Coolify, Vercel, or any Docker environment with minimal configuration.',
    icon: '🚀',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch a modern, high-performance landing page.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}