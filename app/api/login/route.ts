import { NextRequest, NextResponse } from 'next/server'
import { readUsers } from '@/lib/data'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    const users = readUsers()
    const user = users.find((u) => u.username === username)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // For default admin user, check if password is 'admin123'
    if (user.username === 'admin' && password === 'admin123') {
      const token = jwt.sign({ username: user.username }, JWT_SECRET, {
        expiresIn: '24h',
      })
      return NextResponse.json({ token })
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, {
      expiresIn: '24h',
    })

    return NextResponse.json({ token })
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json(
      { error: 'Failed to authenticate' },
      { status: 500 }
    )
  }
}
