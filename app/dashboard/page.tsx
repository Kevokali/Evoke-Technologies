'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
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

export default function Dashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    tools: '',
    outcomes: '',
    image: null as File | null,
  })

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
      fetchProjects()
    } else {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const username = form.username.value
    const password = form.password.value

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (response.ok) {
        const { token } = await response.json()
        localStorage.setItem('token', token)
        setIsAuthenticated(true)
        fetchProjects()
      } else {
        alert('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setProjects([])
  }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    if (!token) return

    const form = new FormData()
    form.append('title', formData.title)
    form.append('category', formData.category)
    form.append('description', formData.description)
    form.append('tools', JSON.stringify(formData.tools.split(',').map(t => t.trim()).filter(t => t)))
    form.append('outcomes', formData.outcomes)
    if (formData.image) {
      form.append('image', formData.image)
    }

    try {
      const url = editingProject
        ? `/api/projects/${editingProject.id}`
        : '/api/projects'
      const method = editingProject ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      })

      if (response.ok) {
        await fetchProjects()
        resetForm()
        setShowForm(false)
      } else {
        alert('Failed to save project')
      }
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Failed to save project')
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      tools: project.tools.join(', '),
      outcomes: project.outcomes || '',
      image: null,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        await fetchProjects()
      } else {
        alert('Failed to delete project')
      }
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Failed to delete project')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      tools: '',
      outcomes: '',
      image: null,
    })
    setEditingProject(null)
  }

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card p-8 max-w-md w-full">
          <h1 className="heading-secondary text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-charcoal font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-charcoal font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
          <p className="text-sm text-slate mt-4 text-center">
            Default: admin / admin123
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      <div className="section-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="heading-secondary">Project Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                resetForm()
                setShowForm(!showForm)
              }}
              className="btn-primary"
            >
              {showForm ? 'Cancel' : 'Add New Project'}
            </button>
            <button onClick={handleLogout} className="btn-secondary">
              Logout
            </button>
          </div>
        </div>

        {showForm && (
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-charcoal font-medium mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  >
                    <option value="">Select Category</option>
                    <option value="Web">Web</option>
                    <option value="GIS">GIS</option>
                    <option value="Survey">Survey</option>
                    <option value="CAD">CAD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">
                  Tools (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tools}
                  onChange={(e) =>
                    setFormData({ ...formData, tools: e.target.value })
                  }
                  placeholder="React, Node.js, PostgreSQL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">
                  Outcomes
                </label>
                <textarea
                  rows={3}
                  value={formData.outcomes}
                  onChange={(e) =>
                    setFormData({ ...formData, outcomes: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">
                  Project Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                />
                {editingProject?.image && !formData.image && (
                  <div className="mt-4">
                    <p className="text-sm text-slate mb-2">Current image:</p>
                    <div className="relative w-48 h-32">
                      <Image
                        src={editingProject.image}
                        alt={editingProject.title}
                        fill
                        sizes="200px"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button type="submit" className="btn-primary">
                {editingProject ? 'Update Project' : 'Create Project'}
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card">
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-accent">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-slate text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate text-lg">No projects yet. Add your first project!</p>
          </div>
        )}
      </div>
    </div>
  )
}
