// Netlify serverless function for Juspay payment initiation
// This function securely handles API calls to Juspay without exposing credentials

exports.handler = async (event, context) => {
  // Set CORS headers for all responses
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('Received payment request:', event.body);
    
    // Parse the request body
    const requestData = JSON.parse(event.body);
    
    // Get environment variables (these will be set in Netlify dashboard)
    const JUSPAY_API_KEY = process.env.JUSPAY_API_KEY || 'Basic NDRBMjdCNjVENkM0NTQ0Qjg4QTQyMjAwQjYwRUI4Og==';
    const MERCHANT_ID = process.env.MERCHANT_ID || 'alfuttaimtest';
    const CLIENT_ID = process.env.PAYMENT_PAGE_CLIENT_ID || 'testikea';
    const GATEWAY_REF_ID = process.env.GATEWAY_REFERENCE_ID || 'Stripe_UK';
    
    // Add environment variables to the payload
    requestData.payment_page_client_id = CLIENT_ID;
    requestData['metadata.JUSPAY:gateway_reference_id'] = GATEWAY_REF_ID;
    
    console.log('Using MERCHANT_ID:', MERCHANT_ID);
    console.log('Using CLIENT_ID:', CLIENT_ID);
    console.log('Using GATEWAY_REF_ID:', GATEWAY_REF_ID);
    console.log('Environment loaded from Netlify');
    
    // Make the API call to Juspay
    const response = await fetch('https://sandbox.juspay.in/session', {
      method: 'POST',
      headers: {
        'version': '2021-06-01',
        'Content-Type': 'application/json',
        'Authorization': JUSPAY_API_KEY,
        'x-merchantid': MERCHANT_ID
      },
      body: JSON.stringify(requestData)
    });
    
    if (!response.ok) {
      throw new Error(`Juspay API error: ${response.status} ${response.statusText}`);
    }
    
    const juspayData = await response.json();
    console.log('Juspay API Response:', juspayData);
    
    // Return the response with CORS headers
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(juspayData)
    };
    
  } catch (error) {
    console.error('Payment API Error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Payment processing failed',
        details: error.message 
      })
    };
  }
};