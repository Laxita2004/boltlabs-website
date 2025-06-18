# Team Member Panel APIs

This document describes the REST APIs for the BoltLabs team member panel.

## Authentication

All endpoints require authentication using a Bearer token with the `member` role.

```
Authorization: Bearer <jwt_token>
```

## Endpoints

### 1. Assigned Tasks API

**Endpoint:** `GET /api/team-member/tasks/current`

**Purpose:** Fetch all active tasks assigned to the authenticated team member

**Response:**
```json
[
  {
    "member_id": "uuid",
    "service_id": "uuid",
    "status": "ASSIGNED" | "IN_PROGRESS",
    "completedAt": null,
    "rating": null,
    "feedback": null,
    "service": {
      "service_id": "uuid",
      "user_id": "uuid",
      "service": "string",
      "domain_id": "uuid",
      "idea_date": "2024-01-01T00:00:00.000Z",
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
  }
]
```

### 2. Task History API

**Endpoint:** `GET /api/team-member/tasks/history`

**Purpose:** Get completed/rejected tasks with pagination

**Query Parameters:**
- `cursor` (optional): Pagination cursor
- `limit` (optional): Number of items per page (default: 10)

**Response:**
```json
{
  "tasks": [
    {
      "member_id": "uuid",
      "service_id": "uuid",
      "status": "COMPLETED" | "REJECTED",
      "completedAt": "2024-01-01T00:00:00.000Z",
      "rating": 5,
      "feedback": "Great work!",
      "service": {
        "service_id": "uuid",
        "user_id": "uuid",
        "service": "string",
        "domain_id": "uuid",
        "idea_date": "2024-01-01T00:00:00.000Z",
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
    }
  ],
  "nextCursor": "uuid" | null
}
```

### 3. Task Status Overview API

**Endpoint:** `GET /api/team-member/tasks/stats`

**Purpose:** Get performance metrics and status distribution

**Query Parameters:**
- `dateRange` (optional): Number of days to look back (default: 30)

**Response:**
```json
{
  "statusCounts": {
    "ASSIGNED": 5,
    "IN_PROGRESS": 3,
    "COMPLETED": 12,
    "REJECTED": 1
  },
  "avgCompletionTime": 7,
  "avgUserRating": 4.5,
  "totalRatedTasks": 10
}
```

## Database Schema Changes

The following fields were added to the `MemberService` model:

```prisma
model MemberService {
  member_id  String
  service_id String
  status     WorkStatus @default(ASSIGNED)
  completedAt DateTime?  // When the task was completed
  rating     Int?        // User rating (1-5)
  feedback   String?     // User feedback text

  member     Member     @relation(fields: [member_id], references: [member_id], onDelete: Cascade)
  service    Service    @relation(fields: [service_id], references: [service_id], onDelete: Cascade)

  @@id([member_id, service_id])
}

enum WorkStatus {
  ASSIGNED
  IN_PROGRESS
  COMPLETED
  REJECTED
}
```

## Usage Examples

### Get current tasks
```bash
curl -H "Authorization: Bearer <token>" \
     http://localhost:5000/api/team-member/tasks/current
```

### Get task history with pagination
```bash
curl -H "Authorization: Bearer <token>" \
     "http://localhost:5000/api/team-member/tasks/history?limit=5"
```

### Get stats for last 60 days
```bash
curl -H "Authorization: Bearer <token>" \
     "http://localhost:5000/api/team-member/tasks/stats?dateRange=60"
``` 