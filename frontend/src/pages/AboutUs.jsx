import React from 'react';
import { Building2, Users, Target, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'Unwavering commitment to pharmaceutical quality and patient safety in every product'
    },
    {
      icon: Shield,
      title: 'Regulatory Excellence',
      description: 'Strict adherence to WHO-GMP standards and Indian pharmaceutical regulations'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'Building long-term relationships based on trust, reliability, and mutual success'
    },
    {
      icon: Target,
      title: 'Operational Excellence',
      description: 'Continuous improvement in manufacturing processes and quality systems'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Sucantis Biotech
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Sucantis Biotech Private Limited is a WHO-GMP certified pharmaceutical third-party manufacturing company 
              dedicated to delivering high-quality pharmaceutical formulations to the Indian domestic market.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#2C3E7C]/10 rounded-lg">
                <Building2 className="text-[#2C3E7C]" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 ml-4">
                Our Company
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Established as a reliable partner in pharmaceutical contract manufacturing, Sucantis Biotech operates 
              state-of-the-art WHO-GMP certified facilities capable of producing a comprehensive range of dosage forms.
            </p>
            <p className="text-gray-600 mb-4">
              Our focus is exclusively on B2B pharmaceutical manufacturing, serving pharmaceutical companies, 
              distributors, and healthcare organizations across India. We manufacture approved formulations under 
              strict regulatory oversight and quality control.
            </p>
            <p className="text-gray-600">
              Similar to established CDMOs in India, we provide scalable, compliant, and dependable manufacturing 
              solutions while maintaining the highest standards of pharmaceutical excellence.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzY3NDI2MDMyfDA&ixlib=rb-4.1.0&q=85"
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-[#3EAE5E]/10 rounded-lg inline-block mb-4">
                    <Icon className="text-[#2C3E7C]" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Manufacturing Focus */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Manufacturing Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#2C3E7C] mb-4">
                Contract Manufacturing Excellence
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Third-party manufacturing for pharmaceutical brands
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Custom branding and packaging solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Flexible batch sizes tailored to client needs
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Comprehensive regulatory documentation support
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#2C3E7C] mb-4">
                Quality & Compliance Philosophy
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    WHO-GMP certified manufacturing facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Rigorous quality control at every production stage
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Full compliance with Indian pharmaceutical regulations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#3EAE5E] mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">
                    Comprehensive batch documentation and traceability
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="bg-gradient-to-r from-[#2C3E7C] to-[#3EAE5E] rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Partner With Sucantis Biotech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-sm">Approved Formulations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">WHO-GMP</div>
              <p className="text-sm">Certified Facilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-sm">Regulatory Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
