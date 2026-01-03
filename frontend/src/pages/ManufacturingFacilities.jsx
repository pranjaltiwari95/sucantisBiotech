import React from 'react';
import { MapPin, Factory, Award } from 'lucide-react';

const ManufacturingFacilities = () => {
  const facilities = [
    {
      name: 'Oral Solid Dosage Facility',
      location: 'Manufacturing Unit - India',
      image: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJvb20lMjBmYWNpbGl0eXxlbnwwfHx8fDE3Njc0MjYwMzd8MA&ixlib=rb-4.1.0&q=85',
      dosageForms: ['Tablets (Film-coated, Dispersible, Sustained Release)', 'Capsules (Hard Gelatin)'],
      compliance: 'WHO-GMP Certified',
      description: 'State-of-the-art facility equipped with modern compression and coating machinery for high-volume tablet and capsule production.'
    },
    {
      name: 'Oral Liquid & Dry Syrup Facility',
      location: 'Manufacturing Unit - India',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwyfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzY3NDI2MDMyfDA&ixlib=rb-4.1.0&q=85',
      dosageForms: ['Oral Syrups', 'Oral Suspensions', 'Dry Syrups', 'Drops'],
      compliance: 'WHO-GMP Certified',
      description: 'Dedicated liquid manufacturing unit with automated filling lines and quality control systems for consistent product quality.'
    },
    {
      name: 'Sterile / Injectable Facility',
      location: 'Manufacturing Unit - India',
      image: 'https://images.unsplash.com/photo-1748350985297-bfca7994fc1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjbGVhbiUyMHJvb20lMjBmYWNpbGl0eXxlbnwwfHx8fDE3Njc0MjYwMzd8MA&ixlib=rb-4.1.0&q=85',
      dosageForms: ['Injectables', 'Vials', 'Ampoules'],
      compliance: 'WHO-GMP Certified',
      description: 'ISO Class 7 cleanroom facility with advanced sterilization and aseptic filling technology for sterile product manufacturing.'
    },
    {
      name: 'Topical Preparations Facility',
      location: 'Manufacturing Unit - India',
      image: 'https://images.unsplash.com/photo-1748002388689-c62b45d5c28b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxjbGVhbiUyMHJvb20lMjBmYWNpbGl0eXxlbnwwfHx8fDE3Njc0MjYwMzd8MA&ixlib=rb-4.1.0&q=85',
      dosageForms: ['Creams', 'Ointments', 'Gels', 'Lotions'],
      compliance: 'WHO-GMP Certified',
      description: 'Specialized manufacturing unit with controlled environment for semi-solid dosage forms with precision mixing and filling equipment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manufacturing Facilities
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our WHO-GMP certified manufacturing facilities are equipped with state-of-the-art technology 
            and operated by experienced professionals committed to delivering pharmaceutical excellence.
          </p>
        </div>

        {/* Facilities Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {facility.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-2 text-[#3EAE5E]" />
                      <span className="text-sm">{facility.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-[#3EAE5E]/10 px-3 py-1 rounded-full">
                    <Award size={16} className="mr-1 text-[#2C3E7C]" />
                    <span className="text-xs font-semibold text-[#2C3E7C]">
                      {facility.compliance}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {facility.description}
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-start">
                    <Factory size={18} className="mr-2 mt-1 text-[#2C3E7C] flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Dosage Forms Manufactured:
                      </h4>
                      <ul className="space-y-1">
                        {facility.dosageForms.map((form, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            • {form}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Quality & Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="mx-auto mb-4 text-[#2C3E7C]" size={40} />
              <h3 className="font-semibold text-lg mb-2">WHO-GMP Certified</h3>
              <p className="text-sm text-gray-600">
                All facilities meet World Health Organization Good Manufacturing Practice standards
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Factory className="mx-auto mb-4 text-[#2C3E7C]" size={40} />
              <h3 className="font-semibold text-lg mb-2">Modern Infrastructure</h3>
              <p className="text-sm text-gray-600">
                Advanced machinery and automated systems for consistent product quality
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="mx-auto mb-4 text-[#2C3E7C]" size={40} />
              <h3 className="font-semibold text-lg mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-gray-600">
                Comprehensive documentation and adherence to domestic and international standards
              </p>
            </div>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="mt-12 bg-gradient-to-r from-[#2C3E7C] to-[#3EAE5E] rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Manufacturing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Third-Party Manufacturing</h3>
              <ul className="space-y-2 text-sm text-gray-100">
                <li>• Flexible batch sizes tailored to client requirements</li>
                <li>• Custom branding and packaging solutions</li>
                <li>• Dedicated production lines for contract manufacturing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Quality Assurance</h3>
              <ul className="space-y-2 text-sm text-gray-100">
                <li>• In-process quality checks at every stage</li>
                <li>• State-of-the-art analytical laboratory</li>
                <li>• Comprehensive documentation and batch records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingFacilities;
