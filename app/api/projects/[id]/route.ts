import { NextRequest, NextResponse } from 'next/server'
import { readProjects, writeProjects, Project } from '@/lib/data'
import { verifyToken } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const projects = readProjects()
    const project = projects.find((p) => p.id === params.id)
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = verifyToken(request)
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const projects = readProjects()
    const projectIndex = projects.findIndex((p) => p.id === params.id)

    if (projectIndex === -1) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    const formData = await request.formData()
    const title = formData.get('title') as string | null
    const category = formData.get('category') as string | null
    const description = formData.get('description') as string | null
    const toolsStr = formData.get('tools') as string | null
    const outcomes = formData.get('outcomes') as string | null
    const file = formData.get('image') as File | null

    const updatedProject: Project = {
      ...projects[projectIndex],
      title: title || projects[projectIndex].title,
      category: category || projects[projectIndex].category,
      description: description || projects[projectIndex].description,
      tools: toolsStr ? JSON.parse(toolsStr) : projects[projectIndex].tools,
      outcomes: outcomes || projects[projectIndex].outcomes,
      updatedAt: new Date().toISOString(),
    }

    if (file) {
      // Delete old image if exists
      if (projects[projectIndex].image) {
        const imagePath = projects[projectIndex].image!.startsWith('/')
          ? projects[projectIndex].image!.slice(1)
          : projects[projectIndex].image!
        const oldImagePath = path.join(process.cwd(), 'public', imagePath)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }

      // Save new image
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true })
      }

      const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.name)}`
      const filepath = path.join(uploadsDir, filename)
      fs.writeFileSync(filepath, buffer)
      updatedProject.image = `/uploads/${filename}`
    }

    projects[projectIndex] = updatedProject
    writeProjects(projects)

    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = verifyToken(request)
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const projects = readProjects()
    const projectIndex = projects.findIndex((p) => p.id === params.id)

    if (projectIndex === -1) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    // Delete associated image
    if (projects[projectIndex].image) {
      const imagePath = projects[projectIndex].image!.startsWith('/')
        ? projects[projectIndex].image!.slice(1)
        : projects[projectIndex].image!
      const fullImagePath = path.join(process.cwd(), 'public', imagePath)
      if (fs.existsSync(fullImagePath)) {
        fs.unlinkSync(fullImagePath)
      }
    }

    projects.splice(projectIndex, 1)
    writeProjects(projects)

    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Error deleting project:', error)
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    )
  }
}
