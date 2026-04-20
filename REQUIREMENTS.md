# 📦 Installation & Requirements

## System Requirements

### Node.js & npm
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)

### Operating System
- Windows 10/11
- macOS 10.15+
- Linux (Ubuntu 20.04+, Debian 10+)

---

## Installation Steps

### 1. Install Node.js

#### Windows
```bash
# Download from official website
https://nodejs.org/

# Or use Chocolatey
choco install nodejs

# Or use Scoop
scoop install nodejs
```

#### macOS
```bash
# Using Homebrew
brew install node

# Or download from
https://nodejs.org/
```

#### Linux (Ubuntu/Debian)
```bash
# Using apt
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 2. Install Project Dependencies

```bash
# Navigate to project directory
cd bevilin-pharma

# Install all dependencies
npm install

# This will install:
# - Next.js 14.2.35
# - React 18
# - TypeScript
# - Tailwind CSS
# - Framer Motion
# - Lucide React (icons)
# - And all other dependencies from package.json
```

---

## Dependencies Overview

### Core Framework
```json
{
  "next": "14.2.35",
  "react": "^18",
  "react-dom": "^18"
}
```

### TypeScript
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18"
}
```

### Styling
```json
{
  "tailwindcss": "^3.4.1",
  "postcss": "^8",
  "autoprefixer": "^10.0.1"
}
```

### Animations
```json
{
  "framer-motion": "^11.0.0"
}
```

### Icons
```json
{
  "lucide-react": "^0.344.0"
}
```

### Linting
```json
{
  "eslint": "^8",
  "eslint-config-next": "14.2.35"
}
```

---

## Environment Setup

### 1. Create Environment File

```bash
# Copy example environment file
cp .env.example .env.local
```

### 2. Configure OpenAI API (Optional)

If you want to use the AI chatbot with real OpenAI integration:

```bash
# Edit .env.local
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: The chatbot will work without OpenAI API key (uses mock responses).

---

## Development Commands

### Start Development Server
```bash
npm run dev
```
- Opens at: http://localhost:3000
- Hot reload enabled
- Development mode with debugging

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Minifies code
- Optimizes images
- Generates static pages

### Start Production Server
```bash
npm start
```
- Runs production build
- Requires `npm run build` first
- Optimized performance

### Lint Code
```bash
npm run lint
```
- Checks for code quality issues
- Enforces coding standards
- TypeScript type checking

---

## Browser Requirements

### Supported Browsers

#### Desktop
- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

#### Mobile
- ✅ Chrome Mobile (Android)
- ✅ Safari Mobile (iOS 14.5+)
- ✅ Samsung Internet

### Feature Support

#### Voice Recognition
- ✅ Chrome Desktop/Mobile
- ✅ Edge Desktop
- ✅ Safari iOS 14.5+
- ❌ Firefox (not supported)

#### WebGL (Particle Effects)
- ✅ All modern browsers
- Fallback: CSS animations

---

## Optional Tools

### Recommended VS Code Extensions
```
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features
```

### Git (Version Control)
```bash
# Windows
choco install git

# macOS
brew install git

# Linux
sudo apt-get install git
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P > TypeScript: Restart TS Server
```

---

## Performance Optimization

### Production Build Size
- Initial Load: ~200KB (gzipped)
- Total Bundle: ~500KB
- Images: Optimized with Next.js Image

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Docker
```dockerfile
# Dockerfile included in project
docker build -t bevilin-pharma .
docker run -p 3000:3000 bevilin-pharma
```

---

## Security Notes

### API Keys
- Never commit `.env.local` to Git
- Use environment variables for sensitive data
- Rotate API keys regularly

### Dependencies
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## Support

### Documentation
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion

### Common Issues
1. **Voice not working**: Check browser compatibility
2. **Animations laggy**: Disable in browser dev tools
3. **Build fails**: Clear cache and rebuild
4. **Images not loading**: Check public folder structure

---

## Quick Start Summary

```bash
# 1. Install Node.js (v18+)
node --version

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Open browser
http://localhost:3000
```

✅ **You're ready to go!**
