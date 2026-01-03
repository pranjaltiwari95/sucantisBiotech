import React from 'react';
import { Award, FileCheck, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'WHO-GMP Certificate',
      authority: 'World Health Organization',
      description: 'Certification demonstrating compliance with Good Manufacturing Practice standards as per WHO guidelines',
      icon: Award,
      validity: 'Current'
    },
    {
      title: 'Drug Manufacturing License',
      authority: 'State FDA - Drug Control Administration',
      description: 'License for manufacturing pharmaceutical formulations across multiple dosage forms',
      icon: FileCheck,
      validity: 'Current'
    },
    {
      title: 'State FDA Approvals',
      authority: 'State Food & Drug Administration',
      description: 'Regulatory approvals for domestic market distribution',
      icon: Shield,
      validity: 'Current'
    },
    {
      title: 'Export Permissions',
      authority: 'Regulatory Authorities',
      description: 'Export certifications for international market access',
      icon: Award,
      validity: 'As applicable'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Compliance
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our commitment to quality is validated through comprehensive certifications and regulatory approvals. 
            We maintain the highest standards of pharmaceutical manufacturing excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-8 border-t-4 border-[#3EAE5E]"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-[#2C3E7C]/10 rounded-lg">
                      <Icon className="text-[#2C3E7C]" size={32} />
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#3EAE5E] font-semibold mb-3">
                      {cert.authority}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-gray-500">Validity:</span>
                      <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        {cert.validity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHO-GMP Highlight */}
        <div className="bg-gradient-to-r from-[#2C3E7C] to-[#3EAE5E] rounded-lg p-10 text-white mb-12">
          <div className="text-center">
            <Award className="mx-auto mb-4" size={56} />
            <h2 className="text-3xl font-bold mb-4">
              WHO-GMP Certified Facilities
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our manufacturing facilities adhere to the World Health Organization's Good Manufacturing Practice guidelines, 
              ensuring that every product meets international quality standards. This certification reflects our dedication 
              to pharmaceutical excellence and patient safety.
            </p>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Quality Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Regulatory Compliance
              </h3>
              <p className="text-sm text-gray-600">
                Full adherence to Indian pharmaceutical regulations and WHO-GMP standards in all manufacturing operations
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Quality Control
              </h3>
              <p className="text-sm text-gray-600">
                Rigorous testing protocols and in-house analytical laboratory ensuring consistent product quality
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Documentation
              </h3>
              <p className="text-sm text-gray-600">
                Comprehensive batch records, standard operating procedures, and complete traceability systems
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Equipment Calibration
              </h3>
              <p className="text-sm text-gray-600">
                Regular calibration and validation of all manufacturing and testing equipment to maintain accuracy
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Personnel Training
              </h3>
              <p className="text-sm text-gray-600">
                Continuous training programs for all staff on GMP principles, safety protocols, and quality systems
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Environmental Monitoring
              </h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring of manufacturing environments to maintain sterile and controlled conditions
              </p>
            </div>
          </div>
        </div>

        {/* Certification Note */}
        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800 text-center">
            <strong>Note:</strong> Copies of all certifications and licenses are available upon request for business verification purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
