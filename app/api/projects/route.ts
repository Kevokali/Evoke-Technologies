import { NextRequest, NextResponse } from 'next/server'
import { readProjects, writeProjects, Project } from '@/lib/data'
import { verifyToken } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const projects = readProjects()
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  const user = verifyToken(request)
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string
    const toolsStr = formData.get('tools') as string
    const outcomes = formData.get('outcomes') as string | null
    const file = formData.get('image') as File | null

    if (!title || !category || !description) {
      return NextResponse.json(
        { error: 'Title, category, and description are required' },
        { status: 400 }
      )
    }

    let imagePath: string | null = null
    if (file) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true })
      }

      const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.name)}`
      const filepath = path.join(uploadsDir, filename)
      fs.writeFileSync(filepath, buffer)
      imagePath = `/uploads/${filename}`
    }

    const projects = readProjects()
    const newProject: Project = {
      id: Date.now().toString(),
      title,
      category,
      description,
      tools: toolsStr ? JSON.parse(toolsStr) : [],
      outcomes: outcomes || undefined,
      image: imagePath,
      createdAt: new Date().toISOString(),
    }

    projects.push(newProject)
    writeProjects(projects)

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
