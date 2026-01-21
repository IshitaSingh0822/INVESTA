const config = {
  API_URL: process.env.REACT_APP_API_URL || 'https://investa-backend-1fih.vercel.app',
  DASHBOARD_URL: process.env.REACT_APP_DASHBOARD_URL || 'https://investa-dashboard-eight.vercel.app'
};

export default config;
```

### 3. **Frontend - Create `.env` file** (for local development)
```
REACT_APP_API_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3000
```

### 4. **Frontend - Create `.env.production` file** (for production)
```
REACT_APP_API_URL=https://investa-backend-1fih.vercel.app
REACT_APP_DASHBOARD_URL=https://investa-dashboard-eight.vercel.app
