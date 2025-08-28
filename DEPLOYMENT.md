# 🚀 Deployment Guide - IKEA Al-Futtaim App

## Quick Deploy Options

### Option 1: Render (Recommended - Free Tier Available)

1. **Create Render Account**: Go to [render.com](https://render.com) and sign up
2. **Connect Repository**: 
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
3. **Configure Service**:
   - Name: `alfuttaim-ikea-app`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Set Environment Variables**:
   ```
   NODE_ENV=production
   APP_URL=https://your-app-name.onrender.com
   FRONTEND_URL=https://your-app-name.onrender.com
   JUSPAY_API_KEY=Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==
   MERCHANT_ID=seamena
   ```
5. **Deploy**: Click "Create Web Service"

### Option 2: Railway

1. **Create Railway Account**: Go to [railway.app](https://railway.app)
2. **Deploy from GitHub**:
   - Click "Deploy from GitHub repo"
   - Select your repository
3. **Set Environment Variables** in Railway dashboard:
   ```
   NODE_ENV=production
   JUSPAY_API_KEY=Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg==
   MERCHANT_ID=seamena
   ```
4. **Custom Domain**: Railway provides a domain automatically

### Option 3: Heroku

1. **Install Heroku CLI**: Download from [heroku.com](https://heroku.com)
2. **Login and Create App**:
   ```bash
   heroku login
   heroku create alfuttaim-ikea-app
   ```
3. **Set Environment Variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JUSPAY_API_KEY="Basic MDExOTU5NURFNDI0NTE4OUJCNzdENUU1MDhDMURCOg=="
   heroku config:set MERCHANT_ID=seamena
   ```
4. **Deploy**:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

## After Deployment

1. **Update CORS**: Replace `your-domain.com` in server.js with your actual domain
2. **Test Payment Flow**: Verify Juspay integration works with your public URL
3. **Update Frontend**: If you have separate frontend files, update API endpoints to point to your deployed backend

## Environment Variables Explained

- `NODE_ENV`: Set to "production" for optimized performance
- `APP_URL`: Your deployed application URL
- `FRONTEND_URL`: URL where your frontend is hosted (same as APP_URL if serving static files)
- `JUSPAY_API_KEY`: Your Juspay API authentication key
- `MERCHANT_ID`: Your Juspay merchant identifier

## Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive data
- Consider using Juspay production credentials for live deployment
- Enable HTTPS (most platforms provide this automatically)

## Troubleshooting

- **CORS Issues**: Ensure FRONTEND_URL matches your actual domain
- **Port Issues**: Use `process.env.PORT` (already configured)
- **API Errors**: Check Juspay credentials and endpoint URLs
- **Static Files**: Ensure all HTML/CSS/JS files are in the root directory