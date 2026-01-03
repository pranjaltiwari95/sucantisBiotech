import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (frontend only)
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      toast.success('Thank you for your inquiry! We will contact you soon.');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your pharmaceutical manufacturing requirements. 
            We're here to answer your questions and explore partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-[#3EAE5E]/10 rounded-lg">
                      <MapPin className="text-[#2C3E7C]" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-sm text-gray-600">
                      Sucantis Biotech Pvt. Ltd.<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-[#3EAE5E]/10 rounded-lg">
                      <Phone className="text-[#2C3E7C]" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-sm text-gray-600">
                      +91 XXXX XXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-[#3EAE5E]/10 rounded-lg">
                      <Mail className="text-[#2C3E7C]" size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">
                      info@sucantisbiotech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C3E7C] to-[#3EAE5E] rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request Manufacturing Details
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto mb-4 text-[#3EAE5E]" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your inquiry has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent resize-none"
                      placeholder="Please provide details about your manufacturing requirements, including product types, quantities, and any specific compliance needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3EAE5E] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#359650] transition-colors flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#2C3E7C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2C3E7C] font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Inquiry</h3>
              <p className="text-sm text-gray-600">
                Fill out the contact form with your manufacturing requirements
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#2C3E7C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2C3E7C] font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Response</h3>
              <p className="text-sm text-gray-600">
                Our team will review and respond within 24-48 business hours
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#2C3E7C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#2C3E7C] font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Discussion</h3>
              <p className="text-sm text-gray-600">
                Schedule a call or meeting to discuss your specific needs in detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
