const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Sanity client configuration
const client = createClient({
  projectId: 'aj487a19',
  dataset: 'production',
  apiVersion: '2025-08-27',
  token: process.env.SANITY_API_TOKEN, // You'll need to get this
  useCdn: false
})

// Helper function to upload image from local file
async function uploadImageFromFile(imagePath, filename) {
  try {
    const fullPath = path.join(__dirname, 'public', 'images', 'products', filename)
    if (!fs.existsSync(fullPath)) {
      console.log(`Image not found: ${fullPath}`)
      return null
    }
    
    const imageBuffer = fs.readFileSync(fullPath)
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename
    })
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      },
      alt: `Product image - ${filename}`
    }
  } catch (error) {
    console.error(`Error uploading image ${filename}:`, error)
    return null
  }
}

// Product data with your actual images
const products = [
  {
    name: 'Premium Brown Leather Tote Bag',
    slug: { current: 'premium-brown-tote-bag' },
    category: 'ladies-handbags',
    price: 4500,
    description: 'Elegant handcrafted leather tote bag featuring premium full-grain leather construction. Perfect for professional and casual settings with spacious interior and refined finishing.',
    features: [
      '100% Genuine Leather',
      'Handcrafted Quality',
      'Multiple Compartments',
      'Reinforced Stitching',
      'Premium Hardware',
      'Lifetime Craftsmanship Guarantee'
    ],
    materials: 'Full-grain leather',
    dimensions: '35cm x 30cm x 15cm',
    weight: '800g',
    color: 'Rich Brown',
    care: 'Clean with leather conditioner, avoid excessive moisture',
    imageFiles: ['handbag-1.png', 'handbag-2.png', 'handbag-3.png']
  },
  {
    name: 'Classic Black Leather Handbag',
    slug: { current: 'classic-black-handbag' },
    category: 'ladies-handbags',
    price: 3800,
    description: 'Timeless black leather handbag with elegant design. Versatile enough for any occasion, from business meetings to evening outings.',
    features: [
      'Premium Black Leather',
      'Adjustable Straps',
      'Interior Pockets',
      'Magnetic Closure',
      'Gold-tone Hardware',
      'Compact Yet Spacious'
    ],
    materials: 'Premium leather',
    dimensions: '32cm x 28cm x 12cm',
    weight: '650g',
    color: 'Classic Black',
    care: 'Regular conditioning recommended',
    imageFiles: ['handbag-2.png', 'handbag-4.png', 'handbag-6.png']
  },
  {
    name: 'Designer Crossbody Bag',
    slug: { current: 'designer-crossbody-bag' },
    category: 'ladies-handbags',
    price: 2800,
    description: 'Stylish crossbody bag perfect for everyday use. Compact design with adjustable strap for comfortable wear.',
    features: [
      'Adjustable Crossbody Strap',
      'Compact Design',
      'Secure Zipper Closure',
      'Interior Organization',
      'Lightweight Construction'
    ],
    materials: 'Genuine leather',
    dimensions: '25cm x 20cm x 8cm',
    weight: '400g',
    color: 'Cognac Brown',
    care: 'Spot clean as needed',
    imageFiles: ['handbag-3.png', 'handbag-5.png', 'handbag-7.png']
  },
  {
    name: 'Premium Leather Wallet',
    slug: { current: 'premium-leather-wallet' },
    category: 'premium-purses',
    price: 1200,
    description: 'Compact yet spacious leather wallet with multiple card slots and compartments. Features RFID protection for security.',
    features: [
      'RFID Protection',
      '8 Card Slots',
      'Bill Compartment',
      'Coin Pocket',
      'ID Window',
      'Premium Stitching'
    ],
    materials: 'Full-grain leather',
    dimensions: '19cm x 10cm x 2cm',
    weight: '150g',
    color: 'Classic Brown',
    care: 'Leather conditioner monthly',
    imageFiles: ['purse-1.png', 'purse-2.png', 'purse-4.png']
  },
  {
    name: 'Compact Leather Purse',
    slug: { current: 'compact-leather-purse' },
    category: 'premium-purses',
    price: 900,
    description: 'Small and elegant purse perfect for essentials. High-quality leather construction with secure closure.',
    features: [
      'Compact Size',
      'Secure Snap Closure',
      'Card Slots',
      'Cash Compartment',
      'Quality Hardware'
    ],
    materials: 'Genuine leather',
    dimensions: '15cm x 10cm x 2cm',
    weight: '120g',
    color: 'Black',
    care: 'Regular cleaning recommended',
    imageFiles: ['purse-3.png', 'purse-5.png', 'purse-6.png']
  },
  {
    name: 'Handcrafted Leather Keychain',
    slug: { current: 'leather-keychain' },
    category: 'custom-accessories',
    price: 400,
    description: 'Custom leather keychain with personalized engraving. Perfect gift option with quality craftsmanship.',
    features: [
      'Custom Engraving Available',
      'Durable Leather',
      'Handmade Quality',
      'Gift Packaging Included',
      'Various Colors Available'
    ],
    materials: 'Premium leather',
    dimensions: '8cm x 3cm',
    weight: '25g',
    color: 'Multiple Options',
    care: 'Minimal maintenance required',
    imageFiles: ['accessory-1.png', 'accessory-2.png', 'accessory-3.png']
  },
  {
    name: 'Leather Phone Case',
    slug: { current: 'leather-phone-case' },
    category: 'custom-accessories',
    price: 800,
    description: 'Premium leather phone case with card slots. Protection meets functionality in elegant design.',
    features: [
      'Phone Protection',
      'Card Storage',
      'Magnetic Closure',
      'Precise Cutouts',
      'Premium Feel'
    ],
    materials: 'Premium leather',
    dimensions: 'Device Specific',
    weight: '50g',
    color: 'Brown/Black',
    care: 'Avoid moisture',
    imageFiles: ['accessory-4.png', 'accessory-5.png', 'accessory-6.png']
  },
  {
    name: 'Classic Brown Leather Jacket',
    slug: { current: 'brown-leather-jacket' },
    category: 'ladies-jackets',
    price: 12000,
    description: 'Premium brown leather jacket crafted from the finest leather. Timeless style meets modern comfort with attention to detail.',
    features: [
      'Premium Full-grain Leather',
      'YKK Zippers',
      'Quilted Lining',
      'Adjustable Waist',
      'Multiple Pockets',
      'Classic Fit'
    ],
    materials: 'Full-grain leather',
    dimensions: 'Size Specific',
    weight: '1.2kg',
    color: 'Rich Brown',
    care: 'Professional leather cleaning',
    imageFiles: ['jacket-1.png', 'jacket-3.png', 'jacket-5.png']
  }
]

