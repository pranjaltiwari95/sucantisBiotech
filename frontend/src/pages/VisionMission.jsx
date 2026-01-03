import React from 'react';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vision & Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by our commitment to pharmaceutical excellence, quality, and reliability
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 bg-gradient-to-br from-[#2C3E7C] to-[#3EAE5E] text-white flex items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Eye size={48} className="mr-4" />
                    <h2 className="text-4xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-xl leading-relaxed">
                    To be a trusted pharmaceutical manufacturing partner delivering quality, compliance, 
                    and reliability at scale.
                  </p>
                </div>
              </div>
              <div className="p-10 flex items-center">
                <div>
                  <p className="text-gray-700 mb-4">
                    We envision Sucantis Biotech as a preferred choice for pharmaceutical companies seeking a 
                    dependable third-party manufacturing partner in India.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our vision extends beyond mere production to establishing long-term partnerships built on 
                    trust, transparency, and consistent delivery of high-quality pharmaceutical products.
                  </p>
                  <p className="text-gray-700">
                    By maintaining WHO-GMP standards and regulatory compliance, we aim to contribute to accessible 
                    and affordable healthcare solutions across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <div className="flex items-center mb-8 justify-center">
              <Target size={48} className="text-[#2C3E7C] mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#3EAE5E]">
                <div className="flex items-start">
                  <Award className="text-[#2C3E7C] mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Maintain the Highest GMP Standards
                    </h3>
                    <p className="text-gray-600">
                      Ensure every product manufactured meets or exceeds WHO-GMP requirements through 
                      rigorous quality control and validation processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#3EAE5E]">
                <div className="flex items-start">
                  <Award className="text-[#2C3E7C] mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Deliver Consistent and Compliant Formulations
                    </h3>
                    <p className="text-gray-600">
                      Provide reliable pharmaceutical manufacturing services with complete regulatory 
                      compliance and batch-to-batch consistency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#3EAE5E]">
                <div className="flex items-start">
                  <Award className="text-[#2C3E7C] mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Support Partners with Dependable Manufacturing
                    </h3>
                    <p className="text-gray-600">
                      Build lasting partnerships by delivering on commitments, maintaining transparent 
                      communication, and providing flexible manufacturing solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#3EAE5E]">
                <div className="flex items-start">
                  <TrendingUp className="text-[#2C3E7C] mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Continuously Strengthen Quality Systems
                    </h3>
                    <p className="text-gray-600">
                      Invest in technology, training, and process improvements to enhance manufacturing 
                      capabilities and quality assurance systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Quality Without Compromise
              </h3>
              <p className="text-sm text-gray-600">
                Every decision, process, and product reflects our unwavering commitment to pharmaceutical quality
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Regulatory Integrity
              </h3>
              <p className="text-sm text-gray-600">
                Full compliance with all applicable pharmaceutical regulations and ethical manufacturing practices
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-3 text-[#2C3E7C]">
                Partnership Excellence
              </h3>
              <p className="text-sm text-gray-600">
                Building mutually beneficial relationships based on trust, transparency, and consistent performance
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#2C3E7C] to-[#3EAE5E] rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Our Mission
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Partner with Sucantis Biotech for reliable, compliant, and quality pharmaceutical manufacturing solutions
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#2C3E7C] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
