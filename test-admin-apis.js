const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

// Test the three admin APIs
async function testAdminAPIs() {
  console.log('🧪 Testing Admin APIs...\n');

  try {
    // Test 1: GET /api/admin/requests (fetchRequest)
    console.log('1. Testing GET /api/admin/requests...');
    const requestsResponse = await axios.get(`${BASE_URL}/admin/requests`);
    console.log('✅ Success:', requestsResponse.data);
    console.log('📊 Requests count:', requestsResponse.data.requests?.length || 0);
    console.log('');

    // Test 2: GET /api/admin/services (fetchServices)
    console.log('2. Testing GET /api/admin/services...');
    const servicesResponse = await axios.get(`${BASE_URL}/admin/services`);
    console.log('✅ Success:', servicesResponse.data);
    console.log('📊 Services count:', servicesResponse.data.services?.length || 0);
    console.log('');

    // Test 3: POST /api/admin/requests/:id/respond (respondToRequest)
    console.log('3. Testing POST /api/admin/requests/:id/respond...');
    if (requestsResponse.data.requests?.length > 0) {
      const firstRequest = requestsResponse.data.requests[0];
      console.log(`Testing with request ID: ${firstRequest.req_id}`);
      
      try {
        const respondResponse = await axios.post(
          `${BASE_URL}/admin/requests/${firstRequest.req_id}/respond`,
          { status: 'approved' }
        );
        console.log('✅ Success:', respondResponse.data);
      } catch (error) {
        console.log('⚠️  Note: This might fail if auth is required or request already processed');
        console.log('Error:', error.response?.data || error.message);
      }
    } else {
      console.log('⚠️  No requests available to test respond endpoint');
    }

  } catch (error) {
    console.error('❌ Error testing APIs:', error.response?.data || error.message);
  }
}

// Run the test
testAdminAPIs(); 