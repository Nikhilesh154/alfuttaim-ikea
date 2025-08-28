#!/bin/bash

echo "🛋️  Al-Futtaim IKEA Furniture Store Setup"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Start the server
echo ""
echo "🛋️  Starting IKEA Al-Futtaim furniture store..."
echo ""
echo "📋 Instructions:"
echo "   1. Server will start on http://localhost:3001"
echo "   2. Open http://localhost:3001 in your browser"
echo "   3. Browse IKEA furniture collection"
echo "   4. Click any 'Buy Now' button to test payment"
echo "   5. Press Ctrl+C to stop the server"
echo ""
echo "🔑 API Configuration:"
echo "   • Client ID: testikea (configured for IKEA)"
echo "   • Payment Gateway: Juspay Sandbox"
echo "   • Currency: AED"
echo ""
echo "🛒 Featured Products:"
echo "   • EKTORP 3-Seat Sofa - 1,299 AED"
echo "   • HEMNES Bed Frame - 899 AED"
echo "   • PAX Wardrobe System - 2,199 AED"
echo "   • POÄNG Armchair - 599 AED"
echo "   • KALLAX Storage Unit - 399 AED"
echo "   • LACK Coffee Table - 149 AED"
echo ""

# Start the server
node server.js