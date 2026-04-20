# Deployment Guide - Bevilin Pharma

Complete guide for deploying your Bevilin Pharma website to production.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Your code pushed to GitHub

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next

3. **Add Environment Variables**
   In Vercel dashboard, go to Settings → Environment Variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-3.5-turbo
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=Bevilin Pharma
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Custom Domain (Optional)
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

## 🌐 Deploy to Netlify

### Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect GitHub repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Site Settings

---

## 🐳 Deploy with Docker

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run
```bash
# Build image
docker build -t bevilin-pharma .

# Run container
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=your_key \
  -e OPENAI_MODEL=gpt-3.5-turbo \
  bevilin-pharma
```

---

## ☁️ Deploy to AWS

### Using AWS Amplify

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

### Using AWS EC2

1. **Launch EC2 Instance**
   - Ubuntu 22.04 LTS
   - t2.micro or larger
   - Open ports 80, 443, 22

2. **SSH into instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clone and Setup**
   ```bash
   git clone <your-repo>
   cd bevilin_new_site
   npm install
   npm run build
   ```

5. **Install PM2**
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "bevilin" -- start
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/bevilin
   ```

   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/bevilin /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🔧 Environment Variables

Required for all deployments:

```env
# OpenAI Configuration (Required for chatbot)
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-3.5-turbo

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Bevilin Pharma
```

---

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] OpenAI API key is valid and has credits
- [ ] Product images are optimized
- [ ] All JSON data files are valid
- [ ] Test build locally: `npm run build`
- [ ] Test production mode: `npm start`
- [ ] Check all pages load correctly
- [ ] Test chatbot functionality
- [ ] Test cart functionality
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags configured
- [ ] Analytics setup (optional)
- [ ] Error tracking setup (optional)

---

## 📊 Post-Deployment

### Monitor Performance
- Use Vercel Analytics (if on Vercel)
- Setup Google Analytics
- Monitor OpenAI API usage
- Check error logs regularly

### Optimize
- Enable caching
- Compress images
- Monitor Lighthouse scores
- Setup CDN for static assets

### Backup
- Regular database backups (if using DB)
- Version control with Git
- Document configuration changes

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Chatbot Not Working
- Verify OPENAI_API_KEY is set
- Check API key has credits
- Review API logs for errors

### Images Not Loading
- Check image URLs are accessible
- Verify Next.js Image domains configured
- Check file permissions

### 500 Errors
- Check server logs
- Verify all environment variables
- Check API routes are working

---

## 📞 Support

For deployment issues:
- Email: support@bevilin.com
- Phone: +91 1800-123-4567

---

## 🎯 Recommended Hosting

**Best Options:**
1. **Vercel** - Easiest, best for Next.js, free tier
2. **Netlify** - Good alternative, free tier
3. **AWS Amplify** - Scalable, AWS ecosystem
4. **DigitalOcean** - Cost-effective, full control

**For Production:**
- Use Vercel Pro or AWS for better performance
- Setup monitoring and alerts
- Enable automatic backups
- Use CDN for static assets

---

Built with ❤️ for Bevilin Pharma
