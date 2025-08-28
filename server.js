const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

// Enable CORS for your frontend
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? [process.env.FRONTEND_URL || 'https://your-domain.com']
        : ['http://localhost:3001', 'http://localhost:3000', 'file://', 'http://127.0.0.1:5500'],
    credentials: true
}));

app.use(express.json());

// Payment initiation endpoint
app.post('/api/payment/initiate', async (req, res) => {
    try {
        console.log('Received payment request:', req.body);
        
        // Your Juspay API credentials (use environment variables in production)
        const JUSPAY_API_KEY = process.env.JUSPAY_API_KEY || 'Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==';
        const MERCHANT_ID = process.env.MERCHANT_ID || 'seamena';
        
        // Make the API call to Juspay from backend (no CORS issues)
        const juspayResponse = await fetch('https://sandbox.juspay.in/session', {
            method: 'POST',
            headers: {
                'version': '2021-06-01',
                'Content-Type': 'application/json',
                'Authorization': JUSPAY_API_KEY,
                'x-merchantid': MERCHANT_ID
            },
            body: JSON.stringify(req.body)
        });
        
        const juspayData = await juspayResponse.json();
        console.log('Juspay API Response:', juspayData);
        
        // Return the response to frontend
        res.json(juspayData);
        
    } catch (error) {
        console.error('Payment API Error:', error);
        res.status(500).json({ 
            error: 'Payment processing failed',
            details: error.message 
        });
    }
});

// Serve static files (your HTML)
app.use(express.static('.'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log();
    console.log('🚀 IKEA Al-Futtaim Server Started!');
    if (process.env.NODE_ENV === 'production') {
        console.log('🌐 Server running in production mode');
        console.log(`📱 Access your app at: ${process.env.APP_URL || 'your-deployed-url'}`);
    } else {
        console.log('📱 Open http://localhost:3001 to test IKEA furniture store');
    }
    console.log('🛒 Client ID: testikea (updated for IKEA)');
    console.log(`🔧 Running on port: ${PORT}`);
});