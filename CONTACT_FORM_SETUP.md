# Contact Form Setup Guide - EmailJS Integration

The contact form is fully functional and ready to send emails. Follow these steps to complete the setup.

## Quick Start (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** (free account)
3. Verify your email
4. Log in to your dashboard

### Step 2: Get Your Public Key

1. In EmailJS dashboard, go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `abc123def456ghi789`)
3. Save it for later

### Step 3: Create Email Service

1. Go to **Email Services** in the left menu
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - Outlook
   - SendGrid
   - Or any other provider
4. Follow the setup wizard
5. After creation, copy the **Service ID** (looks like: `service_abc123def456`)

### Step 4: Create Email Template

1. Go to **Email Templates** in the left menu
2. Click **Create New Template**
3. Name it: `contact_form_template`
4. In the template editor, use this exact template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Sent via Bevilin Contact Form
```

**Important:** Make sure these variables are used exactly:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{message}}`

5. Set **To Email** to: `info@bevilin.com`
6. Click **Save**
7. Copy the **Template ID** (looks like: `template_abc123def456`)

### Step 5: Create `.env.local` File

In the project root directory, create a file named `.env.local` with these exact values:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Replace:**
- `your_public_key_here` → Your Public Key from Step 2
- `your_service_id_here` → Your Service ID from Step 3
- `your_template_id_here` → Your Template ID from Step 4

**Example:**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456ghi789jkl012
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123def456
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc123
```

### Step 6: Restart Development Server

```bash
npm run dev
```

The server will restart and load the new environment variables.

### Step 7: Test the Form

1. Open http://localhost:3000/contact
2. Fill out the form:
   - Name: Your Name
   - Email: your@email.com
   - Phone: (optional)
   - Message: Test message
3. Click **Send Message**
4. You should see: **"Message sent successfully! We'll get back to you soon."**
5. Check your email at `info@bevilin.com` for the message

## Troubleshooting

### "Failed to send message" Error

**Problem:** Form shows error after clicking send

**Solutions:**
1. **Check environment variables:**
   - Make sure `.env.local` file exists in project root
   - Verify all 3 values are filled (no empty values)
   - Restart dev server after creating `.env.local`

2. **Verify EmailJS credentials:**
   - Go to EmailJS dashboard
   - Check Public Key, Service ID, Template ID are correct
   - Copy them again and update `.env.local`

3. **Check email service status:**
   - In EmailJS, go to Email Services
   - Make sure your service shows "Connected" status
   - If not connected, follow the setup wizard again

4. **Verify template variables:**
   - Go to Email Templates
   - Check template uses exact variable names:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{phone}}`
     - `{{message}}`

### Emails Not Arriving

**Problem:** Form sends successfully but email doesn't arrive

**Solutions:**
1. Check spam/junk folder
2. Verify "To Email" in template is correct: `info@bevilin.com`
3. Test directly in EmailJS dashboard:
   - Go to Email Templates
   - Click "Test It"
   - Fill sample data
   - Click "Send Test Email"
4. Check email service limits (free tier has limits)

### "Email service not configured" Error

**Problem:** Form shows this error

**Solution:**
- Environment variables are missing or empty
- Create `.env.local` with all 3 values
- Restart dev server
- Refresh browser

## Production Deployment (Vercel)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Go to **Environment Variables**
3. Add these 3 variables:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. Use the same values from your `.env.local`
5. Redeploy your project

The form will work automatically on production.

## Security Notes

- These are public keys (safe to expose in frontend)
- They only allow sending through your specific template
- No sensitive data is exposed
- EmailJS handles all security

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/contact
- Template Variables: https://www.emailjs.com/docs/user-guide/dynamic-templates/

## Checklist

Before testing, verify:

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created with correct variables
- [ ] `.env.local` file created in project root
- [ ] All 3 environment variables filled with real values
- [ ] Dev server restarted after creating `.env.local`
- [ ] No typos in environment variable names
- [ ] Template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

