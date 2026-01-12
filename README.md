# e-Voke Technologies Portfolio Website

A modern, professional portfolio website for e-Voke Technologies, showcasing web development, geospatial mapping, surveying, AutoCAD drafting, and technical solutions.

Built with **Next.js 14**, **React**, and **Tailwind CSS**.

## Features

- **Public Portfolio**: Showcase projects, services, and company information
- **Admin Dashboard**: Upload and manage projects with authentication
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Professional corporate aesthetic with smooth animations
- **SEO-Friendly**: Optimized for search engines
- **Fast Performance**: Built with Next.js for optimal loading speeds

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (optional):
```
JWT_SECRET=your-secret-key-here
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser:
- Public site: http://localhost:3000
- Admin dashboard: http://localhost:3000/dashboard

## Default Login Credentials

- Username: `admin`
- Password: `admin123`

**⚠️ IMPORTANT: Change the default password in production!**

## Project Structure

```
├── app/
│   ├── api/                # API routes
│   │   ├── projects/       # Project CRUD endpoints
│   │   └── login/          # Authentication endpoint
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── projects/           # Projects showcase
│   ├── tools/              # Technologies page
│   ├── contact/            # Contact page
│   ├── dashboard/          # Admin dashboard
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── lib/
│   ├── data.ts             # Data management utilities
│   └── auth.ts             # Authentication utilities
├── data/                   # JSON data storage
└── public/
    └── uploads/            # Uploaded project images
```

## API Endpoints

### Public
- `GET /api/projects` - Get all projects
- `GET /api/projects/[id]` - Get single project

### Protected (requires authentication)
- `POST /api/login` - Login and get JWT token
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **File System** - JSON-based data storage

## Building for Production

```bash
npm run build
npm start
```

## Development

The project uses:
- Next.js App Router for routing
- Server Components and Client Components
- API Routes for backend functionality
- Tailwind CSS for styling
- TypeScript for type safety
