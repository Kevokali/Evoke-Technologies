'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Globe, Map, Ruler, PenTool, Laptop, Wrench, Leaf, Shield, Network, Droplets } from 'lucide-react'

export default function Home() {
  // Hardcoded globe image path - place your globe image in public/uploads/globe.png
  const globeImage = '/uploads/globe.png'
  const [imageError, setImageError] = useState(false)
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section with Modern Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        {/* Total Station Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'left center',
          }}
        >
        </div>
        
        {/* Drone Background Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundPosition: 'right center',
            mixBlendMode: 'multiply',
          }}
        >
        </div>
        
        {/* Modern Gradient Overlay with Light Green - More Transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white/50 to-slate-50/45"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgb(34, 197, 94) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-emerald-700">Geospatial Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-charcoal via-deep-blue to-emerald-600 bg-clip-text text-transparent">
                  e-Voke
                </span>
                <br />
                <span className="text-charcoal">Technologies</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate mb-4 font-light">
                Transforming Ideas into Technical Excellence
              </p>
              
              <p className="text-lg text-slate mb-10 leading-relaxed max-w-xl">
                A technology and engineering-focused company specializing in web development, 
                geospatial mapping, surveying, AutoCAD drafting, and innovative technical solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-emerald-600 hover:to-emerald-700"
                >
                  View Projects
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-charcoal border-2 border-emerald-200 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                
                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg">
                        <Map className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal text-lg">Geospatial Mapping</h3>
                        <p className="text-slate text-sm">Advanced GIS Solutions</p>
                      </div>
                    </div>
                    
                    <div 
                      className="h-48 rounded-xl flex items-center justify-center border-2 border-emerald-200 relative overflow-hidden"
                      style={{
                        background: 'radial-gradient(ellipse 70% 70% at center, white 40%, rgba(16, 185, 129, 0.2) 70%, rgba(16, 185, 129, 0.5) 90%, rgba(34, 197, 94, 0.7) 100%)',
                      }}
                    >
                      {!imageError ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <img
                            src={globeImage}
                            alt="Globe"
                            className="object-contain p-6 w-full h-full"
                            onError={() => setImageError(true)}
                            style={{
                              filter: 'sepia(20%) saturate(120%) hue-rotate(60deg) brightness(0.95) contrast(0.9)',
                              mixBlendMode: 'multiply',
                              opacity: 0.85,
                              maskImage: 'radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%)',
                              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 60%, transparent 100%)',
                            }}
                          />
                        </div>
                      ) : (
                        <Globe className="w-24 h-24 text-emerald-600" strokeWidth={1.5} />
                      )}
                      {/* Additional vignette overlay for smooth fade */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse 75% 75% at center, transparent 50%, rgba(16, 185, 129, 0.3) 80%, rgba(16, 185, 129, 0.6) 100%)',
                        }}
                      ></div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-100">
                      <p className="text-sm text-slate text-center font-medium">
                        Innovative Solutions for a Connected World
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-emerald-400/25 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* Geospatial Hub Section */}
      <section className="section-container bg-gradient-to-b from-white via-emerald-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shadow-lg border-2 border-emerald-200">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h2 className="heading-secondary bg-gradient-to-r from-deep-blue via-emerald-600 to-accent bg-clip-text text-transparent mb-4">
              Geospatial Hub
            </h2>
            <p className="text-body max-w-3xl mx-auto text-lg">
              Empowering sustainable solutions through advanced geospatial intelligence and spatial data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Climate Resilience',
                description: 'Monitor environmental changes, track climate patterns, and develop adaptive strategies for sustainable development.',
                Icon: Leaf,
                gradient: 'from-emerald-500 to-green-600',
              },
              {
                title: 'Food Security',
                description: 'Optimize agricultural planning, monitor crop health, and enhance food production through precision mapping.',
                Icon: Droplets,
                gradient: 'from-green-500 to-emerald-600',
              },
              {
                title: 'Network Connectivity',
                description: 'Design and optimize communication networks, infrastructure planning, and connectivity solutions.',
                Icon: Network,
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                title: 'Infrastructure Planning',
                description: 'Strategic urban planning, resource management, and sustainable infrastructure development.',
                Icon: Shield,
                gradient: 'from-emerald-600 to-teal-600',
              },
            ].map((item, index) => {
              const IconComponent = item.Icon
              return (
                <div
                  key={index}
                  className="card p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-t-4 border-emerald-500 group"
                >
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-100">
              <p className="text-slate text-lg leading-relaxed max-w-3xl mx-auto">
                Our geospatial hub integrates cutting-edge technology with environmental intelligence to address 
                critical global challenges. From climate monitoring to food security mapping, we provide comprehensive 
                spatial solutions that drive informed decision-making and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="text-center mb-16">
          <h2 className="heading-secondary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            Comprehensive technical solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Web Design & Development',
              description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
              Icon: Globe,
              bgColor: 'bg-deep-blue/10',
              iconColor: 'text-deep-blue',
            },
            {
              title: 'Geospatial Mapping & GIS',
              description: 'Advanced mapping solutions and geographic information systems for spatial analysis.',
              Icon: Map,
              bgColor: 'bg-accent/10',
              iconColor: 'text-accent',
            },
            {
              title: 'Surveying & Spatial Data',
              description: 'Precise land surveying and spatial data processing services.',
              Icon: Ruler,
              bgColor: 'bg-slate/10',
              iconColor: 'text-slate',
            },
            {
              title: 'AutoCAD & Technical Drawings',
              description: 'Professional CAD drafting and technical documentation services.',
              Icon: PenTool,
              bgColor: 'bg-charcoal/10',
              iconColor: 'text-charcoal',
            },
            {
              title: 'Digital Solutions',
              description: 'Custom software and digital transformation solutions.',
              Icon: Laptop,
              bgColor: 'bg-deep-blue/10',
              iconColor: 'text-deep-blue',
            },
            {
              title: 'Engineering Consulting',
              description: 'Expert technical consulting and solution architecture.',
              Icon: Wrench,
              bgColor: 'bg-accent/10',
              iconColor: 'text-accent',
            },
          ].map((service, index) => {
            const IconComponent = service.Icon
            return (
            <div
              key={index}
              className="card p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-t-4 border-emerald-400 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className={`w-20 h-20 rounded-2xl ${service.bgColor} flex items-center justify-center shadow-lg border-2 border-emerald-100`}>
                  <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate leading-relaxed">{service.description}</p>
            </div>
          )
          })}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="heading-secondary text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-emerald-50 mb-8">
            Let's discuss how we can help bring your technical vision to life.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-emerald-50">
            Contact Us Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
