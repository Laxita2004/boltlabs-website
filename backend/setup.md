# Backend Setup Guide

## Quick Setup

### 1. Install Dependencies
```bash
cd boltlabs-website/backend
npm install
```

### 2. Create Environment File
Create a `.env` file in the backend directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url_here
SUPABASE_KEY=your_supabase_anon_key_here

# Server Configuration
PORT=5000

# JWT Configuration
JWT_SECRET=your_jwt_secret_here

# Database Configuration (if using Prisma)
DATABASE_URL=your_database_url_here

# Email Configuration (optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_here
```

### 3. Get Supabase Credentials
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Go to Settings > API
4. Copy the Project URL and anon/public key

### 4. Generate JWT Secret
You can generate a secure JWT secret using:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 5. Database Setup (if using Prisma)
```bash
npx prisma generate
npx prisma db push
```

### 6. Start the Server
```bash
npm start
```

You should see: `🚀 Server running on port 5000`

## Testing the Connection

1. Start your frontend:
```bash
cd boltlabs-website/frontend
npm run dev
```

2. Navigate to the admin panel and use the Debug Panel to test the connection

3. If you see errors, check:
   - Backend server is running on port 5000
   - Environment variables are correctly set
   - Database connection is working
   - No firewall blocking localhost:5000

## Common Issues

### "Failed to fetch" Error
- Backend server not running
- Wrong port number
- CORS issues
- Network connectivity problems

### "Access denied" Error
- Missing or invalid JWT token
- User doesn't have admin role
- Token expired

### Database Connection Error
- Invalid DATABASE_URL
- Database server not running
- Network connectivity issues

## Debug Steps

1. Check if backend is running: `http://localhost:5000/api/admin/health`
2. Check browser console for detailed errors
3. Check network tab in browser dev tools
4. Verify all environment variables are set correctly 