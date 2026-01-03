import React, { useState, useMemo } from 'react';
import { Search, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { products, therapeuticCategories, dosageForms } from '../data/products';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ApprovedFormulations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDosageForm, setSelectedDosageForm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState(''); // Single or Combination
  const [expandedProducts, setExpandedProducts] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = 
        searchTerm === '' ||
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.salts.some(salt => salt.toLowerCase().includes(searchTerm.toLowerCase())) ||
        product.therapeuticCategory.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDosageForm = 
        selectedDosageForm === '' ||
        product.dosageForms.includes(selectedDosageForm);

      const matchesCategory = 
        selectedCategory === '' ||
        product.therapeuticCategory === selectedCategory;

      const matchesType = 
        selectedType === '' ||
        (selectedType === 'single' && product.salts.length === 1) ||
        (selectedType === 'combination' && product.salts.length > 1);

      return matchesSearch && matchesDosageForm && matchesCategory && matchesType;
    });
  }, [searchTerm, selectedDosageForm, selectedCategory, selectedType]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Toggle product details
  const toggleProduct = (productId) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(productId)) {
      newExpanded.delete(productId);
    } else {
      newExpanded.add(productId);
    }
    setExpandedProducts(newExpanded);
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(18);
    doc.setTextColor(44, 62, 124);
    doc.text('SUCANTIS BIOTECH PRIVATE LIMITED', 105, 15, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('Approved Product List - Domestic Market', 105, 25, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('WHO-GMP Certified Pharmaceutical Manufacturing', 105, 32, { align: 'center' });
    
    // Add table
    const tableData = filteredProducts.map(product => [
      product.productName,
      product.salts.join(', '),
      product.dosageForms.join(', '),
      product.therapeuticCategory,
      product.regulatoryStatus
    ]);
    
    doc.autoTable({
      startY: 40,
      head: [['Product Name', 'Active Ingredient(s)', 'Dosage Form(s)', 'Therapeutic Category', 'Status']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [44, 62, 124],
        textColor: [255, 255, 255],
        fontSize: 9,
        fontStyle: 'bold'
      },
      bodyStyles: {
        fontSize: 8,
        textColor: [50, 50, 50]
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      margin: { top: 40, left: 10, right: 10 }
    });
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(
        'Product information is for business reference only and is not intended for promotional or therapeutic use.',
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
    }
    
    doc.save('Sucantis_Approved_Products.pdf');
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDosageForm('');
    setSelectedCategory('');
    setSelectedType('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Approved Formulations
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl">
            Search our comprehensive database of WHO-GMP approved pharmaceutical formulations. All products are approved for the domestic market and manufactured under stringent quality standards.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-20 z-40">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by product name, API/salt, or combination..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dosage Form
              </label>
              <select
                value={selectedDosageForm}
                onChange={(e) => {
                  setSelectedDosageForm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
              >
                <option value="">All Forms</option>
                {dosageForms.map(form => (
                  <option key={form} value={form}>{form}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Therapeutic Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
              >
                <option value="">All Categories</option>
                {therapeuticCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3E7C] focus:border-transparent"
              >
                <option value="">All Types</option>
                <option value="single">Single Salt</option>
                <option value="combination">Combination</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={generatePDF}
                className="flex-1 px-4 py-2 bg-[#3EAE5E] text-white rounded-lg hover:bg-[#359650] transition-colors flex items-center justify-center"
              >
                <Download size={18} className="mr-2" />
                PDF
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Product List */}
        <div className="space-y-3">
          {paginatedProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div 
                className="p-5 cursor-pointer"
                onClick={() => toggleProduct(product.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.productName}
                      </h3>
                      {product.salts.length > 1 && (
                        <span className="px-2 py-1 bg-[#3EAE5E]/10 text-[#3EAE5E] text-xs font-medium rounded">
                          Combination
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500 font-medium">Active Ingredient(s):</span>
                        <p className="text-gray-900">{product.salts.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Dosage Form(s):</span>
                        <p className="text-gray-900">{product.dosageForms.join(', ')}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Category:</span>
                        <p className="text-gray-900">{product.therapeuticCategory}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    {expandedProducts.has(product.id) ? (
                      <ChevronUp className="text-[#2C3E7C]" size={20} />
                    ) : (
                      <ChevronDown className="text-[#2C3E7C]" size={20} />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedProducts.has(product.id) && (
                <div className="border-t border-gray-200 px-5 py-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 font-medium">Available Strengths:</span>
                      <p className="text-gray-900 mt-1">
                        {product.strengths.join(', ')}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">Packaging:</span>
                      <p className="text-gray-900 mt-1">
                        {product.packaging.join(', ')}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-gray-500 font-medium">Regulatory Status:</span>
                      <p className="text-[#3EAE5E] font-medium mt-1">
                        {product.regulatoryStatus}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  return page === 1 || 
                         page === totalPages || 
                         (page >= currentPage - 1 && page <= currentPage + 1);
                })
                .map((page, index, array) => (
                  <React.Fragment key={page}>
                    {index > 0 && array[index - 1] !== page - 1 && (
                      <span className="text-gray-400">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-[#2C3E7C] text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800 text-center">
            <strong>Disclaimer:</strong> Product information is for business reference only and is not intended for promotional or therapeutic use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedFormulations;
