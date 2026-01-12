import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export function verifyToken(request: NextRequest): { username: string } | null {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader) return null

    const token = authHeader.split(' ')[1]
    if (!token) return null

    const decoded = jwt.verify(token, JWT_SECRET) as { username: string }
    return decoded
  } catch (error) {
    return null
  }
}
