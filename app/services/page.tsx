import { Globe, Map, Ruler, PenTool, Laptop } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'We create modern, responsive websites and web applications using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that are both functional and visually appealing.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'SEO-Friendly',
        'User Experience Focus',
      ],
      Icon: Globe,
      bgColor: 'bg-deep-blue/10',
      iconColor: 'text-deep-blue',
    },
    {
      title: 'Geospatial Mapping & GIS',
      description: 'Advanced geographic information systems and mapping solutions for spatial analysis, data visualization, and location-based services.',
      features: [
        'GIS Development',
        'Interactive Maps',
        'Spatial Analysis',
        'Data Visualization',
        'Custom Mapping Solutions',
      ],
      Icon: Map,
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      title: 'Surveying & Spatial Data Processing',
      description: 'Professional land surveying services and spatial data processing with precision and accuracy for various applications.',
      features: [
        'Land Surveying',
        'Data Collection',
        'Spatial Analysis',
        'Quality Control',
        'Report Generation',
      ],
      Icon: Ruler,
      bgColor: 'bg-slate/10',
      iconColor: 'text-slate',
    },
    {
      title: 'AutoCAD & Technical Drawings',
      description: 'Expert CAD drafting and technical documentation services for engineering, architecture, and construction projects.',
      features: [
        '2D/3D Drafting',
        'Technical Documentation',
        'Blueprint Creation',
        'Design Revisions',
        'Standards Compliance',
      ],
      Icon: PenTool,
      bgColor: 'bg-charcoal/10',
      iconColor: 'text-charcoal',
    },
    {
      title: 'Digital & Engineering Solutions',
      description: 'Comprehensive digital transformation and engineering solutions tailored to your business needs.',
      features: [
        'Custom Software',
        'System Integration',
        'Process Automation',
        'Technical Consulting',
        'Solution Architecture',
      ],
      Icon: Laptop,
      bgColor: 'bg-deep-blue/10',
      iconColor: 'text-deep-blue',
    },
  ]

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <section className="section-container">
        <div className="text-center mb-16">
          <h1 className="heading-primary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-body max-w-2xl mx-auto mt-4 text-lg">
            Comprehensive technical solutions designed to meet your specific needs
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.Icon
            return (
            <div
              key={index}
              className="card p-8 md:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-l-4 border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="transform hover:scale-110 transition-transform duration-300 inline-block">
                    <div className={`w-24 h-24 rounded-2xl ${service.bgColor} flex items-center justify-center shadow-lg border-2 border-gray-100`}>
                      <IconComponent className={`w-12 h-12 ${service.iconColor}`} />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-charcoal mb-4 bg-gradient-to-r from-charcoal to-deep-blue bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="text-body mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate group">
                        <div className="bg-accent/10 p-1 rounded-full mr-3 group-hover:bg-accent transition-colors">
                          <svg
                            className="w-4 h-4 text-accent group-hover:text-white transition-colors"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-deep-blue to-charcoal text-white max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-200 mb-6">
              Let's discuss how our services can help achieve your goals
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-deep-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
