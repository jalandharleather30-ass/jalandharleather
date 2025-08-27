// Static mapping to ensure consistent and unique image assignment
const PRODUCT_IMAGE_MAPPING: Record<string, Record<string, string>> = {
  'ladies-handbags': {
    'Premium Brown Leather Tote Bag': '/images/products/handbag-1.png',
    'Classic Black Leather Handbag': '/images/products/handbag-2.png',
    'Designer Crossbody Bag': '/images/products/handbag-3.png',
    'Classic Leather Handbag': '/images/products/handbag-4.png',
    'Designer Tote Bag': '/images/products/handbag-5.png',
    'Evening Clutch Bag': '/images/products/handbag-6.png',
    'Crossbody Bag': '/images/products/handbag-7.png',
    'Shoulder Bag': '/images/products/handbag-8.png',
  },
  'premium-purses': {
    'Premium Leather Wallet': '/images/products/purse-1.png',
    'Compact Leather Purse': '/images/products/purse-2.png',
    'Executive Leather Purse': '/images/products/purse-3.png',
    'Designer Wallet': '/images/products/purse-4.png',
    'Evening Purse': '/images/products/purse-5.png',
    'Travel Wallet': '/images/products/purse-6.png',
  },
  'ladies-jackets': {
    'Classic Brown Leather Jacket': '/images/products/jacket-1.png',
    'Classic Leather Jacket': '/images/products/jacket-2.png',
    'Biker Jacket': '/images/products/jacket-3.png',
    'Casual Jacket': '/images/products/jacket-4.png',
    'Winter Coat': '/images/products/jacket-5.png',
    'Blazer Style': '/images/products/jacket-6.png',
  },
  'custom-accessories': {
    'Handcrafted Leather Keychain': '/images/products/accessory-1.png',
    'Leather Phone Case': '/images/products/accessory-2.png',
    'Leather Belt': '/images/products/accessory-3.png',
    'Key Holder': '/images/products/accessory-4.png',
    'Phone Case': '/images/products/accessory-5.png',
    'Laptop Bag': '/images/products/accessory-6.png',
    'Travel Accessory': '/images/products/accessory-7.png',
    'Custom Item': '/images/products/accessory-8.png',
  }
};

// Helper function to get fallback images for products based on category
export function getFallbackImage(category: string, index: number = 1): string {
  // Map categories to actual image files
  const categoryImageMap: Record<string, string> = {
    'ladies-handbags': `handbag-${Math.min(index, 8)}`,
    'premium-purses': `purse-${Math.min(index, 6)}`, 
    'ladies-jackets': `jacket-${Math.min(index, 6)}`,
    'custom-accessories': `accessory-${Math.min(index, 8)}`,
  }
  
  const imageBase = categoryImageMap[category] || `handbag-1`
  return `/images/products/${imageBase}.png`
}

// Helper function to get actual product image based on product name and category
export function getProductImage(productName: string, category: string): string {
  // First, try exact match in our mapping
  const categoryMapping = PRODUCT_IMAGE_MAPPING[category];
  
  if (categoryMapping && categoryMapping[productName]) {
    return categoryMapping[productName];
  }
  
  // If no exact match, try partial matching with keywords
  if (categoryMapping) {
    const productNameLower = productName.toLowerCase();
    
    // Find best match based on common keywords
    let bestMatch = '';
    let maxMatches = 0;
    
    for (const [mappedName, imagePath] of Object.entries(categoryMapping)) {
      const mappedNameLower = mappedName.toLowerCase();
      
      // Count matching words
      const productWords = productNameLower.split(/\s+/);
      const mappedWords = mappedNameLower.split(/\s+/);
      
      let matches = 0;
      productWords.forEach(word => {
        if (mappedWords.some(mappedWord => 
          word.includes(mappedWord) || mappedWord.includes(word) || 
          (word.length > 3 && mappedWord.length > 3 && 
           (word.includes(mappedWord.substring(0, 4)) || mappedWord.includes(word.substring(0, 4))))
        )) {
          matches++;
        }
      });
      
      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = imagePath;
      }
    }
    
    if (bestMatch && maxMatches > 0) {
      return bestMatch;
    }
  }
  
  // Final fallback: assign based on product name length and position in category
  const maxImages = getMaxImagesForCategory(category);
  const productNameSum = productName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const imageIndex = (productNameSum % maxImages) + 1;
  
  return getFallbackImage(category, imageIndex);
}

// Get max images available for each category
function getMaxImagesForCategory(category: string): number {
  const maxImages: Record<string, number> = {
    'ladies-handbags': 8,
    'premium-purses': 6,
    'ladies-jackets': 6,
    'custom-accessories': 8,
  }
  return maxImages[category] || 8;
}

// Helper function to get alt text for images
export function getFallbackAlt(productName: string, category: string): string {
  const categoryName = category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
  return `${productName} - ${categoryName} from Jalandhar Leather`
}
