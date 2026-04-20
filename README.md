# Bevilin Pharma - Modern Pharmaceutical E-Commerce Platform

A premium, production-ready pharmaceutical e-commerce website built with Next.js 14, featuring an AI-powered chatbot assistant, modern UI/UX, and high-performance architecture.

## 🚀 Features

### Core Features
- **Modern UI/UX**: Clean, medical-grade design with glassmorphism and smooth animations
- **AI Chatbot**: Intelligent pharmaceutical assistant powered by OpenAI
- **Product Catalog**: Comprehensive product browsing with filters and search
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Responsive Design**: Mobile-first approach, works on all devices
- **Blog System**: Health and wellness content management
- **Contact System**: Multi-channel contact options

### Technical Features
- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Local Storage**: No external database required
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Lighthouse score > 90

## 📋 Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- OpenAI API key (for chatbot functionality)

## 🛠️ Installation

### 1. Clone or Download

```bash
# If using git
git clone <repository-url>
cd bevilin_new_site

# Or extract the downloaded files
cd bevilin_new_site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Bevilin Pharma
```

**Get your OpenAI API key:**
1. Visit https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy and paste it in `.env.local`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bevilin_new_site/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── chat/           # AI chatbot endpoint
│   ├── blog/               # Blog pages
│   ├── cart/               # Shopping cart
│   ├── contact/            # Contact page
│   ├── products/           # Product pages
│   │   └── [id]/          # Dynamic product detail
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/              # React components
│   ├── chatbot/            # AI chatbot components
│   ├── home/               # Homepage sections
│   ├── layout/             # Layout components
│   └── products/           # Product components
├── lib/                     # Utility functions
│   ├── cart.ts             # Cart management
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   └── data/               # JSON data files
│       ├── products.json   # Product catalog
│       ├── blogs.json      # Blog posts
│       └── faqs.json       # FAQ data
├── types/                   # TypeScript types
│   └── index.ts            # Type definitions
├── .env.example            # Environment template
├── .env.local              # Your environment (create this)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Update Products

Edit `public/data/products.json`:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "description": "Product description",
  "price": 299,
  "originalPrice": 499,
  "category": "Category Name",
  "image": "image-url",
  "inStock": true,
  "benefits": ["Benefit 1", "Benefit 2"],
  "usage": "Usage instructions"
}
```

### Update Blog Posts

Edit `public/data/blogs.json`:

```json
{
  "id": "unique-id",
  "title": "Blog Title",
  "excerpt": "Short description",
  "content": "Full content",
  "image": "image-url",
  "author": "Author Name",
  "date": "March 15, 2024",
  "category": "Category"
}
```

### Update FAQs

Edit `public/data/faqs.json`:

```json
{
  "id": "unique-id",
  "question": "Question text",
  "answer": "Answer text",
  "category": "Category"
}
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color shades
  },
  secondary: {
    // Your secondary color shades
  },
}
```

### Add Logo

Replace the logo placeholder in `components/layout/Navbar.tsx` and `components/layout/Footer.tsx` with your actual logo image.

## 🤖 AI Chatbot

The chatbot uses OpenAI's API with RAG (Retrieval Augmented Generation) to provide:
- Product recommendations
- Health information
- FAQ answers
- General assistance

**Safety Features:**
- No medical prescriptions
- Disclaimer on every response
- Context-aware responses
- Product knowledge integration

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load on demand
- **Caching**: localStorage for cart data
- **Animations**: GPU-accelerated with Framer Motion

## 🔒 Security

- Environment variables for sensitive data
- No hardcoded API keys
- Input validation on forms
- Safe AI responses with disclaimers

## 🐛 Troubleshooting

### Chatbot not working
- Check if `OPENAI_API_KEY` is set in `.env.local`
- Verify API key is valid
- Check browser console for errors

### Products not loading
- Ensure `public/data/products.json` exists
- Check JSON syntax is valid
- Clear browser cache

### Build errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (18.17.0+)

## 📝 License

This project is proprietary software for Bevilin Pharma.

## 🤝 Support

For support, email support@bevilin.com or call +91 1800-123-4567.

## 🎯 Future Enhancements

- User authentication
- Order management system
- Payment gateway integration
- Prescription upload
- Order tracking
- Admin dashboard
- Email notifications
- SMS alerts

---

Built with ❤️ for Bevilin Pharma
