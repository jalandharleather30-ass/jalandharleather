#!/bin/bash

# Image Update Script for Jalandhar Leather Website
# This script helps you quickly update image references after downloading new photos

echo "🖼️  Jalandhar Leather - Image Update Helper"
echo "=========================================="
echo ""

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "❌ Images directory not found. Please create public/images/ directory first."
    exit 1
fi

# Function to check if image exists
check_image() {
    local image_path="$1"
    local description="$2"
    
    if [ -f "public/images/$image_path" ]; then
        echo "✅ $description: public/images/$image_path"
        return 0
    else
        echo "❌ Missing: public/images/$image_path ($description)"
        return 1
    fi
}

echo "📋 Checking for required images..."
echo ""

# Hero Images
echo "🎯 Hero Section Images:"
check_image "hero/hero-1.jpg" "Main hero image"
check_image "hero/hero-2.jpg" "Secondary hero image" 
check_image "hero/hero-3.jpg" "Tertiary hero image"
echo ""

# Product Images
echo "👜 Product Images - Handbags:"
for i in {1..4}; do
    check_image "products/handbag-$i.jpg" "Handbag $i"
done
echo ""

echo "👛 Product Images - Purses:"
for i in {1..3}; do
    check_image "products/purse-$i.jpg" "Purse $i"
done
echo ""

echo "🧥 Product Images - Jackets:"
for i in {1..2}; do
    check_image "products/jacket-$i.jpg" "Jacket $i"
done
echo ""

# Craftsmanship Images
echo "🔨 Craftsmanship Images:"
check_image "craftsmanship/process-1.jpg" "Material selection"
check_image "craftsmanship/process-2.jpg" "Cutting process"
check_image "craftsmanship/process-3.jpg" "Hand stitching"
check_image "craftsmanship/process-4.jpg" "Edge finishing"
check_image "craftsmanship/workshop-1.jpg" "Workshop overview"
check_image "craftsmanship/tools-1.jpg" "Traditional tools"
echo ""

# About Images
echo "🏢 Company Images:"
check_image "about/founder.jpg" "Founder/team photo"
check_image "about/workshop-exterior.jpg" "Workshop exterior"
check_image "about/heritage.jpg" "Heritage image"
echo ""

echo "=========================================="
echo "📝 Next Steps:"
echo ""
echo "1. Download high-quality images from:"
echo "   - Unsplash.com (search: 'leather goods', 'handmade leather')"
echo "   - Pexels.com (search: 'leather handbag', 'craftsmanship')"
echo "   - Pixabay.com (search: 'leather accessories')"
echo ""
echo "2. Rename and place images in the correct folders:"
echo "   public/images/hero/"
echo "   public/images/products/" 
echo "   public/images/craftsmanship/"
echo "   public/images/about/"
echo ""
echo "3. Optimize images (resize to max 1200px width, compress for web)"
echo ""
echo "4. Run 'npm run dev' to see updated images on the website"
echo ""
echo "📖 See IMAGE_REQUIREMENTS.md for detailed specifications"
