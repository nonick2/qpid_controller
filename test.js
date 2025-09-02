const http = require('http');
const { spawn } = require('child_process');

// Simple test runner
function runTests() {
  console.log('Starting tests...\n');
  
  let testsPassed = 0;
  let testsTotal = 0;
  
  function assert(condition, message) {
    testsTotal++;
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      testsPassed++;
    } else {
      console.log(`❌ FAIL: ${message}`);
    }
  }
  
  // Start the server
  const server = spawn('node', ['server.js'], { stdio: 'pipe' });
  
  // Wait for server to start
  setTimeout(() => {
    // Test 1: Server responds to GET /
    const req = http.request('http://localhost:8080/', { method: 'GET' }, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        assert(res.statusCode === 200, 'Server responds with status 200');
        assert(data === 'Hello World!', 'Server returns correct message');
        
        // Test 2: Check response headers
        assert(res.headers['content-type'], 'Response has content-type header');
        
        // Clean up and show results
        server.kill();
        
        setTimeout(() => {
          console.log(`\nTest Results: ${testsPassed}/${testsTotal} tests passed`);
          
          if (testsPassed === testsTotal) {
            console.log('🎉 All tests passed!');
            process.exit(0);
          } else {
            console.log('💥 Some tests failed!');
            process.exit(1);
          }
        }, 100);
      });
    });
    
    req.on('error', (err) => {
      assert(false, `Server request failed: ${err.message}`);
      server.kill();
      setTimeout(() => {
        console.log(`\nTest Results: ${testsPassed}/${testsTotal} tests passed`);
        process.exit(1);
      }, 100);
    });
    
    req.end();
  }, 1000); // Wait 1 second for server to start
  
  // Handle server startup
  server.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('listening on port 8080')) {
      console.log('Server started successfully');
    }
  });
  
  server.stderr.on('data', (data) => {
    console.error(`Server error: ${data}`);
  });
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };