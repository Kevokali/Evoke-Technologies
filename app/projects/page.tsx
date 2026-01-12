'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string | null
  tools: string[]
  outcomes?: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['All', 'Web', 'GIS', 'Survey', 'CAD', 'Other']
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-slate">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <section className="section-container">
        <div className="text-center mb-16">
          <h1 className="heading-primary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-body max-w-2xl mx-auto mt-4 text-lg">
            Showcase of our technical expertise and innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-xl'
                  : 'bg-white text-slate hover:bg-gray-100 shadow-md hover:shadow-lg border-2 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate text-lg mb-4">No projects found in this category.</p>
            <p className="text-slate">Check back soon for new projects!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-t-4 border-accent overflow-hidden"
              >
                {project.image && (
                  <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-accent to-blue-600 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate line-clamp-3 mb-4 leading-relaxed">{project.description}</p>
                  {project.tools && project.tools.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gradient-to-r from-gray-100 to-gray-50 text-charcoal px-3 py-1 rounded-full font-semibold border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-xs text-slate font-semibold px-2 py-1">+{project.tools.length - 3} more</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
