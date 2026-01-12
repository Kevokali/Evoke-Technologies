import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

const globeFile = path.join(process.cwd(), 'data', 'globe.json')

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Get globe image
export async function GET() {
  try {
    if (fs.existsSync(globeFile)) {
      const data = fs.readFileSync(globeFile, 'utf8')
      return NextResponse.json(JSON.parse(data))
    }
    return NextResponse.json({ image: null })
  } catch (error) {
    return NextResponse.json({ image: null })
  }
}

// Upload globe image
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
    const file = formData.get('image') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    // Delete old globe image if exists
    if (fs.existsSync(globeFile)) {
      const oldData = JSON.parse(fs.readFileSync(globeFile, 'utf8'))
      if (oldData.image) {
        const oldImagePath = oldData.image.startsWith('/')
          ? oldData.image.slice(1)
          : oldData.image
        const fullOldPath = path.join(process.cwd(), 'public', oldImagePath)
        if (fs.existsSync(fullOldPath)) {
          fs.unlinkSync(fullOldPath)
        }
      }
    }

    // Save new image
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    const filename = `globe-${Date.now()}${path.extname(file.name)}`
    const filepath = path.join(uploadsDir, filename)
    fs.writeFileSync(filepath, buffer)
    
    const imagePath = `/uploads/${filename}`
    
    // Save globe data
    fs.writeFileSync(globeFile, JSON.stringify({ image: imagePath }, null, 2))

    return NextResponse.json({ image: imagePath })
  } catch (error) {
    console.error('Error uploading globe:', error)
    return NextResponse.json(
      { error: 'Failed to upload globe image' },
      { status: 500 }
    )
  }
}
