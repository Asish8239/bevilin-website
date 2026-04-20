# Setup Guide - Bevilin Pharma

Complete step-by-step guide to set up and run the Bevilin Pharma website locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v18.17.0 or higher)
   - Download: https://nodejs.org/
   - Choose LTS (Long Term Support) version
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Code Editor** (Recommended: VS Code)
   - Download: https://code.visualstudio.com/

3. **Git** (Optional but recommended)
   - Download: https://git-scm.com/

### Required API Keys

1. **OpenAI API Key** (for AI chatbot)
   - Sign up: https://platform.openai.com/
   - Navigate to API Keys
   - Create new secret key
   - Copy and save securely

---

## 🚀 Installation Steps

### Step 1: Download/Clone Project

**Option A: Download ZIP**
1. Download the project ZIP file
2. Extract to your desired location
3. Open terminal in the extracted folder

**Option B: Clone with Git**
```bash
git clone <repository-url>
cd bevilin_new_site
```

### Step 2: Install Dependencies

Open terminal in project folder and run:

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- And other dependencies

**Wait for installation to complete** (may take 2-5 minutes)

### Step 3: Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` file:**
   ```env
   # OpenAI API Configuration
   OPENAI_API_KEY=your_actual_openai_api_key_here
   OPENAI_MODEL=gpt-3.5-turbo

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Bevilin Pharma
   ```

3. **Replace `your_actual_openai_api_key_here` with your real API key**

### Step 4: Verify Data Files

Ensure these files exist in `public/data/`:
- ✅ `products.json` - Product catalog
- ✅ `blogs.json` - Blog posts
- ✅ `faqs.json` - FAQ data

These files are already included in the project.

### Step 5: Run Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

### Step 6: Open in Browser

Visit: **http://localhost:3000**

You should see the Bevilin Pharma homepage!

---

## 🎨 Project Structure Overview

```
bevilin_new_site/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Products pages
│   ├── cart/              # Shopping cart
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/               # API routes
│       └── chat/          # Chatbot API
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── products/         # Product components
│   ├── layout/           # Header, Footer
│   └── chatbot/          # AI chatbot
├── lib/                  # Utility functions
│   ├── cart.ts          # Cart management
│   └── utils.ts         # Helper functions
├── public/              # Static files
│   └── data/           # JSON data
│       ├── products.json
│       ├── blogs.json
│       └── faqs.json
├── types/              # TypeScript types
├── .env.local         # Environment variables (create this)
├── package.json       # Dependencies
└── README.md         # Documentation
```

---

## 🧪 Testing the Features

### 1. Test Homepage
- Visit http://localhost:3000
- Check hero section loads
- Scroll through features
- View featured products

### 2. Test Products Page
- Click "Products" in navigation
- Try category filters
- Use search bar
- Click on a product

### 3. Test Product Detail
- Click any product card
- View product details
- Change quantity
- Click "Add to Cart"

### 4. Test Shopping Cart
- Add products to cart
- Click cart icon in header
- Update quantities
- Remove items
- Check total calculation

### 5. Test AI Chatbot
- Click chat button (bottom-right)
- Type a message like "What vitamins do you have?"
- Wait for AI response
- Try asking about products

### 6. Test Other Pages
- About: http://localhost:3000/about
- Blog: http://localhost:3000/blog
- Contact: http://localhost:3000/contact

---

## 🔧 Customization Guide

### Update Products

Edit `public/data/products.json`:

```json
{
  "id": "13",
  "name": "Your Product Name",
  "description": "Product description here",
  "price": 499,
  "originalPrice": 699,
  "category": "Vitamins & Supplements",
  "image": "https://via.placeholder.com/400x400",
  "inStock": true,
  "benefits": [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ],
  "usage": "How to use this product"
}
```

### Update Blog Posts

Edit `public/data/blogs.json`:

```json
{
  "id": "7",
  "title": "Your Blog Title",
  "excerpt": "Short description",
  "content": "Full blog content here...",
  "image": "https://via.placeholder.com/800x400",
  "author": "Author Name",
  "date": "March 20, 2024",
  "category": "Health"
}
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#22c55e',  // Change this
    600: '#16a34a',  // And this
  },
}
```

### Update Company Info

Edit these files:
- `components/layout/Footer.tsx` - Footer content
- `app/about/page.tsx` - About page
- `app/contact/page.tsx` - Contact details

---

## 📦 Build for Production

### Test Production Build

```bash
# Build the project
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to test production build.

### Check Build Output

Look for:
- ✅ No errors
- ✅ All pages compiled
- ✅ Optimized bundle size

---

## 🐛 Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "Port 3000 already in use"
**Solution:** 
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Chatbot not responding
**Solution:**
1. Check `.env.local` has correct API key
2. Verify API key is active on OpenAI
3. Check browser console for errors

### Issue: Products not showing
**Solution:**
1. Check `public/data/products.json` exists
2. Verify JSON syntax is valid
3. Clear browser cache (Ctrl+Shift+R)

### Issue: Build errors
**Solution:**
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Issue: Images not loading
**Solution:**
1. Check image URLs are accessible
2. Verify internet connection
3. Use placeholder images for testing

---

## 💡 Development Tips

### Hot Reload
- Changes auto-reload in browser
- No need to restart server
- Edit files and see changes instantly

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

### Keyboard Shortcuts
- `Ctrl + C` - Stop development server
- `Ctrl + Shift + R` - Hard refresh browser
- `F12` - Open browser developer tools

---

## 📚 Learn More

### Next.js Documentation
- https://nextjs.org/docs

### React Documentation
- https://react.dev/

### Tailwind CSS
- https://tailwindcss.com/docs

### Framer Motion
- https://www.framer.com/motion/

---

## 🆘 Getting Help

### Check Logs
```bash
# Development server logs
# Check terminal for errors

# Browser console
# Press F12 → Console tab
```

### Common Commands
```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

### Support Contacts
- Email: support@bevilin.com
- Phone: +91 1800-123-4567

---

## ✅ Setup Checklist

- [ ] Node.js installed (v18.17.0+)
- [ ] Project downloaded/cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` file created
- [ ] OpenAI API key added
- [ ] Development server running
- [ ] Homepage loads successfully
- [ ] Products page works
- [ ] Cart functionality tested
- [ ] Chatbot responds
- [ ] All pages accessible

---

## 🎯 Next Steps

After successful setup:

1. **Customize Content**
   - Update products
   - Add blog posts
   - Modify company info

2. **Test Thoroughly**
   - All pages
   - All features
   - Mobile responsiveness

3. **Prepare for Deployment**
   - Read DEPLOYMENT.md
   - Choose hosting platform
   - Configure production environment

---

**Congratulations! Your Bevilin Pharma website is ready! 🎉**

For deployment instructions, see `DEPLOYMENT.md`
