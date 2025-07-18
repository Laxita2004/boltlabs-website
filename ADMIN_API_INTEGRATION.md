# Admin API Integration Documentation

## Overview

This document describes the integration of three backend APIs into the Admin Panel Frontend for managing service requests.

## Backend APIs

### 1. GET /api/admin/requests (fetchRequest)

**Purpose**: Fetches a list of admin requests.

**Response Format**:
```json
{
  "requests": [
    {
      "req_id": "uuid",
      "user_id": "uuid",
      "service": "string",
      "domain_id": "uuid",
      "request_date": "datetime",
      "status": "pending",
      "user": {
        "user_id": "uuid",
        "name": "string",
        "email": "string"
      },
      "domain": {
        "domain_id": "uuid",
        "name": "string"
      }
    }
  ]
}
```

**Implementation**: `backend/controllers/adminController.js` - `fetchRequests()`

### 2. POST /api/admin/requests/:id/respond (respondToRequest)

**Purpose**: Updates request status (Approve/Reject).

**Request Body**:
```json
{
  "status": "approved" | "rejected"
}
```

**Response Format**:
```json
{
  "message": "Request approved and service created",
  "service": {
    "service_id": "uuid",
    "user_id": "uuid",
    "domain_id": "uuid",
    "service": "string"
  }
}
```

**Implementation**: `backend/controllers/adminController.js` - `respondToRequest()`

### 3. GET /api/admin/services (fetchServices)

**Purpose**: Fetches services linked to requests.

**Response Format**:
```json
{
  "services": [
    {
      "service_id": "uuid",
      "user_id": "uuid",
      "service": "string",
      "domain_id": "uuid",
      "idea_date": "datetime",
      "user": {
        "user_id": "uuid",
        "name": "string",
        "email": "string"
      },
      "domain": {
        "domain_id": "uuid",
        "name": "string"
      }
    }
  ]
}
```

**Implementation**: `backend/controllers/adminController.js` - `fetchServices()`

## Frontend Integration

### Admin Panel UI Features

The enhanced ServiceRequests component (`frontend/src/components/admin/ServiceRequests.jsx`) includes:

1. **Table Layout**: Clean table showing requests with columns:
   - ID
   - User (name and email)
   - Service (service name and domain)
   - Status (with color-coded badges)
   - Date
   - Actions (Approve/Reject buttons)

2. **Status Filtering**: Dropdown to filter requests by status:
   - All Requests
   - Pending
   - Approved
   - Rejected

3. **Statistics Cards**: Real-time stats showing:
   - Total Requests
   - Pending Requests
   - Approved Requests
   - Rejected Requests

4. **Action Buttons**: 
   - Approve button (green) - only shown for pending requests
   - Reject button (red) - only shown for pending requests
   - Loading states with spinners

### Key Components

#### useAdmin Hook (`frontend/src/hooks/useAdmin.js`)
- Manages API calls and state
- Handles loading and error states
- Provides functions for all admin operations

#### API Service (`frontend/src/services/api.js`)
- Configures axios with authentication
- Defines all admin API endpoints
- Handles request/response interceptors

### Data Flow

1. **Component Mount**: ServiceRequests component calls `fetchRequests()` and `fetchServices()`
2. **Data Loading**: useAdmin hook makes API calls and updates state
3. **UI Rendering**: Component renders table with filtered data
4. **User Actions**: Approve/Reject buttons trigger `respondToRequest()`
5. **State Update**: Component refreshes data after actions

## API Routes

All routes are protected with authentication middleware:

```javascript
// Routes in backend/routes/adminRoutes.js
router.get('/requests', authenticateUser, authorizeAdmin, fetchRequests);
router.post('/requests/:req_id/respond', authenticateUser, authorizeAdmin, respondToRequest);
router.get('/services', authenticateUser, authorizeAdmin, fetchServices);
```

## Error Handling

- **Frontend**: Displays error messages with dismiss option
- **Backend**: Returns structured error responses
- **Network**: Axios interceptors handle 401 unauthorized redirects

## Testing

Run the test script to verify API functionality:

```bash
node test-admin-apis.js
```

## Database Schema

The integration uses the following Prisma models:

- `ServiceRequest`: Stores service requests
- `Service`: Stores approved services
- `User`: User information
- `Domain`: Domain information
- `Member`: Team member information

## Security

- All admin routes require authentication
- Admin role authorization required
- JWT token-based authentication
- Request validation and sanitization

## Future Enhancements

1. **Real-time Updates**: WebSocket integration for live updates
2. **Bulk Actions**: Approve/reject multiple requests at once
3. **Advanced Filtering**: Date range, user, domain filters
4. **Export Functionality**: Export requests to CSV/PDF
5. **Audit Trail**: Track all admin actions
6. **Notifications**: Email/SMS notifications for status changes 