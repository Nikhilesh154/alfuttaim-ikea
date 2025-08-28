# Al-Futtaim IKEA Furniture Store - Complete Setup

## 🛋️ Quick Start

### Option 1: One-Click Setup (Recommended)
```bash
chmod +x run.sh
./run.sh
```

### Option 2: Manual Setup
```bash
npm install
node server.js
```

Open http://localhost:3001 to test

## 📋 What's Included

### Files Created:
- `index.html` - IKEA furniture store with payment integration
- `server.js` - Backend proxy server for Juspay API
- `package.json` - Node.js dependencies
- `run.sh` - One-click setup script
- `README.md` - This file

### Features:
✅ IKEA design language with blue (#0058a3) and yellow (#ffdb00) theme  
✅ 6 authentic IKEA furniture products (149-2199 AED)  
✅ Payment modal with product summaries  
✅ Juspay API integration (CORS-free)  
✅ Backend proxy server  
✅ Updated client ID: `testikea`  

## 🛒 IKEA Product Catalog

### Living Room
- **EKTORP 3-Seat Sofa** - 1,299 AED
  - Washable removable covers, 10-year warranty
- **POÄNG Armchair** - 599 AED
  - Layer-glued bent birch frame, excellent back support
- **LACK Coffee Table** - 149 AED
  - Lightweight design, easy assembly

### Bedroom
- **HEMNES Bed Frame** - 899 AED
  - Solid pine construction, under-bed storage
- **PAX Wardrobe System** - 2,199 AED
  - Fully customizable interior, soft-closing hinges

### Storage
- **KALLAX Storage Unit** - 399 AED
  - 8 compartments, versatile usage

## 🎯 Testing the Payment Flow

1. **Start Server**: Run `./run.sh` or `node server.js`
2. **Open Browser**: Go to `http://localhost:3001`
3. **Browse Products**: Explore IKEA furniture collection
4. **Select Product**: Click any "Buy Now" button
5. **View Summary**: Modal shows product details and pricing
6. **Process Payment**: Click "Proceed to Payment"
7. **Juspay Page**: Payment page opens in new window

## 🔧 Configuration

### API Key Location:
File: `server.js` (Line 19)
```javascript
const JUSPAY_API_KEY = 'Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==';
```

### Merchant ID:
File: `server.js` (Line 20)
```javascript
const MERCHANT_ID = 'seamena';
```

### Client ID (Updated for IKEA):
File: `index.html` (Line 1089)
```javascript
"payment_page_client_id": "testikea"
```

## 🎨 IKEA Design Elements

### Color Scheme:
- **Primary Blue**: #0058a3 (IKEA brand blue)
- **Secondary Yellow**: #ffdb00 (IKEA brand yellow)
- **Background**: #f8f9fa (light gray)
- **Text**: #333 (dark gray)

### Typography:
- **Headers**: Bold, clean sans-serif
- **Body**: Arial, readable and functional
- **Buttons**: Rounded corners, IKEA blue background

### Layout:
- **Hero Section**: Blue-to-yellow gradient with "The Wonderful Everyday" tagline
- **Product Grid**: Clean card layout with hover effects
- **Brand Section**: Partnership information with statistics

## 🌐 Production Deployment

### Deploy Backend:
1. Upload files to your server
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Configure domain/SSL

### Update Frontend:
1. Change API endpoint in `index.html`
2. Replace `fetch('/api/payment/initiate'` with your server URL
3. Example: `fetch('https://your-domain.com/api/payment/initiate'`

## 🔍 Troubleshooting

### Common Issues:

**Port 3001 in use:**
```bash
lsof -ti:3001 | xargs kill -9
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Payment not working:**
- Check browser console for errors
- Verify API key in `server.js`
- Ensure server is running on port 3001
- Confirm client ID is set to "testikea"

**IKEA styling issues:**
- Verify CSS color variables (#0058a3, #ffdb00)
- Check product image SVGs are loading
- Ensure responsive design works on mobile

## 📞 Support

For issues or questions:
- Check browser console for error messages
- Verify server logs in terminal
- Ensure all dependencies are installed
- Confirm IKEA branding elements are displaying correctly

## 🎉 Success Indicators

✅ Server starts without errors  
✅ Page loads at http://localhost:3001  
✅ IKEA blue and yellow theme displays correctly  
✅ All 6 furniture products show with proper styling  
✅ Modal opens when clicking "Buy Now"  
✅ Product details display correctly  
✅ "Proceed to Payment" triggers API call with testikea client ID  
✅ Juspay payment page opens in new window  

## 🏢 About Al-Futtaim & IKEA Partnership

Founded in Sweden in 1943 by Ingvar Kamprad, IKEA has grown to become the global leader in home furnishings. Through our 34-year partnership, Al-Futtaim brings IKEA's vision of "creating a better everyday life for the many people" to families across Egypt, Oman, Qatar, and the UAE.

### Partnership Statistics:
- **34 Years** of successful partnership
- **11 Stores** across 4 countries
- **2200+** employees
- **Founded** in Sweden in 1943

Ready to test your IKEA furniture store! 🛋️✨