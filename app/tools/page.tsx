import { Laptop, Map, PenTool, Ruler, Database, Cloud } from 'lucide-react'

export default function Tools() {
  const toolCategories = [
    {
      category: 'Web Development',
      tools: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'Git',
        'REST APIs',
      ],
      Icon: Laptop,
      bgColor: 'bg-deep-blue/10',
      iconColor: 'text-deep-blue',
    },
    {
      category: 'Geospatial & GIS',
      tools: [
        'ArcGIS',
        'QGIS',
        'PostGIS',
        'Leaflet',
        'Mapbox',
        'OpenLayers',
        'GDAL',
        'GeoServer',
      ],
      Icon: Map,
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      category: 'CAD & Design',
      tools: [
        'AutoCAD',
        'AutoCAD Civil 3D',
        'Revit',
        'SketchUp',
        'SolidWorks',
        'Adobe Creative Suite',
      ],
      Icon: PenTool,
      bgColor: 'bg-charcoal/10',
      iconColor: 'text-charcoal',
    },
    {
      category: 'Surveying & Data',
      tools: [
        'Total Station',
        'GPS/GNSS',
        'LiDAR',
        'Drones/UAV',
        'Survey Software',
        'Data Processing Tools',
      ],
      Icon: Ruler,
      bgColor: 'bg-slate/10',
      iconColor: 'text-slate',
    },
    {
      category: 'Databases & Storage',
      tools: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'SQLite',
        'Redis',
        'File Storage Systems',
      ],
      Icon: Database,
      bgColor: 'bg-deep-blue/10',
      iconColor: 'text-deep-blue',
    },
    {
      category: 'Cloud & Deployment',
      tools: [
        'AWS',
        'Azure',
        'Docker',
        'CI/CD',
        'Vercel',
        'Netlify',
      ],
      Icon: Cloud,
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
    },
  ]

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <section className="section-container">
        <div className="text-center mb-16">
          <h1 className="heading-primary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
            Tools & Technologies
          </h1>
          <p className="text-body max-w-2xl mx-auto mt-4 text-lg">
            Our comprehensive technology stack enables us to deliver cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {toolCategories.map((category, index) => {
            const IconComponent = category.Icon
            return (
            <div
              key={index}
              className="card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-t-4 border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                <div className={`w-20 h-20 rounded-2xl ${category.bgColor} flex items-center justify-center shadow-lg border-2 border-gray-100`}>
                  <IconComponent className={`w-10 h-10 ${category.iconColor}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-100 to-gray-50 text-charcoal px-4 py-2 rounded-lg text-sm font-semibold hover:from-accent hover:to-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 cursor-default transform hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-slate to-charcoal text-white max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Always Evolving</h2>
            <p className="text-gray-200">
              We continuously update our technology stack to stay at the forefront of 
              innovation and deliver the best solutions for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
