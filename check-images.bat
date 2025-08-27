@echo off
echo.
echo 🖼️  Jalandhar Leather - Image Update Helper
echo ==========================================
echo.

REM Check if images directory exists
if not exist "public\images" (
    echo ❌ Images directory not found. Please create public\images\ directory first.
    pause
    exit /b 1
)

echo 📋 Checking for required images...
echo.

REM Hero Images
echo 🎯 Hero Section Images:
if exist "public\images\hero\hero-1.png" (echo ✅ Main hero image: public\images\hero\hero-1.png) else (echo ❌ Missing: public\images\hero\hero-1.png)
if exist "public\images\hero\hero-2.png" (echo ✅ Secondary hero image: public\images\hero\hero-2.png) else (echo ❌ Missing: public\images\hero\hero-2.png)
if exist "public\images\hero\hero-3.png" (echo ✅ Tertiary hero image: public\images\hero\hero-3.png) else (echo ❌ Missing: public\images\hero\hero-3.png)
echo.

REM Product Images - Handbags
echo 👜 Product Images - Handbags:
for /L %%i in (1,1,4) do (
    if exist "public\images\products\handbag-%%i.png" (echo ✅ Handbag %%i: public\images\products\handbag-%%i.png) else (echo ❌ Missing: public\images\products\handbag-%%i.png)
)
echo.

REM Product Images - Purses
echo 👛 Product Images - Purses:
for /L %%i in (1,1,3) do (
    if exist "public\images\products\purse-%%i.png" (echo ✅ Purse %%i: public\images\products\purse-%%i.png) else (echo ❌ Missing: public\images\products\purse-%%i.png)
)
echo.

REM Product Images - Jackets
echo 🧥 Product Images - Jackets:
for /L %%i in (1,1,2) do (
    if exist "public\images\products\jacket-%%i.png" (echo ✅ Jacket %%i: public\images\products\jacket-%%i.png) else (echo ❌ Missing: public\images\products\jacket-%%i.png)
)
echo.

REM Craftsmanship Images
echo 🔨 Craftsmanship Images:
if exist "public\images\craftsmanship\process-1.png" (echo ✅ Material selection: public\images\craftsmanship\process-1.png) else (echo ❌ Missing: public\images\craftsmanship\process-1.png)
if exist "public\images\craftsmanship\process-2.png" (echo ✅ Cutting process: public\images\craftsmanship\process-2.png) else (echo ❌ Missing: public\images\craftsmanship\process-2.png)
if exist "public\images\craftsmanship\process-3.png" (echo ✅ Hand stitching: public\images\craftsmanship\process-3.png) else (echo ❌ Missing: public\images\craftsmanship\process-3.png)
if exist "public\images\craftsmanship\process-4.png" (echo ✅ Edge finishing: public\images\craftsmanship\process-4.png) else (echo ❌ Missing: public\images\craftsmanship\process-4.png)
if exist "public\images\craftsmanship\workshop-1.png" (echo ✅ Workshop overview: public\images\craftsmanship\workshop-1.png) else (echo ❌ Missing: public\images\craftsmanship\workshop-1.png)
if exist "public\images\craftsmanship\tools-1.png" (echo ✅ Traditional tools: public\images\craftsmanship\tools-1.png) else (echo ❌ Missing: public\images\craftsmanship\tools-1.png)
echo.

REM About Images
echo 🏢 Company Images:
if exist "public\images\about\founder.png" (echo ✅ Founder/team photo: public\images\about\founder.png) else (echo ❌ Missing: public\images\about\founder.png)
if exist "public\images\about\workshop-exterior.png" (echo ✅ Workshop exterior: public\images\about\workshop-exterior.png) else (echo ❌ Missing: public\images\about\workshop-exterior.png)
if exist "public\images\about\heritage.png" (echo ✅ Heritage image: public\images\about\heritage.png) else (echo ❌ Missing: public\images\about\heritage.png)
echo.

echo ==========================================
echo 📝 Next Steps:
echo.
echo 1. Download high-quality images from:
echo    - Unsplash.com (search: 'leather goods', 'handmade leather')
echo    - Pexels.com (search: 'leather handbag', 'craftsmanship')
echo    - Pixabay.com (search: 'leather accessories')
echo.
echo 2. Rename and place images in the correct folders:
echo    public\images\hero\
echo    public\images\products\
echo    public\images\craftsmanship\
echo    public\images\about\
echo.
echo 3. Optimize images (resize to max 1200px width, compress for web)
echo.
echo 4. Run 'npm run dev' to see updated images on the website
echo.
echo 📖 See IMAGE_REQUIREMENTS.md for detailed specifications
echo.
pause
