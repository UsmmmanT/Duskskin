// DuskSkin Category System - Sephora-inspired taxonomy

export const CATEGORIES = [
  { label: 'New', value: 'New' },
  { label: 'Makeup', value: 'Makeup' },
  { label: 'Skincare', value: 'Skincare' },
  { label: 'Tools & Brushes', value: 'Tools & Brushes' },
  { label: 'Hair', value: 'Hair' },
  { label: 'Bath & Body', value: 'Bath & Body' },
  { label: 'Fragrance', value: 'Fragrance' },
  { label: 'Clean', value: 'Clean' },
  { label: 'Gifts', value: 'Gifts' },
  { label: 'Sale', value: 'Sale' },
];

export const SUBCATEGORIES = {
  Makeup: [
    'Makeup Remover',
    // Eyes & Lips
    'Eyes', 'Eye Palettes & Sets', 'Eye Primer', 'Under Eye Concealer',
    'Eyeshadow', 'Eyebrows', 'Eyeliner', 'False Eyelashes', 'Mascara',
    // Face
    'Bronzer', 'Powder', 'Highlighter & Illuminator', 'Setting & Finishing Spray',
    'Face Palettes & Sets', 'Face Primer', 'Blush', 'Concealer & Corrector',
    'Tinted Moisturiser', 'BB & CC Cream', 'Contour', 'Foundation',
    // Lips
    'Lipstick', 'Lip Gloss', 'Lip Stain & Tint', 'Lip Balm',
    'Lip Primer', 'Lip Plumper', 'Lip Liner', 'Lip Palettes & Sets',
    // Nails
    'Nail Art', 'Base & Top Coat', 'Nail Polish Remover',
    'Nail Polish', 'Nail Sets', 'Nail Treatments',
  ],
  Skincare: [
    'Sun Care', 'Self Tanner', 'Face Sunscreen', 'After Sun Care',
    'Toner', 'Masks & Treatments', 'Lip Care', 'Serum & Booster',
    'Eye Care', 'Peel', 'Face Oil', 'Mask',
    'Scrub & Exfoliator', 'Blotting Paper', 'Facial Cleanser',
    'Day Moisturiser', 'Neck & Décolleté Cream', 'Facial Mist',
    'Night Cream', 'Skincare Sets',
  ],
  'Tools & Brushes': [
    'Hair Styling Devices', 'Brushes & Combs',
    'Makeup Bags', 'Containers', 'Toiletry Bags', 'Palette Organisers',
    'Scissors', 'Nail Files & Buffers', 'Pedicure Tools',
    'Nail Clippers', 'Manicure & Pedicure Sets',
    'Pencil Sharpeners', 'Eyelash Curlers', 'Tweezers & Brows',
    'Beauty Devices (Skincare)', 'Beauty Devices (Makeup)',
    'Brush Cleaners', 'Lip Brushes', 'Brush Sets',
    'Eye Brushes', 'Face Brushes', 'Multipurpose Brushes',
    'Powder Puffs', 'Sponges',
  ],
  Hair: [
    'Hair Oil', 'Hair Loss Treatment', 'Scalp Treatment',
    'Hair Masks', 'Hair Serum',
    'Hair Cream', 'Volumiser', 'Heat Protection', 'Mousse',
    'Pomade, Wax & Gel', 'Texturiser', 'Hair Spray', 'Hair Colour',
    'Conditioner', 'Leave-In Conditioner', 'Shampoo', 'Dry Shampoo',
    'Haircare Sets',
  ],
  'Bath & Body': [
    'Suncare', 'After Sun Care', 'Self Tanner',
    'Contouring & Sculpting', 'Cellulite & Stretch Marks',
    'Foot Cream', 'Hand Cream', 'Body',
    'Deodorant', 'Hair Removal',
    'Body Exfoliator', 'Hand Wash', 'Bath Soak',
    'Body Wash', 'Bath & Shower Sets', 'Body Sponges',
  ],
  Fragrance: ['Women', 'Men', 'Unisex', 'Home'],
  Clean: ['Clean Skincare', 'Clean Makeup', 'Clean Hair', 'Clean Bath & Body'],
  Gifts: ['Gift Ideas', 'For Him', 'For Her', 'Exclusives'],
};

export const BEAUTY_SIZES = [
  { label: 'Travel Size', value: 'Travel Size', volume: '15ml' },
  { label: 'Mini', value: 'Mini', volume: '30ml' },
  { label: 'Standard', value: 'Standard', volume: '50ml' },
  { label: 'Full Size', value: 'Full Size', volume: '100ml' },
  { label: 'Value Size', value: 'Value Size', volume: '200ml' },
];
