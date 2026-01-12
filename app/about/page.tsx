import { Laptop, Map } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-primary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
              About e-Voke Technologies
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="card p-8 md:p-10 mb-8 bg-gradient-to-br from-deep-blue/5 via-white to-accent/5 border-l-4 border-accent shadow-xl">
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Engineering Digital & Geospatial Solutions
              </h2>
              <p className="text-body mb-6 text-lg leading-relaxed">
                e-Voke Technologies is a technology and engineering-focused company that combines 
                technical expertise with innovative solutions. We specialize in bridging the gap 
                between digital technology and geospatial engineering, delivering comprehensive 
                solutions that meet the highest standards of precision and quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-t-4 border-accent">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-deep-blue/10 flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <Laptop className="w-10 h-10 text-deep-blue" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Technical Excellence
                </h3>
                <p className="text-body leading-relaxed">
                  Our team brings deep technical knowledge across web development, geospatial 
                  systems, and engineering disciplines. We stay at the forefront of technology 
                  to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="card p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-t-4 border-deep-blue">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <Map className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Geospatial Expertise
                </h3>
                <p className="text-body leading-relaxed">
                  With specialized expertise in GIS, surveying, and spatial data processing, 
                  we provide accurate and reliable geospatial solutions for a wide range of 
                  applications and industries.
                </p>
              </div>
            </div>

            <div className="card p-10 bg-gradient-to-br from-deep-blue via-charcoal to-slate text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Our Approach</h3>
              <p className="text-gray-100 leading-relaxed mb-4 text-lg">
                At e-Voke Technologies, we take a solution-driven approach to every project. 
                We understand that each client has unique requirements, and we work closely 
                with you to develop tailored solutions that address your specific challenges.
              </p>
              <p className="text-gray-100 leading-relaxed text-lg">
                Our commitment to precision, innovation, and professional excellence ensures 
                that every project we undertake meets the highest standards of quality and 
                delivers measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
