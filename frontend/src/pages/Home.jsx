import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Factory, FlaskConical, Shield, Users, Package } from 'lucide-react';

const Home = () => {
  const capabilities = [
    {
      icon: Factory,
      title: 'Third-Party Pharmaceutical Manufacturing',
      description: 'State-of-the-art facilities for comprehensive pharmaceutical production'
    },
    {
      icon: Package,
      title: 'Multiple Dosage Forms',
      description: 'Tablets, Capsules, Oral Liquids, Powders, Topicals, and Sterile Preparations'
    },
    {
      icon: Shield,
      title: 'Domestic & Export-ready Approvals',
      description: 'WHO-GMP certified with comprehensive regulatory compliance'
    },
    {
      icon: Award,
      title: 'Regulatory & GMP Compliance',
      description: 'Stringent quality standards and documentation practices'
    },
    {
      icon: FlaskConical,
      title: 'Custom Branding Support',
      description: 'Flexible packaging and branding options for partners'
    },
    {
      icon: Users,
      title: 'Manufacturing Excellence',
      description: 'Experienced team ensuring consistent quality and reliability'
    }
  ];

  const dosageForms = [
    {
      name: 'Tablets',
      image: 'https://images.unsplash.com/photo-1758345680670-20a895a2dba3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0YWJsZXRzJTIwY2Fwc3VsZXN8ZW58MHx8fHwxNzY3NDI2MDQ3fDA&ixlib=rb-4.1.0&q=85',
      examples: 'Film-coated, Dispersible, Sustained Release'
    },
    {
      name: 'Capsules',
      image: 'https://images.unsplash.com/photo-1761361414308-b1b683d1f33a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0YWJsZXRzJTIwY2Fwc3VsZXN8ZW58MHx8fHwxNzY3NDI2MDQ3fDA&ixlib=rb-4.1.0&q=85',
      examples: 'Hard Gelatin, Sustained Release'
    },
    {
      name: 'Oral Liquids',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHx0YWJsZXRzJTIwY2Fwc3VsZXN8ZW58MHx8fHwxNzY3NDI2MDQ3fDA&ixlib=rb-4.1.0&q=85',
      examples: 'Syrups, Suspensions, Drops'
    },
    {
      name: 'Powders / Dry Syrups',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0YWJsZXRzJTIwY2Fwc3VsZXN8ZW58MHx8fHwxNzY3NDI2MDQ3fDA&ixlib=rb-4.1.0&q=85',
      examples: 'Oral Powders, Reconstitutable Dry Syrups'
    },
    {
      name: 'Topicals',
      image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg',
      examples: 'Creams, Ointments, Gels'
    },
    {
      name: 'Sterile Preparations',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
      examples: 'Injectables, Vials, Ampoules'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzY3NDI2MDMyfDA&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E7C]/95 to-[#2C3E7C]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              WHO-GMP Certified Pharmaceutical Third-Party Manufacturing Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Reliable, compliant, and scalable pharmaceutical manufacturing solutions across multiple dosage forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/formulations"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3EAE5E] text-white font-semibold rounded-lg hover:bg-[#359650] transition-all hover:scale-105"
              >
                Explore Approved Formulations
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C3E7C] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Capability Snapshot */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical manufacturing solutions with unwavering commitment to quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-[#3EAE5E]/10 rounded-lg">
                        <Icon className="text-[#2C3E7C]" size={24} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dosage Forms Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dosage Forms We Manufacture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities equipped to manufacture diverse pharmaceutical dosage forms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dosageForms.map((form, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-w-16 aspect-h-12 h-64">
                  <img 
                    src={form.image}
                    alt={form.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E7C]/90 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{form.name}</h3>
                  <p className="text-sm text-gray-200">{form.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#2C3E7C] to-[#3EAE5E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Explore our comprehensive list of approved pharmaceutical formulations and discover how we can support your manufacturing needs
          </p>
          <Link 
            to="/formulations"
            className="inline-flex items-center px-8 py-4 bg-white text-[#2C3E7C] font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            View Approved Formulations
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
