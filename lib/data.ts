import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const projectsFile = path.join(dataDir, 'projects.json')
const usersFile = path.join(dataDir, 'users.json')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string | null
  tools: string[]
  outcomes?: string
  createdAt?: string
  updatedAt?: string
}

export interface User {
  username: string
  password: string
}

export function readProjects(): Project[] {
  try {
    if (!fs.existsSync(projectsFile)) {
      fs.writeFileSync(projectsFile, JSON.stringify([], null, 2))
      return []
    }
    const data = fs.readFileSync(projectsFile, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading projects:', error)
    return []
  }
}

export function writeProjects(projects: Project[]): void {
  try {
    fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2))
  } catch (error) {
    console.error('Error writing projects:', error)
    throw error
  }
}

export function readUsers(): User[] {
  try {
    if (!fs.existsSync(usersFile)) {
      // Default user will be handled by login route with special case
      const defaultUser: User = {
        username: 'admin',
        password: 'default', // This is a placeholder, login route handles admin123 specially
      }
      fs.writeFileSync(usersFile, JSON.stringify([defaultUser], null, 2))
      return [defaultUser]
    }
    const data = fs.readFileSync(usersFile, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading users:', error)
    return []
  }
}
