// netlify/functions/geocode.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Get address from query string
  const { address } = event.queryStringParameters;
  
  if (!address) {
    return { statusCode: 400, body: 'Address parameter is required' };
  }

  try {
    // Use environment variable for API key
    const API_KEY = process.env.GEOAPIFY_API_KEY;
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_KEY}`
    );
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'Failed to fetch data' }) 
    };
  }
};
