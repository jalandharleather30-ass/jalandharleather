const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'aj487a19',
  dataset: 'production',
  apiVersion: '2025-08-27',
  useCdn: false,
})

async function checkProducts() {
  try {
    console.log('Checking products in Sanity...')
    const products = await client.fetch('*[_type == "product"]')
    console.log(`Found ${products.length} products`)
    
    products.forEach((product, index) => {
      console.log(`\nProduct ${index + 1}:`)
      console.log(`- Name: ${product.name}`)
      console.log(`- Category: ${product.category}`)
      console.log(`- Images: ${product.images ? product.images.length : 0}`)
      if (product.images && product.images.length > 0) {
        console.log(`- Image refs:`, product.images.map(img => img._ref || img.asset?._ref))
      }
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

checkProducts()