// Function to create products
async function createProducts() {
  try {
    console.log('Starting to create products...')
    
    for (const productData of products) {
      console.log(`Creating product: ${productData.name}`)
      
      // Upload images
      const images = []
      for (const imageFile of productData.imageFiles) {
        const image = await uploadImageFromFile('products', imageFile)
        if (image) {
          images.push(image)
        }
      }
      
      // Create product document
      const product = {
        _type: 'product',
        name: productData.name,
        slug: productData.slug,
        category: productData.category,
        price: productData.price,
        description: productData.description,
        features: productData.features,
        materials: productData.materials,
        dimensions: productData.dimensions,
        weight: productData.weight,
        color: productData.color,
        care: productData.care,
        images: images,
        isAvailable: true,
        isFeatured: true
      }
      
      const result = await client.create(product)
      console.log(`✅ Created product: ${result.name} (ID: ${result._id})`)
    }
    
    console.log('🎉 All products created successfully!')
    
  } catch (error) {
    console.error('Error creating products:', error)
  }
}

// Function to create site settings
async function createSiteSettings() {
  try {
    const siteSettings = {
      _id: 'siteSettings',
      _type: 'siteSettings',
      title: 'Jalandhar Leather',
      description: 'Premium handcrafted leather goods since 2018',
      email: 'jalandharleather30@gmail.com',
      phone: '+91 98765 43210',
      address: 'Jalandhar, Punjab, India',
      socialMedia: {
        instagram: 'jalandharleather',
        facebook: 'jalandharleather',
        whatsapp: '+919876543210'
      }
    }
    
    const result = await client.createOrReplace(siteSettings)
    console.log('✅ Site settings created:', result.title)
  } catch (error) {
    console.error('Error creating site settings:', error)
  }
}

// Run the script
async function main() {
  console.log('🚀 Populating Sanity CMS with products and settings...')
  await createSiteSettings()
  await createProducts()
  console.log('✨ Complete! Check your Sanity Studio.')
}

// Export for direct execution
if (require.main === module) {
  main().catch(console.error)
}

module.exports = { createProducts, createSiteSettings }
