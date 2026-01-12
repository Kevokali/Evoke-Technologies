'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string | null
  tools: string[]
  outcomes?: string
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchProject(params.id as string)
    }
  }, [params.id])

  const fetchProject = async (id: string) => {
    try {
      const response = await fetch(`/api/projects/${id}`)
      if (response.ok) {
        const data = await response.json()
        setProject(data)
      } else {
        router.push('/projects')
      }
    } catch (error) {
      console.error('Error fetching project:', error)
      router.push('/projects')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-slate">Loading project...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="section-container bg-white">
        <Link
          href="/projects"
          className="inline-flex items-center text-accent hover:text-blue-600 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          {project.image && (
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="mb-6">
            <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="heading-primary text-3xl md:text-4xl mb-4">
              {project.title}
            </h1>
            <p className="text-body text-lg">{project.description}</p>
          </div>

          {project.tools && project.tools.length > 0 && (
            <div className="card p-6 mb-8">
              <h2 className="text-xl font-semibold text-charcoal mb-4">
                Tools & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-charcoal px-4 py-2 rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.outcomes && (
            <div className="card p-6 bg-deep-blue text-white">
              <h2 className="text-xl font-semibold mb-4">Outcomes</h2>
              <p className="text-gray-200 leading-relaxed">{project.outcomes}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
