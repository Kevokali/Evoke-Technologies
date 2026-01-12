'use client'

import { useState } from 'react'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const email = 'engvoke@gmail.com'
  const phone = '0724318328'
  const whatsappNumber = '27724318328' // South Africa format

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    // Create email body
    const subject = encodeURIComponent(`Contact Form: ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    
    setSending(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    }, 5000)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello e-Voke Technologies,\n\nI'm interested in your services.\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage: ${formData.message || 'I would like to know more about your services.'}`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:+${phone}`
  }

  const handleEmail = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="pt-16 md:pt-20 bg-gradient-to-b from-gray-50 to-white">
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-primary bg-gradient-to-r from-deep-blue to-accent bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-body max-w-2xl mx-auto mt-4 text-lg">
              Let's discuss how we can help bring your technical vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Quick Contact Cards */}
            <button
              onClick={handleWhatsApp}
              className="card p-6 bg-gradient-to-br from-charcoal to-slate text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-300 text-sm">Chat with us instantly</p>
            </button>

            <button
              onClick={handleEmail}
              className="card p-6 bg-gradient-to-br from-deep-blue to-charcoal text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">{email}</p>
            </button>

            <button
              onClick={handleCall}
              className="card p-6 bg-gradient-to-br from-slate to-deep-blue text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm">{phone}</p>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="card p-8 bg-gradient-to-br from-deep-blue via-charcoal to-slate text-white mb-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-start group hover:translate-x-2 transition-transform"
                  >
                    <div className="bg-white/20 p-3 rounded-lg mr-4 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:+${phone}`}
                    className="flex items-start group hover:translate-x-2 transition-transform"
                  >
                    <div className="bg-white/20 p-3 rounded-lg mr-4 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{phone}</p>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start group hover:translate-x-2 transition-transform"
                  >
                    <div className="bg-white/20 p-3 rounded-lg mr-4 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card p-6 bg-white shadow-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate">
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Monday - Friday:</span>
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">Saturday:</span>
                    By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="card p-8 shadow-xl bg-white">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg text-green-800 animate-fade-in">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Your email client will open. We'll respond within 24 hours!</span>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all hover:border-gray-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all hover:border-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-charcoal font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all hover:border-gray-300"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-charcoal font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all hover:border-gray-300"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none hover:border-gray-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send via Email
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
