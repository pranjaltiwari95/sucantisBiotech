// Real product data from Sucantis Biotech FDA approved formulations
// Data normalized by salt/API combination (not by strength)

export const products = [
  {
    id: 1,
    productName: "Amoxycillin",
    salts: ["Amoxicillin"],
    dosageForms: ["Capsule", "Dry Syrup"],
    therapeuticCategory: "Antibiotics",
    strengths: ["250mg", "500mg", "125mg/5ml", "250mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 2,
    productName: "Amoxicillin + Clavulanic Acid",
    salts: ["Amoxicillin", "Clavulanic Acid"],
    dosageForms: ["Tablet", "Dry Syrup"],
    therapeuticCategory: "Antibiotics",
    strengths: ["625mg", "375mg", "228.5mg/5ml", "457mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 3,
    productName: "Azithromycin",
    salts: ["Azithromycin"],
    dosageForms: ["Tablet", "Dry Syrup"],
    therapeuticCategory: "Antibiotics",
    strengths: ["250mg", "500mg", "200mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 4,
    productName: "Cefixime",
    salts: ["Cefixime"],
    dosageForms: ["Tablet", "Dispersible Tablet", "Dry Syrup"],
    therapeuticCategory: "Antibiotics",
    strengths: ["200mg", "100mg", "50mg/5ml", "100mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 5,
    productName: "Cefixime + Ofloxacin",
    salts: ["Cefixime", "Ofloxacin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antibiotics",
    strengths: ["200mg + 200mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 6,
    productName: "Cefpodoxime Proxetil",
    salts: ["Cefpodoxime Proxetil"],
    dosageForms: ["Tablet", "Dry Syrup"],
    therapeuticCategory: "Antibiotics",
    strengths: ["200mg", "100mg", "50mg/5ml", "100mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 7,
    productName: "Ciprofloxacin",
    salts: ["Ciprofloxacin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antibiotics",
    strengths: ["250mg", "500mg", "750mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 8,
    productName: "Levofloxacin",
    salts: ["Levofloxacin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antibiotics",
    strengths: ["250mg", "500mg", "750mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 9,
    productName: "Ofloxacin",
    salts: ["Ofloxacin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antibiotics",
    strengths: ["200mg", "400mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 10,
    productName: "Paracetamol",
    salts: ["Paracetamol"],
    dosageForms: ["Tablet", "Suspension"],
    therapeuticCategory: "Analgesic/Antipyretic",
    strengths: ["500mg", "650mg", "125mg/5ml", "250mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 11,
    productName: "Paracetamol + Diclofenac",
    salts: ["Paracetamol", "Diclofenac Potassium"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Analgesic/Anti-inflammatory",
    strengths: ["325mg + 50mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 12,
    productName: "Aceclofenac",
    salts: ["Aceclofenac"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Anti-inflammatory",
    strengths: ["100mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 13,
    productName: "Aceclofenac + Paracetamol",
    salts: ["Aceclofenac", "Paracetamol"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Analgesic/Anti-inflammatory",
    strengths: ["100mg + 325mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 14,
    productName: "Aceclofenac + Paracetamol + Serratiopeptidase",
    salts: ["Aceclofenac", "Paracetamol", "Serratiopeptidase"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Analgesic/Anti-inflammatory",
    strengths: ["100mg + 325mg + 15mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 15,
    productName: "Diclofenac Potassium",
    salts: ["Diclofenac Potassium"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Anti-inflammatory",
    strengths: ["50mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 16,
    productName: "Diclofenac + Paracetamol + Chlorzoxazone",
    salts: ["Diclofenac Potassium", "Paracetamol", "Chlorzoxazone"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Analgesic/Muscle Relaxant",
    strengths: ["50mg + 325mg + 250mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 17,
    productName: "Ibuprofen",
    salts: ["Ibuprofen"],
    dosageForms: ["Tablet", "Suspension"],
    therapeuticCategory: "Analgesic/Anti-inflammatory",
    strengths: ["200mg", "400mg", "100mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 18,
    productName: "Ibuprofen + Paracetamol",
    salts: ["Ibuprofen", "Paracetamol"],
    dosageForms: ["Tablet", "Suspension"],
    therapeuticCategory: "Analgesic/Anti-inflammatory",
    strengths: ["400mg + 325mg", "100mg + 125mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 19,
    productName: "Nimesulide",
    salts: ["Nimesulide"],
    dosageForms: ["Tablet", "Suspension"],
    therapeuticCategory: "Anti-inflammatory",
    strengths: ["100mg", "50mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 20,
    productName: "Pantoprazole",
    salts: ["Pantoprazole"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antiulcer/PPI",
    strengths: ["20mg", "40mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 21,
    productName: "Omeprazole",
    salts: ["Omeprazole"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Antiulcer/PPI",
    strengths: ["20mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 22,
    productName: "Rabeprazole",
    salts: ["Rabeprazole Sodium"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antiulcer/PPI",
    strengths: ["20mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 23,
    productName: "Esomeprazole",
    salts: ["Esomeprazole"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Antiulcer/PPI",
    strengths: ["20mg", "40mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 24,
    productName: "Pantoprazole + Domperidone",
    salts: ["Pantoprazole", "Domperidone"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Antiulcer/Prokinetic",
    strengths: ["40mg + 30mg SR"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 25,
    productName: "Rabeprazole + Domperidone",
    salts: ["Rabeprazole", "Domperidone"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Antiulcer/Prokinetic",
    strengths: ["20mg + 30mg SR"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 26,
    productName: "Cetirizine",
    salts: ["Cetirizine Hydrochloride"],
    dosageForms: ["Tablet", "Syrup"],
    therapeuticCategory: "Antihistamine",
    strengths: ["10mg", "5mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 27,
    productName: "Levocetirizine",
    salts: ["Levocetirizine"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antihistamine",
    strengths: ["5mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 28,
    productName: "Montelukast",
    salts: ["Montelukast Sodium"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Anti-asthmatic",
    strengths: ["10mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 29,
    productName: "Montelukast + Levocetirizine",
    salts: ["Montelukast", "Levocetirizine"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Anti-allergic/Anti-asthmatic",
    strengths: ["10mg + 5mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 30,
    productName: "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    salts: ["Dextromethorphan", "Chlorpheniramine", "Phenylephrine"],
    dosageForms: ["Syrup"],
    therapeuticCategory: "Cough/Cold",
    strengths: ["10mg + 4mg + 5mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Bottles"]
  },
  {
    id: 31,
    productName: "Levosalbutamol + Ambroxol",
    salts: ["Levosalbutamol", "Ambroxol"],
    dosageForms: ["Syrup"],
    therapeuticCategory: "Bronchodilator/Mucolytic",
    strengths: ["1mg + 30mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Bottles"]
  },
  {
    id: 32,
    productName: "Ambroxol",
    salts: ["Ambroxol Hydrochloride"],
    dosageForms: ["Tablet", "Syrup"],
    therapeuticCategory: "Mucolytic",
    strengths: ["30mg", "15mg/5ml", "30mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 33,
    productName: "Calcium Carbonate + Vitamin D3",
    salts: ["Calcium Carbonate", "Vitamin D3"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Calcium Supplement",
    strengths: ["500mg + 250 IU"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 34,
    productName: "Ferrous Ascorbate + Folic Acid",
    salts: ["Ferrous Ascorbate", "Folic Acid"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Iron Supplement",
    strengths: ["100mg + 1.5mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 35,
    productName: "Methylcobalamin + Alpha Lipoic Acid + Folic Acid",
    salts: ["Methylcobalamin", "Alpha Lipoic Acid", "Folic Acid"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Vitamin Supplement",
    strengths: ["1500mcg + 100mg + 1.5mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 36,
    productName: "Multivitamin + Multimineral",
    salts: ["Various Vitamins and Minerals"],
    dosageForms: ["Capsule", "Syrup"],
    therapeuticCategory: "Multivitamin",
    strengths: ["As per formulation"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 37,
    productName: "Amlodipine",
    salts: ["Amlodipine"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antihypertensive",
    strengths: ["5mg", "10mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 38,
    productName: "Atenolol",
    salts: ["Atenolol"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antihypertensive",
    strengths: ["25mg", "50mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 39,
    productName: "Telmisartan",
    salts: ["Telmisartan"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antihypertensive",
    strengths: ["20mg", "40mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 40,
    productName: "Atorvastatin",
    salts: ["Atorvastatin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antilipidemic",
    strengths: ["10mg", "20mg", "40mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 41,
    productName: "Rosuvastatin",
    salts: ["Rosuvastatin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antilipidemic",
    strengths: ["10mg", "20mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 42,
    productName: "Metformin",
    salts: ["Metformin Hydrochloride"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antidiabetic",
    strengths: ["500mg", "850mg", "1000mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 43,
    productName: "Glimepiride",
    salts: ["Glimepiride"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antidiabetic",
    strengths: ["1mg", "2mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 44,
    productName: "Glimepiride + Metformin",
    salts: ["Glimepiride", "Metformin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antidiabetic",
    strengths: ["1mg + 500mg", "2mg + 500mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 45,
    productName: "Vildagliptin + Metformin",
    salts: ["Vildagliptin", "Metformin"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antidiabetic",
    strengths: ["50mg + 500mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 46,
    productName: "Fluconazole",
    salts: ["Fluconazole"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antifungal",
    strengths: ["150mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 47,
    productName: "Itraconazole",
    salts: ["Itraconazole"],
    dosageForms: ["Capsule"],
    therapeuticCategory: "Antifungal",
    strengths: ["100mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 48,
    productName: "Albendazole",
    salts: ["Albendazole"],
    dosageForms: ["Tablet", "Suspension"],
    therapeuticCategory: "Anthelmintic",
    strengths: ["400mg", "200mg/5ml"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips", "Bottles"]
  },
  {
    id: 49,
    productName: "Drotaverine",
    salts: ["Drotaverine"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antispasmodic",
    strengths: ["40mg", "80mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  },
  {
    id: 50,
    productName: "Dicyclomine",
    salts: ["Dicyclomine"],
    dosageForms: ["Tablet"],
    therapeuticCategory: "Antispasmodic",
    strengths: ["10mg", "20mg"],
    regulatoryStatus: "Approved – Domestic Market",
    packaging: ["Blister strips"]
  }
];

export const therapeuticCategories = [
  "Antibiotics",
  "Analgesic/Antipyretic",
  "Analgesic/Anti-inflammatory",
  "Anti-inflammatory",
  "Analgesic/Muscle Relaxant",
  "Antiulcer/PPI",
  "Antiulcer/Prokinetic",
  "Antihistamine",
  "Anti-asthmatic",
  "Anti-allergic/Anti-asthmatic",
  "Cough/Cold",
  "Bronchodilator/Mucolytic",
  "Mucolytic",
  "Calcium Supplement",
  "Iron Supplement",
  "Vitamin Supplement",
  "Multivitamin",
  "Antihypertensive",
  "Antilipidemic",
  "Antidiabetic",
  "Antifungal",
  "Anthelmintic",
  "Antispasmodic"
];

export const dosageForms = [
  "Tablet",
  "Capsule",
  "Dry Syrup",
  "Syrup",
  "Suspension",
  "Dispersible Tablet",
  "Film-Coated Tablet",
  "Sustained Release Tablet",
  "Drops"
];
