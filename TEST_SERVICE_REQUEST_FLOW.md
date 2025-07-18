# Service Request Flow Testing Guide

## Overview
This guide demonstrates how to test the complete service request flow from user submission to admin approval/rejection.

## Prerequisites
- Backend server running on port 8080
- Frontend running on port 5173
- Test data seeded in database

## Test Data Created
The seed script has created the following test accounts:
- **User**: user@example.com / user123
- **Admin**: admin@example.com / admin123
- **Member**: member@example.com / member123

## Step-by-Step Testing Flow

### Step 1: Login as User
1. Navigate to `http://localhost:5173/login`
2. Select "User" role
3. Login with:
   - Email: `user@example.com`
   - Password: `user123`
4. You should be redirected to the home page

### Step 2: Access User Dashboard
1. Navigate to `http://localhost:5173/dashboard` (protected route)
2. You should see the user dashboard with:
   - Profile information
   - New Request tab
   - History tab showing existing requests

### Step 3: Submit a New Service Request
1. Click on the "New Request" tab
2. Fill out the form:
   - **Service Type**: "E-commerce Website Development"
   - **Domain**: Select "Web Development"
   - **Description**: "Need a complete e-commerce website with payment integration"
3. Click "Submit Request"
4. You should see a success message and the request should appear in the History tab

### Step 4: Login as Admin
1. Open a new incognito/private browser window
2. Navigate to `http://localhost:5173/login`
3. Select "Admin" role
4. Login with:
   - Email: `admin@example.com`
   - Password: `admin123`
5. You should be redirected to the admin dashboard

### Step 5: View Service Requests
1. In the admin dashboard, click on "Service Requests" in the sidebar
2. You should see:
   - The new request you just submitted
   - Existing sample requests
   - Request details including user info and domain

### Step 6: Approve or Reject Request
1. Find your new request in the list
2. Click "Approve" or "Reject" button
3. If approved:
   - Request will be removed from the list
   - A new service will be created
   - User will see updated status in their dashboard
4. If rejected:
   - Request will be removed from the list
   - User will see updated status in their dashboard

## API Endpoints Being Tested

### User Endpoints
- `POST /api/users/requests` - Create service request
- `GET /api/users/requests/previous` - Get user's requests
- `GET /api/users/domains` - Get available domains

### Admin Endpoints
- `GET /api/admin/requests` - Get all service requests
- `POST /api/admin/requests/:id/respond` - Approve/reject request
- `GET /api/admin/services` - Get services (after approval)

## Expected Behavior

### When User Submits Request:
1. Request is saved to database with status "pending"
2. User sees success message
3. Request appears in user's history
4. Admin can see the request in admin panel

### When Admin Approves Request:
1. Request is deleted from ServiceRequest table
2. New Service is created with the request data
3. Request disappears from admin panel
4. User sees updated status in their dashboard

### When Admin Rejects Request:
1. Request is deleted from ServiceRequest table
2. No service is created
3. Request disappears from admin panel
4. User sees updated status in their dashboard

## Troubleshooting

### Common Issues:

1. **403 Forbidden Errors**
   - Make sure you're logged in with the correct role
   - Check that the token is being sent in API requests
   - Verify the user has the correct permissions

2. **404 Not Found**
   - Ensure backend server is running on port 8080
   - Check that all routes are properly registered

3. **Database Connection Issues**
   - Verify database is running and accessible
   - Check environment variables are set correctly

4. **CORS Errors**
   - Ensure CORS is configured properly in backend
   - Check that frontend is making requests to correct URL

### Debug Steps:
1. Check browser console for JavaScript errors
2. Check network tab for failed API requests
3. Check backend terminal for server errors
4. Verify database contains the expected data

## Verification Commands

### Check Database Content:
```sql
-- Check service requests
SELECT * FROM "public"."ServiceRequest";

-- Check services (after approval)
SELECT * FROM "public"."Service";

-- Check users
SELECT * FROM "public"."User";

-- Check domains
SELECT * FROM "public"."Domain";
```

### Test API Endpoints:
```bash
# Test user login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"user123","role":"user"}'

# Test admin login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123","role":"admin"}'
```

## Success Criteria
✅ User can login and access dashboard
✅ User can submit new service request
✅ Request appears in admin panel
✅ Admin can approve/reject request
✅ Request status updates correctly
✅ No infinite loops or errors in console 